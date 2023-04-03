
// Notes utilities for displaying from pob to 
function pobNoteToHtml(str) {
	return str.trim().replaceAll("\n","<br/>").replaceAll(/\^x([0-9A-Fa-f]{6})(.*?)\^7/g,"<font color='#$1'>$2</font>").replaceAll(/\^x([0-9A-Fa-f]{6})/g,"").replaceAll(/\^7/g,"")
}

function addReference(div, references, withLineReturn) {
	if(references.hasOwnProperty(div.getAttribute("id"))) {
		var span = document.createElement("span");
		span.innerHTML = pobNoteToHtml(references[div.getAttribute("id")]);
		if(withLineReturn) span.style.display = "block";
		div.appendChild(span);
	}
}

// Constants
const DIV_NOTES = "notesDiv", DIV_SETUP = "setupDiv", DIV_GEMCONFIGURATION = "gemconfDiv"; DIV_ROADMAP = "roadmapDiv", 
	DIV_ASCENDANCY = "ascendancyDiv", DIV_TREE = "treeDiv", DIV_MASTERY = "masteryDiv", DIV_PREVIEW = "previewDiv", DIV_KEYSTONE = "keystoneDiv",
	DIV_MAINHAND = "mainHand", DIV_OFFHAND = "offHand", DIV_CHEST = "chest", DIV_HELM = "helm", DIV_GLOVES = "gloves", DIV_BOOTS = "boots", 
	DIV_AMULET = "amulet", DIV_RING1 = "leftRing", DIV_RING2 = "rightRing", DIV_BELT = "belt", DIV_FLASK1 = "flask1", DIV_FLASK2 = "flask2", DIV_FLASK3 = "flask3", DIV_FLASK4 = "flask4", DIV_FLASK5 = "flask5",
	DIV_INVENTORYSET = "invenrotySetDiv", DIV_SEARCH = "searchDiv", DIV_RESULT = "resultDiv";
const mapSlotToDiv = {"Weapon 1": DIV_MAINHAND, "Weapon 2": DIV_OFFHAND, "Body Armour": DIV_CHEST, "Helmet": DIV_HELM, "Gloves": DIV_GLOVES, "Boots": DIV_BOOTS,
 "Amulet": DIV_AMULET, "Ring 1": DIV_RING1, "Ring 2": DIV_RING2, "Belt": DIV_BELT, "Flask 1": DIV_FLASK1, "Flask 2": DIV_FLASK2, "Flask 3": DIV_FLASK3, "Flask 4" : DIV_FLASK4, "Flask 5": DIV_FLASK5};

// Get items from pob (listed under slots) and create div for each of them
function fillGemProfile(gemGroup, index, references) {
	clearProfile([DIV_SETUP]);
	var roadmap = {};
	// Gem configuration reference
	var divGroup = document.createElement("div");
	divGroup.setAttribute("id", "gem_"+index);
	document.getElementById(DIV_SETUP).appendChild(divGroup);
	addReference(divGroup, references, true);
	// Add poe-item for each gem, each group in a single div
	gemGroup.groups.forEach( (k, i) => {
		// Gem group reference and title
		var div = document.createElement("div");
		div.setAttribute("id", "gem_"+index+"_"+i);
		div.setAttribute("class", "socketGroup");
		if(k.label) { 
			var span = document.createElement("h3");
			span.innerHTML = pobNoteToHtml(k.label);
			span.style.display = "block";
			div.appendChild(span);
		}
		addReference(div, references, true);
		k.gems.forEach( (g, j) => {
			var skillGem = allGem[g.skill];
			var gemName;
			if(skillGem.base_item !== null) {
				gemName = skillGem.base_item.display_name;
			} else {
				gemName = skillGem.active_skill.display_name;
			}
			let gemRef = "gem_"+index+"_"+i+"_"+j;
			// Gem reference
			var itemDiv = document.createElement("div");
			itemDiv.setAttribute("id", gemRef);
			addReference(itemDiv, references, false);
			div.appendChild(itemDiv);
			// Creation of the poe-item html element for HoradricHelper
			var item = document.createElement("poe-item");
			item.setAttribute("reference", gemRef);
			displayMode(item, "popup");
			if(g.enabled == "false") {
				item.setAttribute("label-text",gemName + " (option)");
			} else {
				item.setAttribute("label-text",gemName);
			}
			// Add to roadmap if available or the condition to get it
			if(skillGem.per_level && gemRewards[gemName] && g.qualityId == "Default") {
				roadmap[gemName] = {"reward": gemRewards[gemName].rewards, "lvl": skillGem.per_level["1"].required_level, "vendor": gemRewards[gemName].vendor};
			} else if(g.qualityId != "Default") {
				// TODO add to Heist
			} else if(gemName.startsWith("Awakened")) {
				// TODO add to Maven
			} else if(gemName.startsWith("Vaal")) {
				// TODO add to Vaal
			}
			itemDiv.appendChild(item);
		});
		document.getElementById(DIV_SETUP).appendChild(div);
	});
	// Add roadmap for gems
	console.log(roadmap);
	//document.getElementById(DIV_ROADMAP).appendChild(div);
	loadHoradricHelper();
}

