/* Extract */

// Load tree data per lang 
function fetchTreeData(lang) {
	if(lang == "fr") {
		// Mine
		return fetch("https://raw.githubusercontent.com/antilogos/SimpleFiltre/master/TreeParser/data-321.json").then(response => response.json()).then(parsed => {
			passiveSkillTreeData = parsed;
			treeNodes = extractNodesData(parsed);
			loadPassive = true;
		});
	} else {
		// GGG Official
		return fetch("https://raw.githubusercontent.com/grindinggear/skilltree-export/master/data.json").then(response => response.json()).then(parsed => {
			passiveSkillTreeData = parsed;
			treeNodes = extractNodesData(parsed);
			loadPassive = true;
		});
	}
}


// Function found on the web to decode Base64 in pure javascript
function decodeBase64(s) {
	var e={},i,b=0,c,x,l=0,a,r='',w=String.fromCharCode,L=s.length;
	var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	for(i=0;i<64;i++){e[A.charAt(i)]=i;}
	for(x=0;x<L;x++){
		c=e[s.charAt(x)];b=(b<<6)+c;l+=6;
		while(l>=8){((a=(b>>>(l-=8))&0xff)||(x<(L-2)))&&(r+=w(a));}
	}
	return r;
};

function hashToView(hash) {
	// Converting url encoded in base64 with some quirks into binary
	let buffer = decodeBase64(hash.split("/").pop().replaceAll("-","+").replaceAll("_","/"));
	let reader = new Uint8Array(buffer.length);
	for(let i = 0; i < buffer.length; i++){
		reader[i] = buffer[i].charCodeAt(0);
	}
	// do something with each byte in the array
	let view = new DataView(reader.buffer, 0);

	return view;
}

function parseUrl(url) {
	const view = hashToView(url);
	// This is how the passive skill tree url is
	const version = view.getInt32(0);
	const characterClass = view.getInt8(4);
	const ascendancyClass = view.getInt8(5);
	
	// or fullscreen in version 4
	const nodeSkillCount = view.getInt8(6);
	
	var passiveNodes = [];
	var clusterNodes = [];
	var masteryNodes = new Map();
	
	if(version > 4) {
		// List of passiveNodes are UInt16 from offset 7
		for(var i = 0; i < nodeSkillCount*2; i+=2){
			try {
				passiveNodes.push(view.getUint16(7+i));
			} catch (error) {
				console.error(error);
			}
		}
	} else {
		try {
			// List of passiveNodes are UInt16 from offset 7
			for(var i = 7; i < view.buffer.length; i+=2){
				passiveNodes.push(view.getUint16(i));
			}
		} catch (error) {
			console.error(error);
		}
	}
		
	if(version > 4) {
		try {
			const clusterNodeCount = view.getInt8(7+2*nodeSkillCount);
			// List of extra cluster node are UInt16 from offset 7+ 2x number of skill nodes
			for(var i = 0; i < clusterNodeCount*2; i+=2){
					clusterNodes.push(view.getUint16(8+2*nodeSkillCount+i));
			}

			if(version > 5) {
				try {
					const masteryNodeCount = view.getInt8(8+2*nodeSkillCount+2*clusterNodeCount);
					// List of mastery group/effect pair are UInt16 from offset 7+ 2x number of skill nodes
					for(var i = 0; i < masteryNodeCount*4; i+=4){
							let masteryPair = view.getUint32(9+2*nodeSkillCount+2*clusterNodeCount+i);
							masteryNodes.set(masteryPair >>> 16,  masteryPair & 0xffff);
					}
				} catch (error) {
					console.error(error);
				}
			}
		} catch (error) {
			console.error(error);
		}
	}
	
	return {tree: passiveNodes, cluster: clusterNodes, mastery: masteryNodes, startingClass: characterClass};
};

/* Transform */

