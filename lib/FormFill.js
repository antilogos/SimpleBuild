/* UTILITY */

const hardcodedPobColorValue = {"0": "#000000", "1": "#FF0000", "2": "#00FF00", "3": "#0000FF", "4": "#FFFF00", "5": "#FF00FF", "6": "#00FFFF", "7": "#FFFFFF", "8": "#B2B2B2", "9": "#666666"};

// Notes utilities for displaying from pob to customize htmlContentToText function for displaying coloured text
function pobNoteToHtml(div, str) {
	var txt = document.createElement("textarea");
    txt.innerHTML = str.trim().replaceAll("\n","<br/>")
		.replaceAll(/\^x([0-9A-Fa-f]{6})([^\^<]*)/g,"<color \"#$1\">$2</color>")
		.replaceAll(/\^0([^\^<]*)/g,"<color \""+hardcodedPobColorValue[0]+"\">$1</color>")
		.replaceAll(/\^1([^\^<]*)/g,"<color \""+hardcodedPobColorValue[1]+"\">$1</color>")
		.replaceAll(/\^2([^\^<]*)/g,"<color \""+hardcodedPobColorValue[2]+"\">$1</color>")
		.replaceAll(/\^3([^\^<]*)/g,"<color \""+hardcodedPobColorValue[3]+"\">$1</color>")
		.replaceAll(/\^4([^\^<]*)/g,"<color \""+hardcodedPobColorValue[4]+"\">$1</color>")
		.replaceAll(/\^5([^\^<]*)/g,"<color \""+hardcodedPobColorValue[5]+"\">$1</color>")
		.replaceAll(/\^6([^\^<]*)/g,"<color \""+hardcodedPobColorValue[6]+"\">$1</color>")
		.replaceAll(/\^7([^\^<]*)/g,"<color \""+hardcodedPobColorValue[7]+"\">$1</color>")
		.replaceAll(/\^8([^\^<]*)/g,"<color \""+hardcodedPobColorValue[8]+"\">$1</color>")
		.replaceAll(/\^9([^\^<]*)/g,"<color \""+hardcodedPobColorValue[9]+"\">$1</color>")
		.replaceAll(/\^x([0-9A-Fa-f]{6})([^\^<]*)/g,"$2")
		.replaceAll(/\^x([0-9A-Fa-f]{6})/g,"");
	htmlContentToText(div, txt.value.replaceAll(/\<br ?\/?\>/g,"\r\n"));
}

function addReference(div, references, withLineReturn) {
	if(references.hasOwnProperty(div.getAttribute("id"))) {
		var refDiv = document.createElement("div");
		refDiv.classList.add("notesReferences");
		pobNoteToHtml(refDiv, references[div.getAttribute("id")]);
		if(withLineReturn) refDiv.style.display = "block";
		div.appendChild(refDiv);
	}
}

function switchButtonPressed(currentPressed, listButton) {
	var ref = false;
	for (let buttonElement of listButton) {
		if(buttonElement === currentPressed && !buttonElement.classList.contains("pressed")) {
			buttonElement.classList.add("pressed");
			ref = true;
		} else {
			buttonElement.classList.remove("pressed");
		}
	}
	return ref;
}

// Constants
const DIV_NOTES = "notesDiv", DIV_SETUP = "setupDiv", DIV_GEMCONFIGURATION = "gemconfDiv", DIV_ROADMAP = "roadmapDiv", DIV_POBCODE = "pobCodeDiv",
	DIV_ASCENDANCY = "ascendancyDiv", DIV_TREE = "treeDiv", DIV_MASTERY = "masteryDiv", DIV_TREECOMMENTARY = "treeComentaryDiv", DIV_PREVIEW = "previewDiv", DIV_KEYSTONE = "keystoneDiv", DIV_PATHWAY = "pathwayDiv", DIV_TREEJEWEL = "jewelTreeDiv",
	DIV_MAINHAND = "mainHand", DIV_OFFHAND = "offHand", DIV_CHEST = "chest", DIV_HELM = "helm", DIV_GLOVES = "gloves", DIV_BOOTS = "boots", 
	DIV_AMULET = "amulet", DIV_RING1 = "leftRing", DIV_RING2 = "rightRing", DIV_BELT = "belt", DIV_FLASK1 = "flask1", DIV_FLASK2 = "flask2", DIV_FLASK3 = "flask3", DIV_FLASK4 = "flask4", DIV_FLASK5 = "flask5",
	DIV_INVENTORYNOTE = "item_notes", DIV_INVENTORYSET = "inventorySetDiv", DIV_EQUIPEDJEWEL = "jewelAbyssDiv", DIV_WEAPONSWAP = "weaponswapDiv",
	DIV_IMPORT = "importDiv", DIV_SEARCHSERIE = "searchserieDiv", DIV_SEARCHCLASS = "searchclassDiv", DIV_SEARCHTAG = "searchtagDiv", DIV_RESULT = "resultDiv", DIV_HISTORY = "historyDiv";
