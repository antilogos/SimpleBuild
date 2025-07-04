/* Extract */

// Load tree data per lang 
function fetchTreeData(lang) {
	if(lang == "fr") {
		// Mine
		return fetch("https://raw.githubusercontent.com/antilogos/SimpleFiltre/master/TreeParser/data-325.json").then(response => response.json()).then(parsed => {
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

// Function found on the web (wikibooks) to decode Base64 in pure javascript
function base64_decode (s) {
  var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  // remove/ignore any characters not in the base64 characters list
  //  or the pad character -- particularly newlines
  s = s.replace(new RegExp('[^'+base64chars.split("")+'=]', 'g'), "");

  // replace any incoming padding with a zero pad (the 'A' character is zero)
  var p = (s.charAt(s.length-1) == '=' ? 
          (s.charAt(s.length-2) == '=' ? 'AA' : 'A') : ""); 
  var r = ""; 
  s = s.substr(0, s.length - p.length) + p;

  // increment over the length of this encoded string, four characters at a time
  for (var c = 0; c < s.length; c += 4) {

    // each of these four characters represents a 6-bit index in the base64 characters list
    //  which, when concatenated, will give the 24-bit number for the original 3 characters
    var n = (base64chars.indexOf(s.charAt(c)) << 18) + (base64chars.indexOf(s.charAt(c+1)) << 12) +
            (base64chars.indexOf(s.charAt(c+2)) << 6) + base64chars.indexOf(s.charAt(c+3));

    // split the 24-bit number into the original three 8-bit (ASCII) characters
    r += String.fromCharCode((n >>> 16) & 255, (n >>> 8) & 255, n & 255);
  }
   // remove any zero pad that was added to make this a multiple of 24 bits
  return r.substring(0, r.length - p.length);
}

function base64_encode (s) {
  // the result/encoded string, the padding string, and the pad count
  var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var r = ""; 
  var p = ""; 
  var c = s.length % 3;

  // add a right zero pad to make this string a multiple of 3 characters
  if (c > 0) { 
    for (; c < 3; c++) { 
      p += '='; 
      s += "\0"; 
    } 
  }

  // increment over the length of the string, three characters at a time
  for (c = 0; c < s.length; c += 3) {

    // we add newlines after every 76 output characters, according to the MIME specs
    if (c > 0 && (c / 3 * 4) % 76 == 0) { 
      r += "\r\n"; 
    }

    // these three 8-bit (ASCII) characters become one 24-bit number
    var n = (s.charCodeAt(c) << 16) + (s.charCodeAt(c+1) << 8) + s.charCodeAt(c+2);

    // this 24-bit number gets separated into four 6-bit numbers
    n = [(n >>> 18) & 63, (n >>> 12) & 63, (n >>> 6) & 63, n & 63];

    // those four 6-bit numbers are used as indices into the base64 character list
    r += base64chars[n[0]] + base64chars[n[1]] + base64chars[n[2]] + base64chars[n[3]];
  }
   // add the actual padding string, after removing the zero pad
  return r.substring(0, r.length - p.length) + p;
}

function hashToView(hash) {
	// Converting url encoded in base64 with some quirks into binary
	let buffer = base64_decode(hash.split("/").pop().replaceAll("-","+").replaceAll("_","/"));
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
			for(var i = 7; i < view.buffer.byteLength; i+=2){
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
	
	return {nodes: passiveNodes, cluster: clusterNodes, mastery: masteryNodes, startingClass: characterClass, ascendClassId: ascendancyClass};
};

function openExternalTree(nodesData) {
	// Prepare buffer
	const nodeSkillCount = nodesData.nodes.length;
	const clusterNodeCount = 0;
	const masteryNodeCount = nodesData.masteryEffects.split("},{").length;
	var buffer = new ArrayBuffer(9+2*nodeSkillCount+2*clusterNodeCount+4*masteryNodeCount);
	var view = new DataView(buffer);
	
	// This is how the passive skill tree url is
	const version = 6;
	view.setInt32(0, version);
	const characterClass = nodesData.startClass;
	view.setInt8(4, characterClass);
	const ascendancyClass = nodesData.ascendClassId;
	view.setInt8(5, ascendancyClass);
	view.setInt8(6, nodeSkillCount);
	
	// List of passiveNodes are UInt16 from offset 7
	for(var i = 0; i < nodeSkillCount*2; i+=2){
		view.setUint16(7+i, nodesData.nodes[i/2]);
	}
	// List of extra cluster node are UInt16 from offset 7+ 2x number of skill nodes
	view.setInt8(7+2*nodeSkillCount, clusterNodeCount);
	for(var i = 0; i < clusterNodeCount*2; i+=2){
		//clusterNodes.push(view.getUint16(8+2*nodeSkillCount+i));
	}
	
	// List of mastery group/effect pair are UInt16 from offset 8+ 2x number of skill nodes +2x number of cluster nodes
	view.setInt8(8+2*nodeSkillCount+2*clusterNodeCount, masteryNodeCount);
	nodesData.masteryEffects.split("},{").filter(s => s.length > 0).forEach( (k, i) => {
		let master = k.split(",")[0].replaceAll("\{","").replaceAll("\}","");
		let slave = k.split(",")[1].replaceAll("\{","").replaceAll("\}","");
		view.setUint16(9+2*nodeSkillCount+2*clusterNodeCount+4*i, master);
		view.setUint16(9+2*nodeSkillCount+2*clusterNodeCount+4*i, slave);
	});
	
	// Convert to binary string then encode it
	let bytes = new Uint8Array(buffer);
	let bytesString = ''
	for(let i = 0; i < bytes.byteLength; i++){
        bytesString += String.fromCharCode( bytes[ i ] );
    }
	let encode = base64_encode(bytesString);
	let treeUrl = dynamicDico["official_site_url"][localStorage.getItem("lang")] + "fullscreen-passive-skill-tree/3.21.2/" + encode.replaceAll("+","-").replaceAll("/","_");
	
	window.open(treeUrl, '_blank').focus();
}

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
	// Filter the nodes to display 
	let diplayingNodes = Object.entries(treeNodes).filter(n => displayedNode(n[1], classId, ascendClassId)).map(n => n[1]);
	// Create the main svg node
	let mainDiv = document.getElementById(elementId);
	const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
	svg.setAttribute("class","skillTree");
	svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
	
	// Viewport with listener to move the tree around
	const viewport = document.createElementNS("http://www.w3.org/2000/svg","g");
	viewport.style.width="100%";
	viewport.style.height="100%";
	addTransformAnimation(svg, viewport);
	svg.appendChild(viewport);
	
	// Viewport with listener to move the tree around
	const panControls = document.createElementNS("http://www.w3.org/2000/svg","g");
	panControls.classList.add("panControls");
	const panLayout = document.createElementNS("http://www.w3.org/2000/svg","path");
	panLayout.setAttribute("d", "M-15,0 Q-15,-15 0,-15 L60,-15 Q75,-15 75,0 L75,60 Q75,75 60,75 L0,75 Q-15,75 -15,60 z");
	panLayout.setAttribute("fill", "var(--section-bg)");
	panControls.appendChild(panLayout);
	const panAll = document.createElementNS("http://www.w3.org/2000/svg", "path");
	panAll.setAttribute("d", "M11,30 L21,12 M39,12 L49,30 M40,49 L20,49 M60,30 L45,56 L15,56 L0,30 L15,4 L45,4 z");
	panAll.setAttribute("stroke", "var(--text-color)");
	panAll.setAttribute("stroke-width", "2");
	panAll.setAttribute("fill", "var(--section-bg)");
	panAll.setAttribute("pointer-events", "all");
	panAll.addEventListener('click', function(event){
		scaleZoom(viewport, diplayingNodes);
	});
	panControls.appendChild(panAll);
	svg.appendChild(panControls);
	
	// Drawing the links between nodes
	for( let[key, value] of Object.entries(diplayingNodes)) {
		// Some nodes got no x or y ? FIXME research this further
		if(value.out && value.x && value.y && displayedNode(value, classId, ascendClassId))
		for( let nodeTo of value.out) {
			const target = treeNodes[nodeTo];
			// Some nodes out point to ascendancy or large cluster jewel
			if(target && target.x && target.y && displayedNode(target, classId, ascendClassId) 
				&& !((value.classStartIndex !== undefined && target.isAscendancyStart) || (value.isAscendancyStart && target.classStartIndex !== undefined)
					|| (value.grantedPassivePoints == 2 && !target.grantedPassivePoints) || (target.grantedPassivePoints == 2 && !value.grantedPassivePoints))) {
				// If nodes are of the same group with orbit, draw arc
				viewport.appendChild(buildSvgConnection(value, target, passiveSkillTreeData.constants.skillsPerOrbit, passiveSkillTreeData.constants.orbitRadii));
			}
		}
	}
	for (let[key, value] of Object.entries(diplayingNodes)) {
		if(displayedNode(value, classId, ascendClassId)) viewport.appendChild(buildSvgNode(value));
	}
	
	// Add an event and circle to display nearest node popup
	const hoverCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
	hoverCircle.setAttribute("id", "hoverCircle");
	hoverCircle.setAttribute("cx", "1");
	hoverCircle.setAttribute("cy", "1");
	hoverCircle.setAttribute("r", "1");
	hoverCircle.setAttribute("stroke", "none");
	hoverCircle.setAttribute("fill", "255 255 255 255");
	svg.appendChild(hoverCircle);
	svg.addEventListener("mousemove", function (event) { 
		highlightNode(svg, event);
	});
	svg.addEventListener("mouseleave", function (event) {
		// Clear popup
		let popupContainer = document.getElementById("treePopup");
		while(popupContainer.firstChild) popupContainer.removeChild(popupContainer.firstChild);
	});
	
	// Clear container div and add svg
	while(mainDiv.firstChild) mainDiv.removeChild(mainDiv.firstChild);
	mainDiv.appendChild(svg);
	
	// TODO optimize resource management by instanciating only one event listener
	window.addEventListener('resize', function(event){
		scaleZoom(viewport, diplayingNodes);
	});
	panControls.style.transform = "matrix(0.8, 0, 0, 0.8, "+50+", "+(viewport.parentElement.getBoundingClientRect().height/2-50)+")";
	scaleZoom(viewport, diplayingNodes);
}

function getSizeNode(node) {
	if(node.isKeystone) {
		return LARGE_NODE_SIZE;
	} else if(node.isNotable) {
		return MEDIUM_NODE_SIZE;
	} else if(node.isJewelSocket) {
		return MEDIUM_NODE_SIZE;
	} else if(node.isMastery) {
		return MEDIUM_NODE_SIZE;
	} else {
		return SMALL_NODE_SIZE;
	}
}

// Draw nodes
function buildSvgNode(node) {
	const nodePoint = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	nodePoint.setAttribute("cx", node.x);
	nodePoint.setAttribute("cy", node.y);
	nodePoint.setAttribute("r", getSizeNode(node));
	if(node.isKeystone) {
		nodePoint.setAttribute("fill", "var(--tree-node-large)");
	} else if(node.isNotable) {
		nodePoint.setAttribute("fill", "var(--tree-node-medium)");
	} else if(node.isJewelSocket) {
		nodePoint.setAttribute("fill", "none");
		nodePoint.setAttribute("stroke", "var(--tree-connector)");
		nodePoint.setAttribute("stroke-width", "16");
	} else if(node.grantedStrength && node.grantedStrength == 10 && !node.grantedIntelligence && !node.grantedDexterity) {
		nodePoint.setAttribute("fill", "var(--tree-node-str)");
	} else if(node.grantedDexterity && node.grantedDexterity == 10 && !node.grantedStrength && !node.grantedIntelligence) {
		nodePoint.setAttribute("fill", "var(--tree-node-dex)");
	} else if(node.grantedIntelligence && node.grantedIntelligence == 10 && !node.grantedStrength && !node.grantedDexterity) {
		nodePoint.setAttribute("fill", "var(--tree-node-int)");
	} else {
		nodePoint.setAttribute("fill", "var(--tree-node-small)");
	}
	nodePoint.setAttribute("id", "node_"+node.id);
	
	return nodePoint;
};

// Draw line between nodes
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

// Draw path over a passive tree
function buildPath(nodesObject, elementId, nodeMap, passiveSkillTreeData, customStyle) {
	var svg = document.getElementById(elementId).firstChild;
	var viewport = svg.firstChild;
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
		if(origin.x && origin.y) {
			if(origin.out) {
				for( let value of origin.out) {
					if(filteredNode[value] !== undefined) {
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
							viewport.appendChild(nodeConnection);
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
							viewport.appendChild(nodeConnection);
							svgElements.push(nodeConnection);	
						} else {
							// Else, surely a ascendant ascendancy that do not connect with anything
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
							viewport.appendChild(nodePoint);
							svgElements.push(nodePoint);
						}
					}
				}
			}
		}
	}
	for( let [key, origin] of Object.entries(filteredNode)) {
		if(origin.x && origin.y) {
			// if neither connected via in, it's an isolated point, probably from unique jewel
			let nbConnected = 0;
			if(origin.in) nbConnected = nbConnected + origin.in.filter(n => filteredNode[n] !== undefined).length;
			if(origin.out) nbConnected = nbConnected + origin.out.filter(n => filteredNode[n] !== undefined).length;
			if(nbConnected == 0) {
				const nodePoint = document.createElementNS("http://www.w3.org/2000/svg", "circle");				
				nodePoint.setAttribute("cx", origin.x);
				nodePoint.setAttribute("cy", origin.y);
				if(customStyle) {
					nodePoint.setAttribute("stroke", customStyle.stroke);
					nodePoint.setAttribute("stroke-width", customStyle.width);
				} else {
					nodePoint.setAttribute("fill", "var(--tree-node-path)");
					nodePoint.setAttribute("r", ALLOCATED_NODE);
				}
				viewport.appendChild(nodePoint);
				svgElements.push(nodePoint);
			} else {
				const nodePoint = document.createElementNS("http://www.w3.org/2000/svg", "circle");				
				nodePoint.setAttribute("cx", origin.x);
				nodePoint.setAttribute("cy", origin.y);
				if(customStyle) {
					nodePoint.setAttribute("stroke", customStyle.stroke);
					nodePoint.setAttribute("stroke-width", customStyle.width);
				} else {
					nodePoint.setAttribute("fill", "var(--tree-node-oldpath)");
					nodePoint.setAttribute("r", getSizeNode(origin));
				}
				viewport.appendChild(nodePoint);
				svgElements.push(nodePoint);
			}
		}
	}
	// If ascendancy, draw a circle arround the ascendancy start
	if(Object.values(filteredNode).find(n => n.isAscendancyStart) !== undefined) {
		let start = Object.values(filteredNode).find(n => n.isAscendancyStart);
		const startingCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		startingCircle.classList.add("ascendancy");
		startingCircle.setAttribute("id", "node_"+start.skill);
		startingCircle.setAttribute("cx", start.x);
		startingCircle.setAttribute("cy", start.y);
		startingCircle.setAttribute("r", "750");
		startingCircle.setAttribute("opacity", "0.04");
		startingCircle.setAttribute("fill", "var(--text-color)");
		viewport.appendChild(startingCircle);
		svgElements.push(startingCircle);
	}
	
	// Draw cluster nodes
	// TODO
	
	// Draw masteries
	if(nodesObject.masteryEffects) {
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
			viewport.appendChild(nodePoint);
			svgElements.push(nodePoint);	
		});
	}
	
	// Add icon for zooming on this path
	var panControls = svg.getElementsByClassName("panControls");
	if(panControls.length > 0 && customStyle === undefined) {
		const panLayout = document.createElementNS("http://www.w3.org/2000/svg","path");
		panLayout.setAttribute("d", "M-15,0 Q-15,-15 0,-15 L60,-15 Q75,-15 75,0 L75,60 Q75,75 60,75 L0,75 Q-15,75 -15,60 z");
		panLayout.setAttribute("fill", "var(--section-bg)");
		panLayout.style.transform = "matrix(1, 0, 0, 1, 0, 90)";
		panControls[0].appendChild(panLayout);
		const panZoom = document.createElementNS("http://www.w3.org/2000/svg", "path");
		panZoom.setAttribute("d", "M20,30 L40,30 M30,20 L30,40 M60,30 L45,56 L15,56 L0,30 L15,4 L45,4 z");
		panZoom.setAttribute("stroke", "var(--text-color)");
		panZoom.setAttribute("stroke-width", "2");
		panZoom.setAttribute("fill", "var(--section-bg)");
		panZoom.style.transform = "matrix(1, 0, 0, 1, 0, 90)";
		panZoom.setAttribute("pointer-events", "all");
		panZoom.addEventListener('click', function (event) {
			scaleZoom(viewport, filteredNode);
		});
		panControls[0].appendChild(panZoom);
		scaleZoom(viewport, filteredNode);
		// Add icon to open official tree in new tab
		const panExtLayout = document.createElementNS("http://www.w3.org/2000/svg","path");
		panExtLayout.setAttribute("d", "M-15,0 Q-15,-15 0,-15 L60,-15 Q75,-15 75,0 L75,60 Q75,75 60,75 L0,75 Q-15,75 -15,60 z");
		panExtLayout.setAttribute("fill", "var(--section-bg)");
		panExtLayout.style.transform = "matrix(1, 0, 0, 1, 0, 180)";
		panControls[0].appendChild(panExtLayout);
		const panExternal = document.createElementNS("http://www.w3.org/2000/svg", "path");
		panExternal.setAttribute("d", "M30,10 H 10 V 50 H 50 V30 M35,25 L55,5 H40 H55 V25");
		//panExternal.setAttribute("d", "M19 1h-8l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z");
		panExternal.setAttribute("stroke", "var(--text-color)");
		panExternal.setAttribute("stroke-width", "2");
		panExternal.setAttribute("fill", "var(--section-bg)");
		panExternal.setAttribute("pointer-events", "all");
		panExternal.style.transform = "matrix(1, 0, 0, 1, 0, 180)";
		panExternal.addEventListener('click', function(event){
			openExternalTree(nodesObject);
		});
		panControls[0].appendChild(panExternal);
	}
	
	return svgElements;
};