// Take the passive skill tree and extract all the nodes that are relevant with added coordinates
function extractNodesData(jsonData) {
	// keep a map of nodes that matters
	const nodeMap = new Map();
	for( let[key, value] of Object.entries(passiveSkillTreeData.nodes)) {
    // No cluster jewels, no standard nodes
		if(!value.spc || value.spc.length == 0) {
			nodeMap[key] = value;
		}
	}

	// Parse the groups to get coordinate of the center of circle if needed
	for( let [key, value] of Object.entries(passiveSkillTreeData.groups)) {
		// Ignore cluster jewels
		if(!value.isProxy) {
			// No orbit declaration in group
			for( let node of value.nodes) {
				const nodeObject = nodeMap[node];
				if(node in nodeMap) {
					if(nodeObject.orbit != 0) {
						// get the radius of the orbits from the groupNode
						const radius = passiveSkillTreeData.constants.orbitRadii[nodeObject.orbit];
						// Number of point on the circle
						const skillOrbit = passiveSkillTreeData.constants.skillsPerOrbit[nodeObject.orbit]; 
						// Place the node in the orbit and use orbit position to get him at the right location
						nodeObject.x = value.x + (Math.sin(Math.PI*2*nodeObject.orbitIndex/skillOrbit)*radius);
						nodeObject.y = value.y - (Math.cos(Math.PI*2*nodeObject.orbitIndex/skillOrbit)*radius);
					} else {
						// node from group without coordinates?
						nodeObject.x = value.x;
						nodeObject.y = value.y;
						nodeObject.anomaly = true;
					}
					nodeObject.id = node;
					// Store back the coordinates
					nodeMap[node] = nodeObject;
				}
			}
		}
	}
	return nodeMap;
};

/* Load */

const LARGE_NODE_SIZE = 96, MEDIUM_NODE_SIZE = 58, SMALL_NODE_SIZE = 32, CONNECTION_SIZE = 32, ALLOCATED_NODE = 72, ALLOCATED_PATH = 96;
const classPosition = [{x:80,y:580},{x:660,y:80},{x:660,y:480},{x:480,y:580},{x:160,y:500},{x:320,y:580},{x:160,y:580}];
const ascendancyPosition = {'Ascendant':{x:220,y:180}, 'Juggernaut':{x:660,y:0}, 'Berserker':{x:330,y:340}, 'Chieftain':{x:0,y:500}, 'Raider':{x:660,y:400}, 'Deadeye':{x:80,y:500}, 'Pathfinder':{x:660,y:320}, 'Occultist':{x:660,y:240}, 'Elementalist':{x:240,y:500}, 'Necromancer':{x:660,y:160}, 'Slayer':{x:240,y:580}, 'Gladiator':{x:320,y:500}, 'Champion':{x:440,y:420}, 'Inquisitor':{x:560,y:500}, 'Hierophant':{x:480,y:500}, 'Guardian':{x:400,y:500}, 'Assassin':{x:330,y:260}, 'Trickster':{x:400,y:580}, 'Saboteur':{x:0,y:580}, 'Scion':{x:80,y:580}, 'Marauder':{x:660,y:80}, 'Ranger':{x:660,y:480}, 'Witch':{x:480,y:580}, 'Duelist':{x:160,y:500}, 'Templar':{x:320,y:580}, 'Shadow':{x:160,y:580}};
const classImageSize = {x:76,y:80};

function displayedNode(node, classId, ascendClassId) {
	return node.id && !node.isMastery 
			&& ((!node.isAscendancyStart && !node.ascendancyName) || node.ascendancyName == ascendClassId) 
			&& (node.classStartIndex == null || node.classStartIndex == classId)
			&& !node.isMultipleChoiceOption
			&& !node.isBlighted && (!node.spc || node.spc.length == 0)
}

