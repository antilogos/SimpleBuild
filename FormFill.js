
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

// Get items from pob (listed under slots) and create div for each of them
function fillGemProfile(gemGroup, index, references) {
	clearProfile([DIV_SETUP]);
	// Gem configuration reference
	var divGroup = document.createElement("div");
	divGroup.setAttribute("id", "gem_"+index);
	document.getElementById(DIV_SETUP).appendChild(divGroup);
	addReference(divGroup, references, true);
	// Add poe-item for each gem, each group in a single div
	gemGroup.groups.forEach( (k, i) => {
		// Gem group reference
		var div = document.createElement("div");
		div.setAttribute("id", "gem_"+index+"_"+i);
		div.setAttribute("class", "socketGroup");
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
			item.setAttribute("label-text",gemName);
			itemDiv.appendChild(item);
		});
		document.getElementById(DIV_SETUP).appendChild(div);
	});
	//TODO link to roadmap
}

function fillTreeProfile(treeGroup, references) {
	clearProfile([DIV_ASCENDANCY,DIV_KEYSTONE,DIV_MASTERY,DIV_PREVIEW]);
	// Add poe-passive for each ascendancy and keystone allocated
	treeGroup.nodes.split(",").forEach( (k, i) => {
		let node = treeNodes[k];
		if(node !== undefined && (node.ascendancyName || node.isKeystone)) {
			// Passif reference
			var nodeDiv = document.createElement("div");
			//nodeDiv.setAttribute("id", gemRef);
			//addReference(nodeDiv, references, false);
			//div.appendChild(nodeDiv);
			// Creation of the poe-item html element for HoradricHelper
			var item = document.createElement("poe-passive");
			item.setAttribute("reference", "node_"+k);
			item.setAttribute("label-text", node.name);
			// Place node in the right category
			if(node.ascendancyName !== undefined && !node.isMultipleChoice) {
				displayMode(item, "popup");
				document.getElementById(DIV_ASCENDANCY).appendChild(item);
			} else if(node.isKeystone) {
				displayMode(item, "popup");
				document.getElementById(DIV_KEYSTONE).appendChild(item);
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
		// Creation of the poe-item html element for HoradricHelper
		var item = document.createElement("poe-passive");
		item.setAttribute("reference", "mastery_"+k[0]);
		displayMode(item, "show");
		item.setAttribute("label-text", k[0]);
		document.getElementById(DIV_MASTERY).appendChild(item);
	});
	// Tree Preview
	var ascendClassId = "";
	if(treeGroup.ascendClassId > 0) ascendClassId = passiveSkillTreeData.classes[treeGroup.startClass].ascendancies[treeGroup.ascendClassId-1].id;
	buildSvgTree(DIV_PREVIEW, treeNodes, treeGroup.startClass, ascendClassId);
	buildPath(treeGroup, DIV_PREVIEW, treeNodes, passiveSkillTreeData);
}

// Parent fill for all
function fillProfile(pobObject) {
	console.log(pobObject);
	// Add div for each gems setup and a link to raodmap
	for (let group of pobObject.gemGroups) {
		let optionElement = document.createElement("button");
		if(group.title !== null) optionElement.innerHTML = group.title;
		else optionElement.innerHTML = "par défaut";
		optionElement.addEventListener('click', function (event) {
			fillGemProfile(group, pobObject.gemGroups.indexOf(group), pobObject.notes.refs);
		});
		document.getElementById(DIV_ROADMAP).appendChild(optionElement);
	}
	fillGemProfile(pobObject.gemGroups[0], 0, pobObject.notes.refs);
	// Add poe-item for each equipment, each group in a single div
	pobObject.itemGroups.items.forEach( k => {
		// Creation of the poe-item html element for HoradricHelper
		var item = document.createElement("poe-item");
		item.setAttribute("reference", k.itemId);
		displayMode(item, "show");
		// TODO item.setAttribute("label-text","maybe latter");
		var brotherDiv;
		// Depending on the name of the slot, we put this under different header
		if(k.itemId.startsWith("Jewel")) {
			document.getElementById(DIV_WEAPON).appendChild(item);
		} else if(k.itemId.startsWith("Flask")) {
			document.getElementById(DIV_WEAPON).appendChild(item);
		} else {
			document.getElementById(DIV_WEAPON).appendChild(item);
		}
	})
	
	// Add div for each tree setup and a link to the official tree
	for (let tree of pobObject.treeGroups) {
		let optionElement = document.createElement("button");
		optionElement.innerHTML = tree.title + " (" + tree.nodes.split(",").length + " points)";
		optionElement.addEventListener('click', function (event) {
			fillTreeProfile(tree);
		});
		document.getElementById(DIV_TREE).appendChild(optionElement);
	}
	fillTreeProfile(pobObject.treeGroups[0], pobObject.notes.references);

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
	if(divList == null) divList = [DIV_NOTES, DIV_SETUP, DIV_ROADMAP, DIV_ASCENDANCY, DIV_TREE, DIV_MASTERY, DIV_PREVIEW, DIV_KEYSTONE, DIV_WEAPON];
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