const mapSlotToDiv = {"Weapon 1": DIV_MAINHAND, "Weapon 2": DIV_OFFHAND, "Body Armour": DIV_CHEST, "Helmet": DIV_HELM, "Gloves": DIV_GLOVES, "Boots": DIV_BOOTS,
 "Amulet": DIV_AMULET, "Ring 1": DIV_RING1, "Ring 2": DIV_RING2, "Belt": DIV_BELT, "Flask 1": DIV_FLASK1, "Flask 2": DIV_FLASK2, "Flask 3": DIV_FLASK3, "Flask 4" : DIV_FLASK4, "Flask 5": DIV_FLASK5, "None": "none", "Weapon 1 Swap": DIV_MAINHAND+"Swap", "Weapon 2 Swap": DIV_OFFHAND+"Swap"};

function timeSince(date) {
	let baseSentence;
	if(localStorage.getItem("lang") == "fr") {
		baseSentence = "Il y a $1 $2";
	} else {
		baseSentence = "$1 $2 ago";
	}
	var seconds = Math.floor((new Date() - date) / 1000);
	var interval = seconds / 31536000;
	if (interval > 1) {
		return baseSentence.replaceAll("$1", Math.floor(interval)).replaceAll("$2", dynamicDico['time_component_y'][localStorage.getItem("lang")]);
	}
	interval = seconds / 2592000;
	if (interval > 1) {
		return baseSentence.replaceAll("$1", Math.floor(interval)).replaceAll("$2", dynamicDico['time_component_M'][localStorage.getItem("lang")]);
	}
	interval = seconds / 86400;
	if (interval > 1) {
		return baseSentence.replaceAll("$1", Math.floor(interval)).replaceAll("$2", dynamicDico['time_component_d'][localStorage.getItem("lang")]);
	}
	interval = seconds / 3600;
	if (interval > 1) {
		return baseSentence.replaceAll("$1", Math.floor(interval)).replaceAll("$2", dynamicDico['time_component_h'][localStorage.getItem("lang")]);
	}
	interval = seconds / 60;
	if (interval > 1) {
		return baseSentence.replaceAll("$1", Math.floor(interval)).replaceAll("$2", dynamicDico['time_component_m'][localStorage.getItem("lang")]);
	}
	return baseSentence.replaceAll("$1", Math.floor(interval)).replaceAll("$2", dynamicDico['time_component_s'][localStorage.getItem("lang")]);
}

/* GEMS, TREE AND ITEMS */