function buildSvgTree(elementId, treeNodes, classId, ascendClassId) {
	const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
	svg.setAttribute("class","skillTree");
	svg.setAttribute("xmlns","http://www.w3.org/2000/svg")
	
	// Drawing the links between nodes
	for( let[key, value] of Object.entries(treeNodes)) {
		// Some nodes got no x or y ? FIXME research this further
		if(value.out && value.x && value.y && displayedNode(value, classId, ascendClassId))
		for( let nodeTo of value.out) {
			const target = treeNodes[nodeTo];
			// Some nodes out point to ascendancy or large cluster jewel
			if(target && target.x && target.y && displayedNode(target, classId, ascendClassId) 
				&& !((value.classStartIndex !== undefined && target.isAscendancyStart) || (value.isAscendancyStart && target.classStartIndex !== undefined)
					|| (value.grantedPassivePoints == 2 && !target.grantedPassivePoints) || (target.grantedPassivePoints == 2 && !value.grantedPassivePoints))) {
				// If nodes are of the same group with orbit, draw arc
				svg.appendChild(buildSvgConnection(value, target, passiveSkillTreeData.constants.skillsPerOrbit, passiveSkillTreeData.constants.orbitRadii));
			}
		}
	}
	for (let[key, value] of Object.entries(treeNodes)) {
		if(displayedNode(value, classId, ascendClassId)) svg.appendChild(buildSvgNode(value));
	}
	let minViewX = Math.ceil(Math.min(...Object.entries(treeNodes).filter(n => n[1].x).map(n => n[1].x)));
	let minViewY = Math.ceil(Math.min(...Object.entries(treeNodes).filter(n => n[1].y).map(n => n[1].y)));
	let maxViewX = Math.ceil(Math.max(...Object.entries(treeNodes).filter(n => n[1].x).map(n => n[1].x)));
	let maxViewY = Math.ceil(Math.max(...Object.entries(treeNodes).filter(n => n[1].y).map(n => n[1].y)));
	svg.setAttribute("viewBox",(minViewX -150) + " " + (minViewY -150) + " " + (maxViewX-minViewX +300) + " " + (maxViewY-minViewY +300));
	let mainDiv = document.getElementById(elementId);
	while(mainDiv.firstChild) mainDiv.removeChild(mainDiv.firstChild);
	mainDiv.appendChild(svg);
}

function buildSvgNode(node) {
	const nodePoint = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	nodePoint.setAttribute("cx", node.x);
	nodePoint.setAttribute("cy", node.y);
	
	if(node.isKeystone) {
		nodePoint.setAttribute("fill", "var(--tree-node-large)");
		nodePoint.setAttribute("r", LARGE_NODE_SIZE);
	} else if(node.isNotable) {
		nodePoint.setAttribute("fill", "var(--tree-node-medium)");
		nodePoint.setAttribute("r", MEDIUM_NODE_SIZE);
	} else if(node.isJewelSocket) {
		nodePoint.setAttribute("fill", "none");
		nodePoint.setAttribute("stroke", "var(--tree-connector)");
		nodePoint.setAttribute("stroke-width", "16");
		nodePoint.setAttribute("r", MEDIUM_NODE_SIZE);
	} else if(node.grantedStrength && node.grantedStrength == 10 && !node.grantedIntelligence && !node.grantedDexterity) {
		nodePoint.setAttribute("fill", "var(--tree-node-str)");
		nodePoint.setAttribute("r", SMALL_NODE_SIZE);
	} else if(node.grantedDexterity && node.grantedDexterity == 10 && !node.grantedStrength && !node.grantedIntelligence) {
		nodePoint.setAttribute("fill", "var(--tree-node-dex)");
		nodePoint.setAttribute("r", SMALL_NODE_SIZE);
	} else if(node.grantedIntelligence && node.grantedIntelligence == 10 && !node.grantedStrength && !node.grantedDexterity) {
		nodePoint.setAttribute("fill", "var(--tree-node-int)");
		nodePoint.setAttribute("r", SMALL_NODE_SIZE);
	} else {
		nodePoint.setAttribute("fill", "var(--tree-node-small)");
		nodePoint.setAttribute("r", SMALL_NODE_SIZE);
	}
	nodePoint.setAttribute("id", "node_"+node.id);
	
	return nodePoint;
};

