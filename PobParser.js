// Read pob code into object
function pobCodeToObject(pobCode) {
	var compressData = atob(pobCode.replaceAll("_","/").replaceAll("-","+"));
	var gzipedDataArray = Uint8Array.from(compressData, c => c.charCodeAt(0));
	const ungzipedData = pako.ungzip(gzipedDataArray);
	var xml = new TextDecoder().decode(ungzipedData);

	var parser = new DOMParser();
	return parser.parseFromString(xml,"text/xml");
}

// Read pob object and simplify it
function loadPobData(dataPoB) {
	// console.log(dataPoB);
	// Map of each gems
	var gemGroups = [];
	// Filter skill from tree (ascendancy)
	if (dataPoB.getElementsByTagName("Gem") !== undefined) {
		var skillPart = dataPoB.getElementsByTagName("Skills")[0];
		//var defaultSkillSet = skillPart.getAttribute("activeSkillSet");
		for (let skillSetup of skillPart.children) {
			var setup = {};
			setup.title = skillSetup.getAttribute("title");
			setup.groups = [];
			for (let skillGroup of skillSetup.children) {
				var group = {};
				group.label = skillGroup.getAttribute("label");
				group.slot = skillGroup.getAttribute("slot");
				group.gems = [];
				for (let socketedGem of skillGroup.children) {
					var gem = {};
					gem.skill = socketedGem.getAttribute("skillId");
					gem.level = socketedGem.getAttribute("level");
					gem.qualityId = socketedGem.getAttribute("qualityId");
					gem.quality = socketedGem.getAttribute("quality");
					group.gems.push(gem);
				}
				setup.groups.push(group);
			}
			gemGroups.push(setup);
		}
	}
	// Map of each tree nodes
	var treeGroups = [];
	if(dataPoB.getElementsByTagName("Spec") !== undefined) {
		var treePart = dataPoB.getElementsByTagName("Tree")[0];
		//var defaultTree = treePart.getAttribute("activeSpec");
		for (let skillTree of treePart.children) {
			var tree = {};
			tree.title = skillTree.getAttribute("title");
			tree.startClass = skillTree.getAttribute("classId");
			tree.ascendClassId = skillTree.getAttribute("ascendClassId");
			tree.masteryEffects = skillTree.getAttribute("masteryEffects");
			tree.nodes = skillTree.getAttribute("nodes");
			treeGroups.push(tree);
		}
	}
	// Map of each items in the pob where jewel association to slot are under <Socket>, and other in <Slot>
	var itemGroups = {};
	itemGroups.items = [];
	itemGroups.slots = [];
	itemGroups.sockets = [];
	itemGroups.itemSet = [];
	if(dataPoB.getElementsByTagName("Slot") !== undefined) {
		var itemPart = dataPoB.getElementsByTagName("Items")[0];
		for (let itemOrSet of itemPart.children) {
			if(itemOrSet.tagName == "Item") {
				var item = {};
				item.itemId = itemOrSet.getAttribute("id");
				item.innerText = itemOrSet.innerHTML;
				itemGroups.items.push(item);
			} else {
				var itemSet = {};
				itemSet.id = itemOrSet.getAttribute("id");
				itemSet.title = itemOrSet.getAttribute("title");
				itemSet.configuration = [];
				for (let slot of itemOrSet.children) {
					var slotItem = {};
					slotItem.name = slot.getAttribute("name");
					slotItem.itemId = slot.getAttribute("itemId");
					itemSet.configuration.push(slotItem);
				}
				itemGroups.itemSet.push(itemSet);
			}
		}
	}
	// Parse notes to extract references
	var pobnotes = dataPoB.getElementsByTagName("Notes")[0].innerHTML;
	var extract = pobnotes.match(/#_([^#]*)#_/g);
	extract.forEach( match => pobnotes = pobnotes.replaceAll(match, ""));
	var references = {};
	extract.map( match => references[match.replaceAll(/#_([\w]*).*/g,"$1")] = match.replaceAll(/#_([\w]* )?/g,""));
	var notes = {"header": pobnotes, "refs": references};
	// TODO add socketed jewel to specific tree?
	var pobObject = {"gemGroups": gemGroups, "treeGroups": treeGroups, "itemGroups": itemGroups, "notes": notes};
	return pobObject;
}