// Get items from pob (listed under slots) and create div for each of them
function fillGemProfile(gemGroup, index, references) {
	clearProfile([DIV_SETUP]);
	var roadmap = {};
	var groupSlot = {};
	// Gem configuration reference
	var divGroup = document.createElement("div");
	divGroup.setAttribute("id", "gem_"+index);
	document.getElementById(DIV_SETUP).appendChild(divGroup);
	addReference(divGroup, references, true);
	
	// Prepare each group for each slot
	gemGroup.groups.forEach( (k, i) => {
		let slot = k.slot ? k.slot : "None";
		if(groupSlot[slot] == undefined) groupSlot[slot] = [];
		// Create element to push into the slot array
		var linkedGroup = [];
		k.gems.forEach( (g, j) => {
			let skillGem = allGem[g.skill];
			var gemName;
			if(skillGem === undefined) {
				gemName = g.skill;
			} else if(skillGem.base_item !== null) {
				gemName = skillGem.base_item.display_name;
			} else {
				gemName = skillGem.active_skill.display_name;
			}
			let gemRef = "gem_"+index+"_"+i+"_"+j;
			// Name of the gem, adding alternate quality and option when not used in pob
			var labelText = "";
			if(gemRewards[gemName]) {
				labelText = gemRewards[gemName].lang[localStorage.getItem("lang")];
			} else {
				labelText = gemName;
			}
			if(g.qualityId && g.qualityId != "Default") labelText = labelText + " " + dynamicDico["quality_"+g.qualityId][localStorage.getItem("lang")];
			if(g.enabled == "false") labelText = labelText + " " + dynamicDico["complement_gem_option"][localStorage.getItem("lang")];
			linkedGroup.push( {"name": labelText, "ref": gemRef, "skill": g} );
			// Add to roadmap if available or the condition to get it
			if(skillGem !== undefined) {
				if(skillGem.tags && skillGem.tags.find(t => t == "exceptional") !== undefined) {
					roadmap[gemName] = {};
					if(skillGem.per_level["1"].required_level == 1) {
						roadmap[gemName].level = ROADMAP_LEVEL_DROPONLY;	
					} else {
						roadmap[gemName].level = skillGem.per_level["1"].required_level;	
					}
				} else if(skillGem.per_level && gemRewards[gemName] && g.qualityId == "Default") {
					roadmap[gemName] = {};
					roadmap[gemName].level = skillGem.per_level["1"].required_level;
					if(gemRewards[gemName].rewards) roadmap[gemName].reward = gemRewards[gemName].rewards;
					if(gemRewards[gemName].vendor) roadmap[gemName].vendor = gemRewards[gemName].vendor;
				} else if(g.qualityId && g.qualityId != "Default") {
					roadmap[gemName+" "+g.qualityId] = {};
					roadmap[gemName+" "+g.qualityId].level = ROADMAP_LEVEL_ALTERNATE;
				} else if(gemName.startsWith("Vaal")) {
					roadmap[gemName] = {};
					roadmap[gemName].level = ROADMAP_LEVEL_VAAL;
				}
			}
		});
		groupSlot[slot].push({"label": k.label, "linkedGroup": linkedGroup, "ref": "gem_"+index+"_"+i});
	});
	
	Object.entries(groupSlot).filter( slot => slot[1].filter(s => s.linkedGroup.length > 0).length > 0).forEach( slot => {
		// Item slot div and title
		var slotTitleDiv = document.createElement("div");
		slotTitleDiv.setAttribute("class", "slotSocketTitle");
		var slotTitle = document.createElement("h3");
		slotTitle.textContent = dynamicDico["inventoryslot_"+mapSlotToDiv[slot[0]]][localStorage.getItem("lang")];
		slotTitleDiv.appendChild(slotTitle);
		document.getElementById(DIV_SETUP).appendChild(slotTitleDiv);
		var slotDiv = document.createElement("div");
		slotDiv.setAttribute("class", "slotSocketGroup");
		// For each groups of linked sockets
		for (let group of slot[1].filter(s => s.linkedGroup.length > 0)) {
			// Gem group reference and title
			var groupRef = document.createElement("div");
			groupRef.setAttribute("id", group.ref);
			groupRef.setAttribute("class", "socketGroup");
			if(group.label) { 
				var groupTitle = document.createElement("h3");
				pobNoteToHtml(groupTitle, group.label);
				groupRef.appendChild(groupTitle);
			}
			addReference(groupRef, references, true);
			slotDiv.appendChild(groupRef);
			// Add each sockets colour
			var groupColour = document.createElement("div");
			groupColour.setAttribute("class", "socketColourGroup");
			for (let socket of group.linkedGroup) {
				let skillGem = allGem[socket.skill.skill];
				var socketDiv = document.createElement("div");
				socketDiv.classList.add("socketColour");
				// Determine colour from attribute tag
				if(skillGem == undefined) {
					socketDiv.classList.add("socketColourWhite");
				} else if(skillGem.tags == undefined) {
					socketDiv.classList.add("socketColourIntegrated");
				} else if(skillGem.tags.indexOf("intelligence") >= 0) {
					socketDiv.classList.add("socketColourBlue");
				} else if(skillGem.tags.indexOf("dexterity") >= 0) {
					socketDiv.classList.add("socketColourGreen");
				} else if(skillGem.tags.indexOf("strength") >= 0) {
					socketDiv.classList.add("socketColourRed");
				} else {
					socketDiv.classList.add("socketColourWhite");
				}
				// Optional socket are dimmed
				if(socket.skill.enabled == "false") socketDiv.classList.add("optional");
				groupColour.appendChild(socketDiv);
				// Add link element if not last
				if(group.linkedGroup.indexOf(socket) != group.linkedGroup.length-1 
					&& group.linkedGroup[group.linkedGroup.indexOf(socket)+1].skill.enabled !== "false" 
					&& socket.skill.enabled !== "false") {
					var linkDiv = document.createElement("div");
					linkDiv.classList.add("socketLink");
					groupColour.appendChild(linkDiv);
				}
			}
			slotDiv.appendChild(groupColour);
			// Then add each gem with poe-item
			var groupGem = document.createElement("div");
			groupGem.setAttribute("class", "socketGemGroup");
			for (let socket of group.linkedGroup) {
				// Gem reference
				var itemDiv = document.createElement("div");
				itemDiv.setAttribute("id", socket.ref);
				itemDiv.setAttribute("class", "socketGem");
				addReference(itemDiv, references, false);
				// Creation of the poe-item html element for HoradricHelper
				var item = document.createElement("poe-item");
				item.setAttribute("reference", socket.ref);
				item.setAttribute("label-text", socket.name);
				displayMode(item, "icon");
				itemDiv.appendChild(item);
				groupGem.appendChild(itemDiv);
			}
			slotDiv.appendChild(groupGem);
		}
		document.getElementById(DIV_SETUP).appendChild(slotDiv);
	});
	// Change roadmap
	currRoadMapStat.gemGroup = roadmap;
	loadHoradricHelper();
}