function buildSvgConnection(origin, dest, orbitMap, radiiMap) {
	let numberInOrbit = orbitMap[dest.orbit];
	let nodeConnection;
	// If nodes are of the same group with orbit, draw arc
	if(dest.group == origin.group && dest.orbit == origin.orbit && numberInOrbit != 0) {
		nodeConnection = document.createElementNS("http://www.w3.org/2000/svg", "path");
		let diffIndexOrbit = dest.orbitIndex - origin.orbitIndex;
		let isBefore = "1";
		if((diffIndexOrbit > 0 && diffIndexOrbit < numberInOrbit/2) || (diffIndexOrbit < 0 && diffIndexOrbit + numberInOrbit < numberInOrbit/2)) isBefore = "1";
		else isBefore = "0";
		//if(value.orbitIndex > target.orbitIndex) isBefore = "0";
		nodeConnection.setAttribute("d", ["M",origin.x,origin.y,"A",radiiMap[dest.orbit],radiiMap[dest.orbit],"0","0",isBefore,dest.x,dest.y].join(" "));
		nodeConnection.setAttribute("fill", "none");
		nodeConnection.setAttribute("stroke", "var(--tree-connector)");
		nodeConnection.setAttribute("stroke-width", CONNECTION_SIZE);
	} else {
		// Draw line between
		nodeConnection = document.createElementNS("http://www.w3.org/2000/svg", "line");
		nodeConnection.setAttribute("x1", origin.x);
		nodeConnection.setAttribute("y1", origin.y);
		nodeConnection.setAttribute("x2", dest.x);
		nodeConnection.setAttribute("y2", dest.y);
	}
	// Different colours if link between attributes
	if(origin.grantedDexterity && origin.grantedDexterity == 10 && !origin.grantedIntelligence && !origin.grantedStrength
		&& dest.grantedDexterity && dest.grantedDexterity == 10 && !dest.grantedIntelligence && !dest.grantedStrength) {
		nodeConnection.setAttribute("stroke", "var(--tree-node-dex)");
		nodeConnection.setAttribute("stroke-width", CONNECTION_SIZE);
	} else if(origin.grantedIntelligence && origin.grantedIntelligence == 10 && !origin.grantedStrength && !origin.grantedDexterity
		&& dest.grantedIntelligence && dest.grantedIntelligence == 10 && !dest.grantedStrength && !dest.grantedDexterity) {
		nodeConnection.setAttribute("stroke", "var(--tree-node-int)");
		nodeConnection.setAttribute("stroke-width", CONNECTION_SIZE);
	} else if(origin.grantedStrength && origin.grantedStrength == 10 && !origin.grantedIntelligence && !origin.grantedDexterity
		&& dest.grantedStrength && dest.grantedStrength == 10 && !dest.grantedIntelligence && !dest.grantedDexterity) {
		nodeConnection.setAttribute("stroke", "var(--tree-node-str)");
		nodeConnection.setAttribute("stroke-width", CONNECTION_SIZE);
	} else if(origin.ascendancyName && dest.ascendancyName) {
		nodeConnection.setAttribute("stroke", "var(--tree-connector)");
		nodeConnection.setAttribute("stroke-width", CONNECTION_SIZE*2);
	} else {
		nodeConnection.setAttribute("stroke", "var(--tree-connector)");
		nodeConnection.setAttribute("stroke-width", CONNECTION_SIZE);
	}
	return nodeConnection;
};

/* Display higlight of a character's passive tree */

