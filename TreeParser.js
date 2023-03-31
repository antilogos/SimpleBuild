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

function displayedNode(node, classId, ascendClassId) {
	return node.id && !node.isMastery 
			&& ((!node.isAscendancyStart && !node.ascendancyName) || node.ascendancyName == ascendClassId) 
			&& (node.classStartIndex == null || node.classStartIndex == classId)
			&& !node.isMultipleChoiceOption
			&& !node.isBlighted && (!node.spc || node.spc.length == 0)
}

function buildSvgTree(elementId, treeNodes, classId, ascendClassId) {
	const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
	svg.setAttribute("width","100%");
	svg.setAttribute("height","95vh");
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
		nodePoint.setAttribute("r", 96);
	} else if(node.isNotable) {
		nodePoint.setAttribute("fill", "var(--tree-node-medium)");
		nodePoint.setAttribute("r", 64);
	} else if(node.isJewelSocket) {
		nodePoint.setAttribute("fill", "none");
		nodePoint.setAttribute("stroke", "var(--tree-connector)");
		nodePoint.setAttribute("stroke-width", "16");
		nodePoint.setAttribute("r", 58);
	} else if(node.grantedStrength && node.grantedStrength == 10 && !node.grantedIntelligence && !node.grantedDexterity) {
		nodePoint.setAttribute("fill", "var(--tree-node-str)");
		nodePoint.setAttribute("r", 32);
	} else if(node.grantedDexterity && node.grantedDexterity == 10 && !node.grantedStrength && !node.grantedIntelligence) {
		nodePoint.setAttribute("fill", "var(--tree-node-dex)");
		nodePoint.setAttribute("r", 32);
	} else if(node.grantedIntelligence && node.grantedIntelligence == 10 && !node.grantedStrength && !node.grantedDexterity) {
		nodePoint.setAttribute("fill", "var(--tree-node-int)");
		nodePoint.setAttribute("r", 32);
	} else {
		nodePoint.setAttribute("fill", "var(--tree-node-small)");
		nodePoint.setAttribute("r", 32);
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
		nodeConnection.setAttribute("stroke-width", "24");
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
		nodeConnection.setAttribute("style", "stroke:var(--tree-node-dex);stroke-width:24");
	} else if(origin.grantedIntelligence && origin.grantedIntelligence == 10 && !origin.grantedStrength && !origin.grantedDexterity
		&& dest.grantedIntelligence && dest.grantedIntelligence == 10 && !dest.grantedStrength && !dest.grantedDexterity) {	
		nodeConnection.setAttribute("style", "stroke:var(--tree-node-int);stroke-width:24");
	} else if(origin.grantedStrength && origin.grantedStrength == 10 && !origin.grantedIntelligence && !origin.grantedDexterity
		&& dest.grantedStrength && dest.grantedStrength == 10 && !dest.grantedIntelligence && !dest.grantedDexterity) {	
		nodeConnection.setAttribute("style", "stroke:var(--tree-node-str);stroke-width:24");
	} else {
		nodeConnection.setAttribute("style", "stroke:var(--tree-connector);stroke-width:24");
	}
	return nodeConnection;
};

function buildPath(nodesObject, style, elementId, nodeMap, passiveSkillTreeData) {
	var svg = document.getElementById(elementId).firstChild;
	var orbitMap = passiveSkillTreeData.constants.skillsPerOrbit;
	var radiiMap = passiveSkillTreeData.constants.orbitRadii;
	var filteredNode = [];
	var svgElements = [];
	for( let origin of Object.values(nodesObject.nodes.split(","))) {
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
						//if(value.orbitIndex > target.orbitIndex) isBefore = "0";
						nodeConnection.setAttribute("d", ["M",origin.x,origin.y,"A",radiiMap[dest.orbit],radiiMap[dest.orbit],"0","0",isBefore,dest.x,dest.y].join(" "));
						nodeConnection.setAttribute("fill", "none");
						nodeConnection.setAttribute("stroke", style.stroke);
						nodeConnection.setAttribute("stroke-width", style.width);
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
						nodeConnection.setAttribute("stroke", style.stroke);
						nodeConnection.setAttribute("stroke-width", style.width);
						nodeConnection.setAttribute("stroke-linecap", "round");
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
						nodePoint.setAttribute("stroke", style.stroke);
						nodePoint.setAttribute("stroke-width", style.width);
						nodePoint.setAttribute("r", 58);
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
		nodePoint.setAttribute("fill", "#0FF");
		nodePoint.setAttribute("stroke", style.stroke);
		nodePoint.setAttribute("stroke-width", style.width/4+28);
		nodePoint.setAttribute("r", 64);
		nodePoint.setAttribute("id", "node_"+passiveSkillTreeData.nodes[value].id);
		svg.appendChild(nodePoint);
		svgElements.push(nodePoint);	
	});
	
	return svgElements;
};