// Create div for ascendancy, mastery and keystone
function fillTreeProfile(treeIndex, treeGroups, references) {
	clearProfile([DIV_ASCENDANCY,DIV_KEYSTONE,DIV_MASTERY,DIV_PREVIEW,DIV_PATHWAY,DIV_TREEJEWEL,DIV_TREECOMMENTARY]);
	let treeGroup = treeGroups[treeIndex];
	var passives = treeGroup.nodes.map( n => treeNodes[n]);
	// Add poe-passive for each ascendancy and keystone allocated
	passives.filter(node => node !== undefined && (node.ascendancyName || node.isKeystone)).forEach( node => {
		// Passif reference
		var nodeDiv = document.createElement("div");
		nodeDiv.setAttribute("id", "node_"+node.skill);
		addReference(nodeDiv, references, false);
		// Creation of the poe-item html element for HoradricHelper
		var item = document.createElement("poe-passive");
		item.setAttribute("reference", "node_"+node.skill);
		item.setAttribute("label-text", node.name);
		nodeDiv.appendChild(item);
		// Place node in the right category
		if(node.ascendancyName !== undefined && !node.isMultipleChoice) {
			displayMode(item, "popup");
			document.getElementById(DIV_ASCENDANCY).appendChild(nodeDiv);
		} else if(node.isKeystone) {
			displayMode(item, "popup");
			document.getElementById(DIV_KEYSTONE).appendChild(nodeDiv);
		}
	});
	// Sort notable from the last main path
	let parentTree = currPob.treeGroups.filter(t => t!=treeGroup).filter( t => 
		// search which tree could be the parent tree by having all the same nodes
		t.nodes.filter(n => treeGroup.nodes.indexOf(n) < 0).length == 0
	).sort( (a, b) => a.length - b.length).pop();
	var depthResult = depthFromStart(passives.filter(node => node !== undefined && !node.ascendancyName), treeGroup.startClass, parentTree);
	if(parentTree) {
		var nodeDiv = document.createElement("span");
		nodeDiv.setAttribute("class", "parentTree");
		nodeDiv.textContent = dynamicDico["complement_tree_fromparent"][localStorage.getItem("lang")] + " " + parentTree.title + " 🡢 ";
		document.getElementById(DIV_PATHWAY).appendChild(nodeDiv);
	}
	passives.filter(node => node !== undefined && !node.ascendancyName && (node.isNotable || node.iskeystone) && depthResult[node.skill] > 0).sort( (a, b) => {
		return depthResult[a.skill] - depthResult[b.skill];
	}).forEach( node => {
		// Passif reference
		var nodeDiv = document.createElement("div");
		//if(!parentTree && )
		nodeDiv.setAttribute("id", "node_"+node.skill);
		addReference(nodeDiv, references, false);
		// Creation of the poe-item html element for HoradricHelper
		var item = document.createElement("poe-passive");
		item.setAttribute("reference", "node_"+node.skill);
		item.setAttribute("label-text", node.name);
		nodeDiv.appendChild(item);
		displayMode(item, "popup");
		document.getElementById(DIV_PATHWAY).appendChild(nodeDiv);
	});
	// Add poe-passive for Masteries group with their effect from all masteries allocated
	var masteryGroup = new Map();
	if(treeGroup.masteryEffects) {
		treeGroup.masteryEffects.split("},{").filter(s => s.length > 0).forEach( (k, i) => {
			let master = k.split(",")[0].replaceAll("\{","").replaceAll("\}","");
			let mastery = treeNodes[master].name;
			masteryGroup[mastery] = master;
		});
	}
	Object.entries(masteryGroup).forEach( k => {
		// Mastery reference
		var nodeDiv = document.createElement("div");
		nodeDiv.setAttribute("id", "mastery_"+k[1]);
		addReference(nodeDiv, references, false);
		// Creation of the poe-item html element for HoradricHelper
		var item = document.createElement("poe-passive");
		item.setAttribute("reference", "mastery_"+treeIndex+"_"+k[0]);
		displayMode(item, "show");
		item.setAttribute("label-text", k[0]);
		nodeDiv.appendChild(item);
		document.getElementById(DIV_MASTERY).appendChild(nodeDiv);
	});
	// Tree Preview
	var ascendClassId = "";
	if(treeGroup.ascendClassId > 0) ascendClassId = passiveSkillTreeData.classes[treeGroup.startClass].ascendancies[treeGroup.ascendClassId-1].id;
	buildSvgTree(DIV_PREVIEW, treeNodes, treeGroup.startClass, ascendClassId);
	buildPath(treeGroup, DIV_PREVIEW, treeNodes, passiveSkillTreeData);
	if(parentTree) {
		buildPath(parentTree, DIV_PREVIEW, treeNodes, passiveSkillTreeData, {"stroke": "var(--tree-node-oldpath)", "width": ALLOCATED_PATH});
	}
	let startClass = Object.values(passiveSkillTreeData.nodes).filter(n => n.classStartIndex == treeGroup.startClass)[0];
	let startClassAscend = Object.values(passiveSkillTreeData.nodes).find(n => n.isAscendancyStart && n.ascendancyName == ascendClassId);
	buildClassIcon(DIV_PREVIEW, startClass, startClassAscend);
	// Add comentary
	var notes = document.createElement("div");
	notes.setAttribute("id", "tree_"+treeIndex);
	document.getElementById(DIV_TREECOMMENTARY).appendChild(notes);
	addReference(notes, references, false);
	// Add jewel 
	if(treeGroup.socket) {
		for (let jewel of Object.entries(treeGroup.socket)) {
			// Creation of the poe-item html element for HoradricHelper
			var item = document.createElement("poe-item");
			item.setAttribute("reference", "item_" + jewel[1]);
			displayMode(item, "icon");
			document.getElementById(DIV_TREEJEWEL).appendChild(item);
		}
	}
	// Change roadmap
	currRoadMapStat.startingClass = parseInt(treeGroup.startClass);
	loadHoradricHelper();
}