// Build node tooltip in an hidden element
function buildNodeTooltip(node) {
	let popupContainer = document.getElementById("treePopup");
	if(popupContainer !== undefined) {
		// Clear tooltip
		while(popupContainer.firstChild) popupContainer.removeChild(popupContainer.firstChild);
		let skillContainer = document.createElement("div");
		skillContainer.classList.add("skillPopup");
		// Set header decoration matching type of node
		let skillHeader = document.createElement("div");
		skillHeader.classList.add("skillHeader");
		if(node.isMastery) {
			skillHeader.classList.add("masterySkill");
		} else if(node.ascendancyName) {
			skillHeader.classList.add("ascendancySkill");
		} else if(node.isKeystone) {
			skillHeader.classList.add("keystoneSkill");
		} else if(node.isNotable) {
			skillHeader.classList.add("notableSkill");
		} else if(node.isJewelSocket) {
			skillHeader.classList.add("jewelSkill");
		} else	 {
			skillHeader.classList.add("normalSkill");
		}
		let skillName = document.createElement("div");
		skillName.classList.add("skillName");
		skillName.classList.add("lc");
		skillName.textContent = node.name;
		skillHeader.appendChild(skillName);
		skillContainer.appendChild(skillHeader);
		if(node.stats !== undefined) {
			let modContainer = document.createElement("div");
			modContainer.classList.add("textContainer");
			// Each explicit mod in a div
			node.stats.forEach( stat => {
				let skillMod = document.createElement("div");
				skillMod.classList.add("explicitMod");
				skillMod.classList.add("lc");
				skillMod.textContent = stat;
				modContainer.appendChild(skillMod);
			});
			// plus flavour text and explanation
			if(node.reminderText !== undefined) {
				node.reminderText.forEach( stat => {
					let skillMod = document.createElement("div");
					skillMod.classList.add("descrText");
					skillMod.textContent = stat;
					modContainer.appendChild(skillMod);
				});
			}
			if(node.flavourText !== undefined) {
				let skillMod = document.createElement("div");
				skillMod.classList.add("flavourText");
				skillMod.textContent = node.flavourText;
				modContainer.appendChild(skillMod);
			}
			skillContainer.appendChild(modContainer);
		}
		popupContainer.appendChild(skillContainer);
	}
	return popupContainer;
}