function buildPath(nodesObject, elementId, nodeMap, passiveSkillTreeData, customStyle) {
	var svg = document.getElementById(elementId).firstChild;
	var orbitMap = passiveSkillTreeData.constants.skillsPerOrbit;
	var radiiMap = passiveSkillTreeData.constants.orbitRadii;
	var filteredNode = [];
	var svgElements = [];
	for( let origin of Object.values(nodesObject.nodes)) {
        	if(nodeMap[origin]) {
			filteredNode[origin] = nodeMap[origin];
		}
	}
	// Draw array by getting all nodes and cheking their out
	for( let [key, origin] of Object.entries(filteredNode)) {
		if(origin.x && origin.y && origin.out) {
			for( let value of origin.out) {
				if(filteredNode[value]) {
					let dest = filteredNode[value];
					let numberInOrbit = orbitMap[dest.orbit];
					// If nodes are of the same group with orbit, draw arc
					if(dest.group == origin.group && dest.orbit == origin.orbit && numberInOrbit != 0) {
						const nodeConnection = document.createElementNS("http://www.w3.org/2000/svg", "path");
						let diffIndexOrbit = dest.orbitIndex - origin.orbitIndex;
						let isBefore = "1";
						if((diffIndexOrbit > 0 && diffIndexOrbit < numberInOrbit/2) || (diffIndexOrbit < 0 && diffIndexOrbit + numberInOrbit < numberInOrbit/2) ) isBefore = "1";
						else isBefore = "0";
						nodeConnection.setAttribute("d", ["M",origin.x,origin.y,"A",radiiMap[dest.orbit],radiiMap[dest.orbit],"0","0",isBefore,dest.x,dest.y].join(" "));
						nodeConnection.setAttribute("fill", "none");
						if(customStyle) {
							nodeConnection.setAttribute("stroke", customStyle.stroke);
							nodeConnection.setAttribute("stroke-width", customStyle.width);
						} else {
							nodeConnection.setAttribute("stroke", "var(--tree-node-path)");
							nodeConnection.setAttribute("stroke-width", ALLOCATED_PATH);
						}
						nodeConnection.setAttribute("stroke-linecap", "round");
						svg.appendChild(nodeConnection);
						svgElements.push(nodeConnection);
					} else if(!((origin.classStartIndex !== undefined && dest.isAscendancyStart) || (origin.isAscendancyStart && dest.classStartIndex !== undefined) 
						|| (origin.grantedPassivePoints == 2 && !dest.grantedPassivePoints) || (dest.grantedPassivePoints == 2 && !origin.grantedPassivePoints))) {
						// Draw line if not between start class and ascendancy
						const nodeConnection = document.createElementNS("http://www.w3.org/2000/svg", "line");
						nodeConnection.setAttribute("x1", origin.x);
						nodeConnection.setAttribute("y1", origin.y);
						nodeConnection.setAttribute("x2", dest.x);
						nodeConnection.setAttribute("y2", dest.y);
							nodeConnection.setAttribute("stroke-linecap", "round");
						if(customStyle) {
							nodeConnection.setAttribute("stroke", customStyle.stroke);
							nodeConnection.setAttribute("stroke-width", customStyle.width);
						} else {
							nodeConnection.setAttribute("stroke-width", ALLOCATED_PATH);
							nodeConnection.setAttribute("stroke", "var(--tree-node-path)");
						}
						svg.appendChild(nodeConnection);
						svgElements.push(nodeConnection);	
					} else {
						// Else, surely a descendant ascendancy that do not connect with anything
						const nodePoint = document.createElementNS("http://www.w3.org/2000/svg", "circle");
						if(dest.ascendancyName) {
							nodePoint.setAttribute("cx", origin.x);
							nodePoint.setAttribute("cy", origin.y);
						} else {
							nodePoint.setAttribute("cx", dest.x);
							nodePoint.setAttribute("cy", dest.y);
						}
						if(customStyle) {
							nodePoint.setAttribute("stroke", customStyle.stroke);
							nodePoint.setAttribute("stroke-width", customStyle.width);
						} else {
							nodePoint.setAttribute("fill", "var(--tree-node-path)");
							nodePoint.setAttribute("r", ALLOCATED_NODE);
						}
						svg.appendChild(nodePoint);
						svgElements.push(nodePoint);
					}
				}
			}
		}
	}
	
	// Draw cluster nodes
	// TODO
	
	// Draw masteries
	nodesObject.masteryEffects.split("},{").filter(s => s.length > 0).map(m => m.split(",")[0].replaceAll("{","")).forEach( (value) => {
		const nodePoint = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		nodePoint.setAttribute("cx", passiveSkillTreeData.groups[passiveSkillTreeData.nodes[value].group].x);
		nodePoint.setAttribute("cy", passiveSkillTreeData.groups[passiveSkillTreeData.nodes[value].group].y);
		if(customStyle) {
			nodePoint.setAttribute("fill", customStyle.stroke);
			nodePoint.setAttribute("r", customStyle.width);
		} else {
			nodePoint.setAttribute("fill", "var(--tree-node-path)");
			nodePoint.setAttribute("r", ALLOCATED_NODE);
		}
		nodePoint.setAttribute("id", "node_"+passiveSkillTreeData.nodes[value].id);
		svg.appendChild(nodePoint);
		svgElements.push(nodePoint);	
	});
	
	return svgElements;
};