// Create div for items
function fillInventoryProfile(itemSet, index, references) {
	clearProfile([DIV_MAINHAND, DIV_OFFHAND, DIV_CHEST, DIV_HELM, DIV_GLOVES, DIV_BOOTS, DIV_AMULET, DIV_RING1, DIV_RING2, DIV_BELT, DIV_FLASK1, DIV_FLASK2, DIV_FLASK3, DIV_FLASK4, DIV_FLASK5, DIV_EQUIPEDJEWEL, DIV_WEAPONSWAP, DIV_INVENTORYNOTE]);
	// Add notes
	var notes = document.createElement("div");
	notes.setAttribute("id", "itemset_"+index);
	document.getElementById(DIV_INVENTORYNOTE).appendChild(notes);
	addReference(notes, references, false);
	// Map all item in specific slot to the corresponding div
	itemSet.configuration.forEach( k => {
		// Creation of the poe-item html element for HoradricHelper
		var item = document.createElement("poe-item");
		item.setAttribute("reference", "item_" + k.itemId);
		if(mapSlotToDiv.hasOwnProperty(k.name) && k.name.indexOf("Swap") < 0) {
			item.setAttribute("label-text",k.name);
			displayMode(item, "icon");
			document.getElementById(mapSlotToDiv[k.name]).appendChild(item);
		} else {
			// Creation of the poe-item html element for HoradricHelper
			displayMode(item, "icon");
			if(k.name.indexOf("Swap") >= 0) {
				document.getElementById(DIV_WEAPONSWAP).appendChild(item);
			} else if(k.name.indexOf("Socket") >= 0) {
				document.getElementById(DIV_EQUIPEDJEWEL).appendChild(item);
			}
		}
	});
	loadHoradricHelper();
}

/* CLEANER AND PARENT SWITCHER */

var currPob;

// Parent fill for all
function fillProfile(pobObject) {
	currPob = pobObject;
	// Add div for each gems setup and a link to raodmap
	let listGemButton = [];
	for (let group of pobObject.gemGroups) {
		let optionElement = document.createElement("button");
		listGemButton.push(optionElement);
		optionElement.classList.add("selectable");
		optionElement.textContent = group.title? group.title : dynamicDico["label_default_title"][localStorage.getItem("lang")];
		optionElement.addEventListener('click', function (event) {
			fillGemProfile(group, pobObject.gemGroups.indexOf(group), pobObject.notes.refs);
			switchButtonPressed(this, listGemButton);
			fillRoadmapProfile();
		});
		document.getElementById(DIV_GEMCONFIGURATION).appendChild(optionElement);
	}
	switchButtonPressed(listGemButton[0], listGemButton);
	fillGemProfile(pobObject.gemGroups[0], 0, pobObject.notes.refs);
	
	// Add div for each tree setup
	// TODO a link to the official tree
	let	listTreeButton = [];
	pobObject.treeGroups.forEach( (tree, treeIndex) => {
		let optionElement = document.createElement("button");
		listTreeButton.push(optionElement);
		optionElement.classList.add("selectable");
		let points = countPassivePoint(tree.nodes);
		let ascendancyPoints =  tree.nodes.map(n => treeNodes[n]).filter(n => n !== undefined).filter(n => !n.isAscendancyStart && n.ascendancyName && !n.isMultipleChoiceOption).length;
		var title = (tree.title? tree.title : dynamicDico["label_default_title"][localStorage.getItem("lang")]) + " (" + points + " "+dynamicDico["complement_tree_skillpoints"][localStorage.getItem("lang")]+", " + ascendancyPoints + " "+dynamicDico["complement_tree_ascendancypoints"][localStorage.getItem("lang")]+")";
		optionElement.textContent = title;
		optionElement.addEventListener('click', function (event) {
			fillTreeProfile(treeIndex, pobObject.treeGroups, pobObject.notes.refs);
			switchButtonPressed(this, listTreeButton);
			fillRoadmapProfile();
		});
		document.getElementById(DIV_TREE).appendChild(optionElement);
	});
	switchButtonPressed(listTreeButton[0], listTreeButton);
	fillTreeProfile(0, pobObject.treeGroups, pobObject.notes.refs);

	// Add div for each items setup
	let	listItemsetButton = [];
	pobObject.itemGroups.itemSet.forEach( (group, groupIndex) => {
		let optionElement = document.createElement("button");
		listItemsetButton.push(optionElement);
		optionElement.classList.add("selectable");
		optionElement.textContent = group.title? group.title : dynamicDico["label_default_title"][localStorage.getItem("lang")];
		optionElement.addEventListener('click', function (event) {
			switchButtonPressed(this, listItemsetButton);
			fillInventoryProfile(group, groupIndex, pobObject.notes.refs);
		});
		document.getElementById(DIV_INVENTORYSET).appendChild(optionElement);
	});
	switchButtonPressed(listItemsetButton[0], listItemsetButton);
	fillInventoryProfile(pobObject.itemGroups.itemSet[0], 0, pobObject.notes.refs);

	// Notes
	if(pobObject.notes !== null && pobObject.notes.header !== null && pobObject.notes.header.trim().length > 0) { 
		let notesDiv = document.createElement("div");
		pobNoteToHtml(notesDiv, pobObject.notes.header);
		document.getElementById(DIV_NOTES).appendChild(notesDiv);
		document.getElementById("notes_header").style.display = "block";
		document.getElementById(DIV_NOTES).parentNode.style.display = "block";
	} else {
		document.getElementById("notes_header").style.display = "none";
		document.getElementById(DIV_NOTES).parentNode.style.display = "none";
	}
	
	// Code POB
	let codepobDiv = document.createElement("div");
	codepobDiv.classList.add("exportCode");
	codepobDiv.textContent = pobObject.code;
	document.getElementById("pobCodeDiv").appendChild(codepobDiv);
	
	// Load first roadmap
	fillRoadmapProfile();
	
	loadItemData(pobObject.itemGroups);
	loadNodeData(pobObject.treeGroups);
	loadGemData(pobObject.gemGroups);
	loadHoradricHelper();
}