// Bring back the node tooltip 
function highlightNode(svg, event) {
	// Get style properties and mouse coordinates from the document
	const rect = svg.getBoundingClientRect();
	const view = new DOMMatrix(window.getComputedStyle(svg.firstChild).transform);
	// Compute the relative position on skill tree
	let x = (event.clientX - rect.left-view.e)/view.a;
	let y = (event.clientY - rect.top-view.f)/view.d;
	// Find nearest node
	const range = 400;
	let proximity = Object.values(passiveSkillTreeData.nodes).filter( node => node.x !== undefined && node.y !== undefined && node.id !== undefined && !node.isBlighted && node.classStartIndex == null && node.isMultipleChoice == null && node.isAscendancyStart == null).filter( node => Math.abs(node.x-x)<range && Math.abs(node.y-y)<range);
	let nearest;
	if(proximity.length > 1) {
		nearest = proximity.reduce(
		  (accumulator, currentValue) => {
			let d = Math.pow(Math.abs(currentValue.x-x),2)+Math.pow(Math.abs(currentValue.y-y),2);
			if(accumulator[1] > d) {
				return [currentValue, d];
			} else {
				return accumulator;
			}
		  },
		  [proximity[0], Number.POSITIVE_INFINITY]
		)[0];
	} else if(proximity.length == 1) {
		nearest = proximity[0];
	} else {
		// Clear popup
		let popupContainer = document.getElementById("treePopup");
		while(popupContainer.firstChild) popupContainer.removeChild(popupContainer.firstChild);
	}
	if(nearest !== undefined) {
		// if ascendancy passive, must check that the ascendancy circle is drawn and only option that were selected
		if(nearest.ascendancyName !== undefined) {
			if(svg.getElementsByClassName("ascendancy").length > 0) {
				let ascendancyName = treeNodes[svg.getElementsByClassName("ascendancy")[0].id.substring(5)].ascendancyName;
				if(nearest.ascendancyName != ascendancyName) return;
				if(nearest.isMultipleChoiceOption && document.getElementById("node_"+nearest.skill) === null) return;
			}
		}
		let popupElement = buildNodeTooltip(nearest);
		// prevent overflow from right and bottom
		let posX = event.clientX;
		let posY = event.clientY;
		if(event.clientX + popupElement.getBoundingClientRect().width > rect.width) posX = rect.right - popupElement.getBoundingClientRect().width;
		if(event.clientY + popupElement.getBoundingClientRect().height > rect.height) posY = rect.height - popupElement.getBoundingClientRect().height;
		//console.log(event.clientX, posX + popupElement.getBoundingClientRect().width, rect.width, posX);
		popupElement.style.left = posX + "px";
		popupElement.style.top = posY + "px";
		// higlight and position the hover element
		let hoverCircle = svg.getElementById("hoverCircle");
		hoverCircle.setAttribute("cx", nearest.x*view.a+view.e);
		hoverCircle.setAttribute("cy", nearest.y*view.d+view.f);
		hoverCircle.setAttribute("r", getSizeNode(nearest)*Math.min(view.a, view.d));
		hoverCircle.setAttribute("fill", "var(--tree-node-hover)");
	}
}