/* Other utility */

function recurseFillDepth(nodes, depthNodes, i) {
	if(i > 1000) { console.log("something went wrong"); return -1;}
	var currNodes = nodes.filter(n => depthNodes[n.skill] == i);
	currNodes.forEach( c => {
		nodes.filter(n => depthNodes[n.skill] == -1 && (n.in.indexOf(c.skill.toString()) >= 0 || n.out.indexOf(c.skill.toString()) >= 0)).forEach( n => {
			depthNodes[n.skill] = i+1;
		})
	});
	if(currNodes.length != 0) recurseFillDepth(nodes, depthNodes, i+1)
}

function depthFromStart(nodes, classStart, parentTree) {
	var depthNodes = {};
	nodes.forEach(n => {
		if(n.classStartIndex == classStart) depthNodes[n.skill] = 0;
		else if(parentTree !== undefined && parentTree.nodes.indexOf(n.skill.toString()) >= 0) depthNodes[n.skill] = 0;
		else depthNodes[n.skill] = -1;
	})
	recurseFillDepth(nodes, depthNodes, 0);
	return depthNodes;
}

function buildClassIcon(elementId, node, ascendClassNode) {
	var svg = document.getElementById(elementId).firstChild;
	let imageUrl = "./img/inventory-sprite.png";
	let zoom = 10;
	// Base class image clip
	let offsetClipX = classPosition[node.classStartIndex].x + node.x/zoom;
	let offsetClipY = classPosition[node.classStartIndex].y + node.y/zoom;
	const clipPath = document.createElementNS("http://www.w3.org/2000/svg","clipPath");
	clipPath.setAttribute("id","clipper");
	const rectClip = document.createElementNS("http://www.w3.org/2000/svg","rect");
	rectClip.setAttribute("x", offsetClipX);
	rectClip.setAttribute("y", offsetClipY);
	rectClip.setAttribute("width", classImageSize.x);
	rectClip.setAttribute("height", classImageSize.y);
	clipPath.appendChild(rectClip);
	svg.appendChild(clipPath);
	// Base class image
	const gPanel = document.createElementNS("http://www.w3.org/2000/svg","g");
	let offsetImageX = -1*classPosition[node.classStartIndex].x-classImageSize.x/2;
	let offsetImageY = -1*classPosition[node.classStartIndex].y-classImageSize.y/2;
	gPanel.setAttribute("transform","scale("+zoom+") translate("+offsetImageX+","+offsetImageY+")");
	const img = document.createElementNS("http://www.w3.org/2000/svg","image");
	img.setAttribute("x", node.x/zoom);
	img.setAttribute("y", node.y/zoom);
	img.setAttribute("width", 788);
	img.setAttribute("height", 710);
	img.setAttribute("href",imageUrl);
	img.setAttribute("xlink:href",imageUrl);
	img.setAttribute("clip-path","url(#clipper)");
	gPanel.appendChild(img);
	svg.appendChild(gPanel);
	// Ascendancy image clip
	if(ascendClassNode && ascendancyPosition[ascendClassNode.ascendancyName]) {
		let offsetClipAscX = ascendancyPosition[ascendClassNode.ascendancyName].x + ascendClassNode.x/zoom;
		let offsetClipAscY = ascendancyPosition[ascendClassNode.ascendancyName].y + ascendClassNode.y/zoom;
		const clipAscPath = document.createElementNS("http://www.w3.org/2000/svg","clipPath");
		clipAscPath.setAttribute("id","clipperAsc");
		const rectClipAsc = document.createElementNS("http://www.w3.org/2000/svg","rect");
		rectClipAsc.setAttribute("x", offsetClipAscX);
		rectClipAsc.setAttribute("y", offsetClipAscY);
		rectClipAsc.setAttribute("width", classImageSize.x);
		rectClipAsc.setAttribute("height", classImageSize.y);
		clipAscPath.appendChild(rectClipAsc);
		svg.appendChild(clipAscPath);
		const gPanelAsc = document.createElementNS("http://www.w3.org/2000/svg","g");
		offsetImageAscX = -1*ascendancyPosition[ascendClassNode.ascendancyName].x + classImageSize.x/2;
		offsetImageAscY = -1*ascendancyPosition[ascendClassNode.ascendancyName].y + classImageSize.y/2;
		gPanelAsc.setAttribute("transform","scale("+zoom+") translate("+offsetImageAscX+","+offsetImageAscY+")");
		const img = document.createElementNS("http://www.w3.org/2000/svg","image");
		img.setAttribute("x", ascendClassNode.x/zoom);
		img.setAttribute("y", ascendClassNode.y/zoom);
		img.setAttribute("width", 788);
		img.setAttribute("height", 710);
		img.setAttribute("href",imageUrl);
		img.setAttribute("xlink:href",imageUrl);
		img.setAttribute("clip-path","url(#clipperAsc)");
		gPanelAsc.appendChild(img);
		svg.appendChild(gPanelAsc);
}
};