function clearProfile(divList) {
	if(divList == null) divList = [DIV_NOTES, DIV_SETUP, DIV_GEMCONFIGURATION, DIV_ROADMAP, DIV_POBCODE, DIV_ASCENDANCY, DIV_TREE, DIV_TREECOMMENTARY, DIV_MASTERY, DIV_PREVIEW, DIV_KEYSTONE, DIV_PATHWAY, DIV_INVENTORYSET, 
		DIV_INVENTORYNOTE, DIV_MAINHAND, DIV_OFFHAND, DIV_CHEST, DIV_HELM, DIV_GLOVES, DIV_BOOTS, DIV_AMULET, DIV_RING1, DIV_RING2, DIV_BELT, DIV_FLASK1, DIV_FLASK2, DIV_FLASK3, DIV_FLASK4, DIV_FLASK5];
	for (let divId of divList) {
		let divElement = document.getElementById(divId);
		while(divElement.firstChild) {
			divElement.removeChild(divElement.firstChild);
		}
	}
}

function displayParsed(pobData) {
	let pobObject = loadPobData(pobData);
	// If valid code, clear before load
	addHistory(pobObject);
	displayMenu('home');
	clearProfile();
	hhData = [];
	// Load new
	fillProfile(pobObject);
}

/* ROADMAP */

let ROADMAP_LEVEL_DROPONLY = 68;
let ROADMAP_LEVEL_ALTERNATE = 56;
let ROADMAP_LEVEL_VAAL = 60;
var currRoadMapStat = {"startingClass": null, "gemGroup": null};
var questRoad = [{"level":2, "questId": "label_quest_lyoneye"},
	{"level":4, "questId": "label_quest_submerged"},
	{"level":8, "questId": "label_quest_prison"},
	{"level":10, "questId": "label_quest_brutus"},
	{"level":12, "questId": "label_quest_cavern"},
	{"level":16, "questId": "label_quest_balefulgem"},
	{"level":18, "questId": "label_quest_maligarospike"},
	{"level":24, "questId": "label_quest_tolman"},
	{"level":28, "questId": "label_quest_gravicius"},
	{"level":31, "questId": "label_quest_archives"},
	{"level":34, "questId": "label_quest_mines"},
	{"level":38, "questId": "label_quest_belly"},
	{"level":ROADMAP_LEVEL_ALTERNATE, "questId": "label_quest_alternate"},
	{"level":ROADMAP_LEVEL_VAAL, "questId": "label_quest_vaal"},
	{"level":ROADMAP_LEVEL_DROPONLY, "questId": "label_quest_droponly"},
	{"level":72, "questId": "label_quest_awakened"}];