/* Other utility */

// Does not count class starting index and ascendancy starting index, but still count ointment and cluster
function countPassivePoint(nodes) {
	return nodes.filter(n => !(treeNodes[n] && treeNodes[n].classStartIndex) && !(treeNodes[n] && treeNodes[n].ascendancyName)).length
}

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
	var viewport = svg.firstChild;
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
	viewport.appendChild(clipPath);
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
	viewport.appendChild(gPanel);
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
		viewport.appendChild(clipAscPath);
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
		viewport.appendChild(gPanelAsc);
}
};

/* Utility for first character tutorial */

function buildContext(elementId, labels, pos) {
	var svg = document.getElementById(elementId).firstChild;
	var viewport = svg.firstChild;
	
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
	viewport.appendChild(contextBox);

	const lineB1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	lineB1.setAttribute("x1", pos[0]+500);
	lineB1.setAttribute("y1", pos[1]+400);
	lineB1.setAttribute("x2", pos[0]+1500);
	lineB1.setAttribute("y2", pos[1]+400);
	lineB1.setAttribute("stroke", "#7C7");
	lineB1.setAttribute("stroke-width", 128);
	lineB1.setAttribute("stroke-linecap","round");
	viewport.appendChild(lineB1);
	const lineB2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	lineB2.setAttribute("x1", pos[0]+500);
	lineB2.setAttribute("y1", pos[1]+400+300);
	lineB2.setAttribute("x2", pos[0]+1500);
	lineB2.setAttribute("y2", pos[1]+400+300);
	lineB2.setAttribute("stroke", "#090");
	lineB2.setAttribute("stroke-width", 128);
	lineB2.setAttribute("stroke-linecap","round");
	viewport.appendChild(lineB2);
	const lineB3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	lineB3.setAttribute("x1", pos[0]+500);
	lineB3.setAttribute("y1", pos[1]+400+900);
	lineB3.setAttribute("x2", pos[0]+1500);
	lineB3.setAttribute("y2", pos[1]+400+900);
	lineB3.setAttribute("stroke", "#7AF");
	lineB3.setAttribute("stroke-width", 128);
	lineB3.setAttribute("stroke-linecap","round");
	viewport.appendChild(lineB3);
	const lineB4 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	lineB4.setAttribute("x1", pos[0]+500);
	lineB4.setAttribute("y1", pos[1]+400+1200);
	lineB4.setAttribute("x2", pos[0]+1500);
	lineB4.setAttribute("y2", pos[1]+400+1200);
	lineB4.setAttribute("stroke", "#15C");
	lineB4.setAttribute("stroke-width", 128);
	lineB4.setAttribute("stroke-linecap","round");
	viewport.appendChild(lineB4);
	const lineE1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	lineE1.setAttribute("x1", pos[0]+500);
	lineE1.setAttribute("y1", pos[1]+400+2500);
	lineE1.setAttribute("x2", pos[0]+1500);
	lineE1.setAttribute("y2", pos[1]+400+2500);
	lineE1.setAttribute("stroke", "#166");
	lineE1.setAttribute("stroke-width", 128);
	lineE1.setAttribute("stroke-linecap","round");
	viewport.appendChild(lineE1);
	const lineE2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	lineE2.setAttribute("x1", pos[0]+500);
	lineE2.setAttribute("y1", pos[1]+400+3200);
	lineE2.setAttribute("x2", pos[0]+1500);
	lineE2.setAttribute("y2", pos[1]+400+3200);
	lineE2.setAttribute("stroke", "#A00");
	lineE2.setAttribute("stroke-width", 128);
	lineE2.setAttribute("stroke-linecap","round");
	viewport.appendChild(lineE2);
	const lineE3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	lineE3.setAttribute("x1", pos[0]+500);
	lineE3.setAttribute("y1", pos[1]+400+3900);
	lineE3.setAttribute("x2", pos[0]+1500);
	lineE3.setAttribute("y2", pos[1]+400+3900);
	lineE3.setAttribute("stroke", "#C90");
	lineE3.setAttribute("stroke-width", 128);
	lineE3.setAttribute("stroke-linecap","round");
	viewport.appendChild(lineE3);
	
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
	viewport.appendChild(textB1);
};