/* Utility for first character tutorial */

function buildContext(elementId, labels, pos) {
	var svg = document.getElementById(elementId).firstChild;
	const contextBox = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	contextBox.setAttribute("x", pos[0]);
	contextBox.setAttribute("y", pos[1]);
	contextBox.setAttribute("rx", 128);
	contextBox.setAttribute("ry", 128);
	contextBox.setAttribute("width", 5000);
	contextBox.setAttribute("height", 4800);
	contextBox.setAttribute("stroke", "black");
	contextBox.setAttribute("fill", "white");
	contextBox.setAttribute("stroke-width", 64);
	svg.appendChild(contextBox);

	const lineB1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	lineB1.setAttribute("x1", pos[0]+500);
	lineB1.setAttribute("y1", pos[1]+400);
	lineB1.setAttribute("x2", pos[0]+1500);
	lineB1.setAttribute("y2", pos[1]+400);
	lineB1.setAttribute("stroke", "#7C7");
	lineB1.setAttribute("stroke-width", 128);
	lineB1.setAttribute("stroke-linecap","round");
	svg.appendChild(lineB1);
	const lineB2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	lineB2.setAttribute("x1", pos[0]+500);
	lineB2.setAttribute("y1", pos[1]+400+300);
	lineB2.setAttribute("x2", pos[0]+1500);
	lineB2.setAttribute("y2", pos[1]+400+300);
	lineB2.setAttribute("stroke", "#090");
	lineB2.setAttribute("stroke-width", 128);
	lineB2.setAttribute("stroke-linecap","round");
	svg.appendChild(lineB2);
	const lineB3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	lineB3.setAttribute("x1", pos[0]+500);
	lineB3.setAttribute("y1", pos[1]+400+900);
	lineB3.setAttribute("x2", pos[0]+1500);
	lineB3.setAttribute("y2", pos[1]+400+900);
	lineB3.setAttribute("stroke", "#7AF");
	lineB3.setAttribute("stroke-width", 128);
	lineB3.setAttribute("stroke-linecap","round");
	svg.appendChild(lineB3);
	const lineB4 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	lineB4.setAttribute("x1", pos[0]+500);
	lineB4.setAttribute("y1", pos[1]+400+1200);
	lineB4.setAttribute("x2", pos[0]+1500);
	lineB4.setAttribute("y2", pos[1]+400+1200);
	lineB4.setAttribute("stroke", "#15C");
	lineB4.setAttribute("stroke-width", 128);
	lineB4.setAttribute("stroke-linecap","round");
	svg.appendChild(lineB4);
	const lineE1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	lineE1.setAttribute("x1", pos[0]+500);
	lineE1.setAttribute("y1", pos[1]+400+2500);
	lineE1.setAttribute("x2", pos[0]+1500);
	lineE1.setAttribute("y2", pos[1]+400+2500);
	lineE1.setAttribute("stroke", "#166");
	lineE1.setAttribute("stroke-width", 128);
	lineE1.setAttribute("stroke-linecap","round");
	svg.appendChild(lineE1);
	const lineE2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	lineE2.setAttribute("x1", pos[0]+500);
	lineE2.setAttribute("y1", pos[1]+400+3200);
	lineE2.setAttribute("x2", pos[0]+1500);
	lineE2.setAttribute("y2", pos[1]+400+3200);
	lineE2.setAttribute("stroke", "#A00");
	lineE2.setAttribute("stroke-width", 128);
	lineE2.setAttribute("stroke-linecap","round");
	svg.appendChild(lineE2);
	const lineE3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	lineE3.setAttribute("x1", pos[0]+500);
	lineE3.setAttribute("y1", pos[1]+400+3900);
	lineE3.setAttribute("x2", pos[0]+1500);
	lineE3.setAttribute("y2", pos[1]+400+3900);
	lineE3.setAttribute("stroke", "#C90");
	lineE3.setAttribute("stroke-width", 128);
	lineE3.setAttribute("stroke-linecap","round");
	svg.appendChild(lineE3);
	
	const textB1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
	textB1.setAttribute("font-size", 512);
	textB1.setAttribute("font-family", "bitter");
	textB1.setAttribute("x", pos[0]+2000);
	textB1.setAttribute("y", pos[1]+600);
	textB1.textContent = 'Base';
	const textB2 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
	textB2.setAttribute("x", pos[0]+2000);
	textB2.setAttribute("y", pos[1]+600+900);
	textB2.textContent = 'Extension';
	textB1.appendChild(textB2);
	const textOption = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
	textOption.setAttribute("x", pos[0]+2000);
	textOption.setAttribute("y", pos[1]+600+1600);
	textOption.textContent = 'Variations :';
	textB1.appendChild(textOption);
	const textE1 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
	textE1.setAttribute("x", pos[0]+2000);
	textE1.setAttribute("y", pos[1]+600+2400);
	textE1.textContent = labels[0];
	textB1.appendChild(textE1);
	const textE2 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
	textE2.setAttribute("x", pos[0]+2000);
	textE2.setAttribute("y", pos[1]+600+3100);
	textE2.textContent = labels[1];
	textB1.appendChild(textE2);
	const textE3 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
	textE3.setAttribute("x", pos[0]+2000);
	textE3.setAttribute("y", pos[1]+600+3800);
	textE3.textContent = labels[2];
	textB1.appendChild(textE3);
	svg.appendChild(textB1);
};
