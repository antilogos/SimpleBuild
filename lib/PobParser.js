// Read pob code into object
function pobCodeToObject(pobCode) {
	var compressData = atob(pobCode.replaceAll("_","/").replaceAll("-","+"));
	var gzipedDataArray = Uint8Array.from(compressData, c => c.charCodeAt(0));
	const ungzipedData = pako.ungzip(gzipedDataArray);
	var xml = new TextDecoder().decode(ungzipedData);

	var parser = new DOMParser();
	return parser.parseFromString(xml,"text/xml");
}

// Complement buildlist with their pobdata
function loadOnceBuildListPob() {
	for (let build of listBuild.filter(b => b.pob)) {
		build.parsed = loadPobData(pobCodeToObject(build.pob));
		if(urlParams.get("build") && build.title == urlParams.get("build")) {
			currPob = build.parsed;
		}
	}
}

// Read pob object and simplify it
function loadPobData(dataPoB) {
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
					gem.enabled = socketedGem.getAttribute("enabled");
					group.gems.push(gem);
				}
				setup.groups.push(group);
			}
			gemGroups.push(setup);
		}
	}
	// Map of each tree nodes and socket reference
	var treeGroups = [];
	if(dataPoB.getElementsByTagName("Spec") !== undefined) {
		var treePart = dataPoB.getElementsByTagName("Tree")[0];
		for (let skillTree of treePart.children) {
			var tree = {};
			tree.title = skillTree.getAttribute("title");
			tree.startClass = skillTree.getAttribute("classId");
			tree.ascendClassId = skillTree.getAttribute("ascendClassId");
			tree.masteryEffects = skillTree.getAttribute("masteryEffects");
			tree.nodes = skillTree.getAttribute("nodes").split(",");
			tree.url = skillTree.getAttribute("");
			if(skillTree.getElementsByTagName("Socket") !== undefined) {
				tree.socket = {};
				for (let socket of skillTree.getElementsByTagName("Sockets")[0].children) {
					tree.socket[socket.getAttribute("nodeId")] = socket.getAttribute("itemId");
				}
			}
			treeGroups.push(tree);
		}
	}
	// Map of each items in the pob, even unused, and save item set association
	var itemGroups = {};
	itemGroups.items = [];	
	itemGroups.itemSet = [];
	// Add all items and item set
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
					if(slotItem.itemId != 0 && slotItem.itemId != null) itemSet.configuration.push(slotItem);
				}
				itemGroups.itemSet.push(itemSet);
			}
		}
	}
	// Parse notes to extract references
	var pobnotes = dataPoB.getElementsByTagName("Notes")[0].innerHTML;
	var extract = pobnotes.match(/#_([^#]*)#_/g);
	if(extract) extract.forEach( match => pobnotes = pobnotes.replaceAll(match, ""));
	var references = {};
	if(extract) extract.map( match => references[match.replaceAll(/#_([\w]*).*/g,"$1")] = match.replaceAll(/#_([\w]* )?/g,""));
	var notes = {"header": pobnotes, "refs": references};
	var pobObject = {"gemGroups": gemGroups, "treeGroups": treeGroups, "itemGroups": itemGroups, "notes": notes};
	return pobObject;
}