/* TRANSFORM ANIMATION */

function scaleZoom(viewport, treeNodes) {
	let margin = 20;
	// By default, width should not be more than available page height
	let maxSpace = Math.min(viewport.parentElement.getBoundingClientRect().height, viewport.parentElement.getBoundingClientRect().width)-margin;
	// Then, we get the bounded coordinates of the tree
	let minViewX = Math.ceil(Math.min(...Object.entries(treeNodes).filter(n => n[1].x).map(n => n[1].x)));
	let minViewY = Math.ceil(Math.min(...Object.entries(treeNodes).filter(n => n[1].y).map(n => n[1].y)));
	let maxViewX = Math.ceil(Math.max(...Object.entries(treeNodes).filter(n => n[1].x).map(n => n[1].x)));
	let maxViewY = Math.ceil(Math.max(...Object.entries(treeNodes).filter(n => n[1].y).map(n => n[1].y)));
	let spanWidth = maxViewX-minViewX;
	let spanHeight = maxViewY-minViewY;
	// Then we apply the matrix of the minimum ratio, and translate to the middle
	let ratio = Math.min(maxSpace/spanWidth, maxSpace/spanHeight);
	let displacementLeft = -minViewX-margin/2/ratio;
	let displacementTop = -minViewY-margin/2/ratio;
	let alignmentLeft = ((viewport.parentElement.getBoundingClientRect().width-(spanWidth*ratio)+margin)/2);
	let alignmentTop = ((viewport.parentElement.getBoundingClientRect().height-(spanHeight*ratio)+margin)/2);
	
	var matrix = new DOMMatrix();
	matrix.preMultiplySelf(new DOMMatrix()
			.translateSelf(alignmentLeft, alignmentTop)
			.scaleSelf(ratio, ratio)
			.translateSelf(displacementLeft, displacementTop));
	viewport.style.transform = matrix.toString();		
}