// Create div for roadmap of quest reward
function fillRoadmapProfile() {
	clearProfile([DIV_ROADMAP]);
	//document.getElementById(DIV_ROADMAP).appendChild(div);
	var gemReward = {};
	var gemVendor = {};
	var gemOut = [];
	// Filling quest road
	for (let quest of questRoad) {
		gemReward[quest.level] = [];
		gemVendor[quest.level] = [];
		gemOut[quest.level] = [];
		// Regroup level 1 and 2 together
		for (let gem of Object.entries(currRoadMapStat.gemGroup).filter(g => g[1].level == quest.level || (g[1].level == 1 && quest.level ==2))) {
			if(gem[1].reward && gem[1].reward.indexOf(currRoadMapStat.startingClass) >= 0) gemReward[quest.level].push(gem[0]);
			else if(gem[1].vendor && gem[1].vendor.indexOf(currRoadMapStat.startingClass) >= 0) gemVendor[quest.level].push(gem[0]);
			else if(gem[1].tag) gemOut[68].push(gem[0]);
			else gemOut[quest.level].push(gem[0]);
		}
	}
	for (let quest of questRoad) {
		var questItem = [];
		for (let gem of gemReward[quest.level]) {
			// Gem as quest reward
			var item = document.createElement("poe-item");
			item.setAttribute("reference", "gem_"+gem.replaceAll(" ", "_"));
			displayMode(item, "icon");
			questItem.push(item);
		}
		for (let gem of gemVendor[quest.level]) {
			// Gem as vendor
			var item = document.createElement("poe-item");
			item.setAttribute("reference", "gem_"+gem.replaceAll(" ", "_"));
			displayMode(item, "icon");
			questItem.push(item);
		}
		// Add section for Vaal, Alternate quality, Awakened and Drop only with specific quest level
		if(quest.level > 40) {
			for (let gem of gemOut[quest.level]) {
				var item = document.createElement("poe-item");
				item.setAttribute("reference", "gem_"+gem.replaceAll(" ", "_"));
				displayMode(item, "icon");
				questItem.push(item);
			}
		}
		if(questItem.length > 0) {
			// Add section for the current quest
			var questDiv = document.createElement("div");
			questDiv.setAttribute("class", "socketGroup");
			var questHeader = document.createElement("div");
			questHeader.setAttribute("id", quest.questId);
			questHeader.textContent = langTranslate.find(l => l._id == quest.questId)[localStorage.getItem("lang")];
			questDiv.appendChild(questHeader);
			for (let item of questItem) questDiv.appendChild(item);
			document.getElementById(DIV_ROADMAP).appendChild(questDiv);	
		}
	}
	// Div for Gem out of class
	if(Object.entries(gemOut).filter(g => g[0] < 40 && g[1].length > 0).length > 0) {
		var questDiv = document.createElement("div");
		questDiv.setAttribute("class", "socketGroup");
		var questHeader = document.createElement("div");
		questHeader.setAttribute("id", "label_quest_outofclass");
		questHeader.textContent = langTranslate.find(l => l._id == "label_quest_outofclass")[localStorage.getItem("lang")];
		questDiv.appendChild(questHeader);
		for (let gem of Object.entries(gemOut).filter(g => g[0] < 40 && g[1].length > 0).flatMap(g => g[1])) {
			var item = document.createElement("poe-item");
			item.setAttribute("reference", "gem_"+gem.replaceAll(" ", "_"));
			displayMode(item, "icon");
			questDiv.appendChild(item);
		}
		document.getElementById(DIV_ROADMAP).appendChild(questDiv);	
	}
}

/* HISTORY AND BUTTON */

function addHistory(pobData) {
	var prevHistory = JSON.parse("[]");
	if(localStorage.getItem("buildHistory")) {
		prevHistory = JSON.parse( localStorage.getItem("buildHistory"));
		// Remove and push on top if already in history
		let lookup = prevHistory.find( n => JSON.stringify(pobData, null, 0) == JSON.stringify(n.pobData, null, 0));
		if(lookup !== undefined) {
			prevHistory.splice(prevHistory.indexOf(lookup), 1);
		}
	}
	let lookup = listBuild.find( n => JSON.stringify(pobData, null, 0) == JSON.stringify(n.parsed, null, 0));
	historyItem = {"pobData": pobData, "timestamp": Date.now()}
	if(lookup) historyItem.title = lookup.title;
	prevHistory.unshift(historyItem);
	localStorage.setItem("buildHistory",JSON.stringify(prevHistory, null, 0));
	loadHistory();
}