// Create div for ascendancy, mastery and keystone
function fillTreeProfile(treeGroup, references) {
	clearProfile([DIV_ASCENDANCY,DIV_KEYSTONE,DIV_MASTERY,DIV_PREVIEW]);
	// Add poe-passive for each ascendancy and keystone allocated
	treeGroup.nodes.split(",").forEach( (k, i) => {
		let node = treeNodes[k];
		if(node !== undefined && (node.ascendancyName || node.isKeystone)) {
			// Passif reference
			var nodeDiv = document.createElement("div");
			nodeDiv.setAttribute("id", "node_"+k);
			addReference(nodeDiv, references, false);
			// Creation of the poe-item html element for HoradricHelper
			var item = document.createElement("poe-passive");
			item.setAttribute("reference", "node_"+k);
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
			
		} else {
			//TODO order of notable to take
		}
	});
	// Add poe-passive for Masteris group with their effect from all masteries allocated
	var masteryGroup = new Map();
	treeGroup.masteryEffects.split("},{").filter(s => s.length > 0).forEach( (k, i) => {
		let master = k.split(",")[0].replaceAll("\{","").replaceAll("\}","");
		let mastery = treeNodes[master].name;
		masteryGroup[mastery] = master;
	});
	Object.entries(masteryGroup).forEach( k => {
		// Mastery reference
		var nodeDiv = document.createElement("div");
		nodeDiv.setAttribute("id", "mastery_"+k[1]);
		addReference(nodeDiv, references, false);
		// Creation of the poe-item html element for HoradricHelper
		var item = document.createElement("poe-passive");
		item.setAttribute("reference", "mastery_"+k[0]);
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
	loadHoradricHelper();
}

// Create div for items
function fillInventoryProfile(itemSet, references) {
	clearProfile([DIV_MAINHAND, DIV_OFFHAND, DIV_CHEST, DIV_HELM, DIV_GLOVES, DIV_BOOTS, DIV_AMULET, DIV_RING1, DIV_RING2, DIV_BELT, DIV_FLASK1, DIV_FLASK2, DIV_FLASK3, DIV_FLASK4, DIV_FLASK5]);
	// 
	itemSet.configuration.forEach( k => {
		if(mapSlotToDiv.hasOwnProperty(k.name)) {
			var divSlot = document.getElementById(mapSlotToDiv[k.name]);
			// Creation of the poe-item html element for HoradricHelper
			var item = document.createElement("poe-item");
			item.setAttribute("reference", "item_" + k.itemId);
			displayMode(item, "icon");
			// TODO item.setAttribute("label-text","maybe latter");
			divSlot.appendChild(item);
		} else {
			// Other slot?
			console.log(k);
		}
	});
	// TODO jewel
	
	loadHoradricHelper();
}

// Parent fill for all
function fillProfile(pobObject) {
	console.log(pobObject);
	// Add div for each gems setup and a link to raodmap
	for (let group of pobObject.gemGroups) {
		let optionElement = document.createElement("button");
		optionElement.innerHTML = group.title? group.title : "par défaut";
		optionElement.addEventListener('click', function (event) {
			fillGemProfile(group, pobObject.gemGroups.indexOf(group), pobObject.notes.refs);
		});
		document.getElementById(DIV_GEMCONFIGURATION).appendChild(optionElement);
	}
	fillGemProfile(pobObject.gemGroups[0], 0, pobObject.notes.refs);
	
	// Add div for each tree setup
	// TODO a link to the official tree
	for (let tree of pobObject.treeGroups) {
		let optionElement = document.createElement("button");
		var title = (tree.title? tree.title : "par défaut") + " (" + tree.nodes.split(",").length + " points)";
		optionElement.innerHTML = title;
		optionElement.addEventListener('click', function (event) {
			fillTreeProfile(tree, pobObject.notes.refs);
		});
		document.getElementById(DIV_TREE).appendChild(optionElement);
	}
	fillTreeProfile(pobObject.treeGroups[0], pobObject.notes.refs);

	// Add div for each items setup
	for (let group of pobObject.itemGroups.itemSet) {
		let optionElement = document.createElement("button");
		optionElement.innerHTML = group.title? group.title : "par défaut";
		optionElement.addEventListener('click', function (event) {
			fillInventoryProfile(group, pobObject.notes.refs);
		});
		document.getElementById(DIV_INVENTORYSET).appendChild(optionElement);
	}
	fillInventoryProfile(pobObject.itemGroups.itemSet[0], pobObject.notes.refs);

	// Notes
	if(pobObject.notes !== null && pobObject.notes.header !== null && pobObject.notes.header.trim().length > 0) { 
		let notesDiv = document.createElement("div");
		notesDiv.setAttribute("class", "passive_display");
		notesDiv.id = "notesDiv";
		notesDiv.innerHTML = pobNoteToHtml(pobObject.notes.header);
		document.getElementById(DIV_NOTES).appendChild(notesDiv);
		document.getElementById("notes").style.display = "block";
		document.getElementById(DIV_NOTES).parentNode.style.display = "block";
	} else {
		document.getElementById("notes").style.display = "none";
		document.getElementById(DIV_NOTES).parentNode.style.display = "none";
	}
	
	loadItemData(pobObject.itemGroups);
	loadNodeData(pobObject.treeGroups);
	loadGemData(pobObject.gemGroups);
	loadHoradricHelper();
}

/* CLEAN UP AND LOAD */

function clearProfile(divList) {
	if(divList == null) divList = [DIV_NOTES, DIV_SETUP, DIV_GEMCONFIGURATION, DIV_ROADMAP, DIV_ASCENDANCY, DIV_TREE, DIV_MASTERY, DIV_PREVIEW, DIV_KEYSTONE, DIV_INVENTORYSET,
		DIV_MAINHAND, DIV_OFFHAND, DIV_CHEST, DIV_HELM, DIV_GLOVES, DIV_BOOTS, DIV_AMULET, DIV_RING1, DIV_RING2, DIV_BELT, DIV_FLASK1, DIV_FLASK2, DIV_FLASK3, DIV_FLASK4, DIV_FLASK5];
	for (let divId of divList) {
		let divElement = document.getElementById(divId);
		while(divElement.firstChild) {
			divElement.removeChild(divElement.firstChild);
		}
	}
}

function displayBuild(build) {
	var pobObject = pobCodeToObject(build);
	if(pobObject !== undefined) {
		// If valid code, clear before load
		displayMenu('home');
		clearProfile();
		hhData = [];
		// Load new
		var pobData = loadPobData(pobObject);
		fillProfile(pobData);
	} else {
		//TODO display error message
	}
}