// Listen to mouse click and wheel to change matrix transformation
function addTransformAnimation(svg, canvas) {
	var drag = false;
	var offset = { x: 0, y: 0 };
	var matrix = new DOMMatrix();

	svg.addEventListener('pointerdown', function (event) {
		drag = true;
		offset = { x: event.offsetX, y: event.offsetY };
	});

	svg.addEventListener('pointermove', function (event) {
		if(canvas.style.transform !== undefined) {
			matrix = new DOMMatrix(canvas.style.transform);
		}
		if (drag) {
			var tx = event.offsetX - offset.x;
			var ty = event.offsetY - offset.y;
			offset = {
				x: event.offsetX,
				y: event.offsetY
			};
			matrix.preMultiplySelf(new DOMMatrix()
				.translateSelf(tx, ty));
			canvas.style.transform = matrix.toString();
		}
	});

	svg.addEventListener('pointerup', function (event) {
		drag = false;
	});
}

function addZommAnimation(svg, canvas) {
	var offset = { x: 0, y: 0 };
	var factor = .1;
	var matrix = new DOMMatrix();

	svg.addEventListener('wheel', function (event) {
		if(canvas.style.transform !== undefined) {
			matrix = new DOMMatrix(canvas.style.transform);
		}
		var zoom = event.deltaY > 0 ? -1 : 1;
		var scale = 1 + factor * zoom;
		offset = {
			x: event.offsetX,
			y: event.offsetY
		};
		matrix.preMultiplySelf(new DOMMatrix()
			.translateSelf(offset.x, offset.y)
			.scaleSelf(scale, scale)
			.translateSelf(-offset.x, -offset.y));
		canvas.style.transform = matrix.toString();
		event.preventDefault();
	});
}