function fillBuildButton(pobData, timestamp, title) {
	let historyElement = document.createElement("button");
	historyElement.classList.add("selectable");
	historyElement.classList.add("buildPreview");
	// Add class icon element from tree
	let historyIconElement = document.createElement("img");
	historyIconElement.src = "./img/inventory-sprite.png";
	historyIconElement.style.width = "394px"; // 788/2
	historyIconElement.style.height = "355px"; // 710/2
	// Add class title element
	let historyTreeElement = document.createElement("div");
	// Select the biggest tree and gem to display it
	var tree;
	if(pobData.treeGroups.length > 1) {
		// Multiple tree
		tree = pobData.treeGroups.map( treeGroup => {
			var className = passiveSkillTreeData.classes[treeGroup.startClass].name;
			var iconPosition = classPosition[treeGroup.startClass];
			if(treeGroup.ascendClassId > 0) {
				className = passiveSkillTreeData.classes[treeGroup.startClass].ascendancies[treeGroup.ascendClassId-1].name;
				iconPosition = ascendancyPosition[passiveSkillTreeData.classes[treeGroup.startClass].ascendancies[treeGroup.ascendClassId-1].id];
			}
			var passivePoints = countPassivePoint(treeGroup.nodes);
			return {"className": className, "iconPosition": iconPosition, "passivePoints": passivePoints};
		}).sort( (a, b) => a.passivePoints - b.passivePoints).slice(-1)[0];
		historyIconElement.style.margin = "-"+(tree.iconPosition.y/2+2)+"px 0 0 -" +(tree.iconPosition.x/2)+ "px";
		historyTreeElement.textContent = tree.className + " (" + tree.passivePoints+" "+dynamicDico["complement_tree_skillpoints"][localStorage.getItem("lang")]+")";
	} else {
		// Single tree
		let treeGroup = pobData.treeGroups[0];
		var className = passiveSkillTreeData.classes[treeGroup.startClass].name;
		var iconPosition = classPosition[treeGroup.startClass];
		if(treeGroup.ascendClassId > 0) {
			className = passiveSkillTreeData.classes[treeGroup.startClass].ascendancies[treeGroup.ascendClassId-1].name;
			iconPosition = ascendancyPosition[passiveSkillTreeData.classes[treeGroup.startClass].ascendancies[treeGroup.ascendClassId-1].id];
		}
		var passivePoints = countPassivePoint(treeGroup.nodes);
		historyIconElement.style.margin = "-"+(iconPosition.y/2+2)+"px 0 0 -" +(iconPosition.x/2)+ "px";
		historyTreeElement.textContent = className + " (" + passivePoints+" "+dynamicDico["complement_tree_skillpoints"][localStorage.getItem("lang")]+")";
	}
	// Select the biggest gem to display it
	let historySkillElement = document.createElement("div");
	if(pobData.gemGroups.length > 0 && pobData.gemGroups[0].groups.sort( (a, b) => a.gems.filter(g => g.enabled).length - b.gems.filter(g => g.enabled).length).length > 0 && pobData.gemGroups[0].groups.sort( (a, b) => a.gems.filter(g => g.enabled).length - b.gems.filter(g => g.enabled).length).slice(-1)[0].gems.filter(n => !n.skill.startsWith("Support")).length > 0) {
		var gemName;
		gemName = pobData.gemGroups[0].groups.sort( (a, b) => a.gems.filter(g => g.enabled).length - b.gems.filter(g => g.enabled).length).slice(-1)[0].gems.filter(n => !n.skill.startsWith("Support"))[0].skill;
		var skillGem = allGem[gemName];
		if(skillGem !== null) {
			if(skillGem.base_item !== null) {
				gemName = skillGem.base_item.display_name;
			} else {
				gemName = skillGem.active_skill.display_name;
			}
		}
		if(gemRewards[gemName] && gemRewards[gemName].lang[localStorage.getItem("lang")]) {
			historySkillElement.textContent = gemRewards[gemName].lang[localStorage.getItem("lang")];
		} else {
			historySkillElement.textContent = gemName;
		}
	}
	
	// Parent div for display
	let cropDiv = document.createElement("div");
	cropDiv.classList = "cropPreview";
	cropDiv.appendChild(historyIconElement);
	historyElement.appendChild(cropDiv);
	let colDiv = document.createElement("div");
	colDiv.classList = "columnPreview";
	
	// Add history title element
	if(title) {
		let historyTitleElement = document.createElement("div");
		historyTitleElement.textContent = title;
		colDiv.appendChild(historyTitleElement);
	}
	colDiv.appendChild(historyTreeElement);
	colDiv.appendChild(historySkillElement);
	// Add history time element
	if(timestamp) {
		let historyTimeElement = document.createElement("div");
		historyTimeElement.textContent = timeSince(timestamp);
		colDiv.appendChild(historyTimeElement);
	}
	historyElement.appendChild(colDiv);
	
	// Add the event listener
	historyElement.addEventListener('click', function (event) {
		displayParsed(pobData.code);
		if(title) window.location.hash = title;
		else window.location.hash = "";
	});
	return historyElement;
}

function loadHistory() {
	clearProfile([DIV_HISTORY]);
	if(localStorage.getItem("buildHistory")) {
		let historyList = JSON.parse(localStorage.getItem("buildHistory"));
		for (let historyBuild of historyList) {
			let historyElmentButton = fillBuildButton(historyBuild.pobData, historyBuild.timestamp, historyBuild.title);
			document.getElementById(DIV_HISTORY).appendChild(historyElmentButton);
		}
	}
	// Close history panel after loading
	document.getElementById("historyPanel").classList = "";
}
