// Create the all the data for Horadric Helper
var hhData = Array();
function displayMode(elem, type) {
	if(type == "show") {
		elem.setAttribute("as-showcase","");
		elem.setAttribute("icon-inside","");
	} else {
		elem.setAttribute("as-icon","");
		elem.setAttribute("icon-size","md");
	}
}

function conditionToFormat(sentence, cn, statValue) {
	if(sentence.format[cn] !== undefined && sentence.format[cn].contains("ignore")) {
		return "ignore";
	} else if(sentence.format[cn] !== undefined) {
		return sentence.string.replaceAll("\{0\}", sentence.format[cn].replaceAll("#", statValue));
	} else {
		console.log("no format?", sentence,cn);
		return false;
	}
}

function translateStats(gemStat) {
	var skillModifiers = [];
	// TODO regroup value of shared mod id
	//console.log("readable stats:",gemStat);
	gemStat.forEach( (stats, index) => {
		// Assure that translation in specific language exists
		if(stats.translate.English !== undefined) {
			// from each sentence available, only one can be displayed? XXX replace find with filter later to test
			let translation = stats.translate.English.filter( sentence => {
				// check if all condition apply
				return sentence.condition.every( condition => {
					if(condition.hasOwnProperty("min")) {
						if(condition.hasOwnProperty("max")) {
							return condition.min <= stats.value && condition.max >= stats.value;
						} else return condition.min <= stats.value;
					} else if(condition.hasOwnProperty("max")) {
						return condition.max >= stats.value;
					} else if(Object.keys(condition).length === 0) {
						// free match
						return true;
					} else {
						console.log("other condition,",condition,"for",sentence);
						return true;
					}
				})
			})
			// TODO traitement après condition trouvé
			if(translation !== undefined) {
				var baseString, ignore = false;
				// TODO what is index_handlers?
				//conditionToFormat(translation[0], 0, stats.value);
				translation.forEach( sentence => {
					if(sentence.format !== undefined && sentence.format.indexOf("ignore") > 0) {
						ignore = true;
					} else {
						baseString = sentence.string.replaceAll("\{0\}", sentence.format[0].replaceAll("#", stats.value));
					}
				});
				if(baseString !== undefined && !ignore) skillModifiers.push(baseString);
			}
		} else {
			// Mods that are not meant to be displayed?
			// console.log("not found ",statGroup," for ",stats," with file ", skillGem.stat_translation_file);
		}
	});
	//var indexInStat = statGroup.ids.findIndex(id => id == statsDescription[0].id);
	//console.log("find stat",skillModifiers);
	return skillModifiers;
}
// Add items HH applyConfig
function loadItemData(itemGroups) {
  // Items
	itemGroups.items.forEach( k => {
		var config = [];
		config.reference = k.itemId;
		// Remove PoB lines with ModRange and empty lines
		config.data = k.innerText.split("\n").filter(line => line.trim().length > 0 && line.indexOf("ModRange") < 0 && line != "Sockets:").join("\n");
		hhData.push(config);
		//console.log("loaded items");
	});
}
// Add gems HH config
function loadGemData(gemGroups) {
	gemGroups.forEach( (gemGroup, k) => {
		gemGroup.groups.forEach( (s, i) => {
			s.gems.forEach( (g, j) => {
				var config = [], gemData = [], gemSection = [];
				var skillGem = allGem[g.skill];
				var skillModifiers = [];
				if(skillGem.active_skill !== undefined) {
					// Active skill gem
					gemSection.gemDescription = [].concat(skillGem.active_skill.description);
				} else {
					// Support skill gem
					// XXX no gem description for support ?
				}
				var gemStat = [];
				// Parse stats and per level stats to keep only stats that have description with the value of base or appropriate level
				skillGem.static.stats.forEach( (stats, index) => {
					// if stats not displayed from static, it should come from per_level
					if(stats === null) stats = skillGem.per_level[1].stats[index];
					var statTranslation;
					if(skillGem.stat_translation_file !== undefined) statTranslation = mapStatGem[skillGem.stat_translation_file].find(a => a.ids.find(id => id == stats.id));
					else statTranslation = allStats.find(a => a.ids.find(id => id == stats.id));
					// FIXME fix 2-stats modifiers like add X to Y
					if(statTranslation !== undefined) {
						var keyValueStat = {};
						keyValueStat.id = stats.id;
						if(stats.hasOwnProperty("value")) keyValueStat.value = stats.value;
						else if(skillGem.per_level[g.level] && skillGem.per_level[g.level].stats[index] && skillGem.per_level[g.level].stats[index].value)
						keyValueStat.value = skillGem.per_level[g.level].stats[index].value;
						keyValueStat.translate = statTranslation;
						gemStat.push(keyValueStat);
					} else {
						//console.log("translation not found", stats, g[1].getAttribute("skillId"));
					}
				});
				// Include stat from appropriate quality and normalized it with quality value (base on 2000)
				let qualityStat = skillGem.static.quality_stats[qualityIdMap[g.qualityId]];
				if(qualityStat !== undefined) {
					let qualityTranslation = allStats.find(a => a.ids.find(id => id == qualityStat.id));
					if(g.quality !== undefined && g.quality > 0 && qualityTranslation !== undefined) {
						var keyValueStat = {};
						keyValueStat.id = qualityStat.id;
						keyValueStat.value = qualityStat.value / 2000 * g.quality;
						keyValueStat.translate = qualityTranslation;
						gemStat.push(keyValueStat);
					}
					skillModifiers.push(translateStats(gemStat));
				}
				//console.log(skillModifiers);

				if(skillModifiers.length > 0) gemSection.modifiers = skillModifiers.flat();
				gemData.rarity = "Gem";
				if(skillGem.base_item !== null) {
					gemData.name = skillGem.base_item.display_name;
					gemSection.properties = [].concat(skillGem.tags.filter(t => TAG_FILTER.indexOf(t) < 0).join(", "));
				} else {
					gemData.name = skillGem.active_skill.display_name;
					gemSection.properties = [].concat(skillGem.active_skill.types.filter(t => TAG_FILTER.indexOf(t) < 0).join(", "));
				}
				gemData.sections = gemSection;
				config.reference = "gem_" + k + "_" + i + "_" + j;
				config.data = gemData;
				config.iconUrl = "";
				hhData.push(config);
				//console.log("loaded gem", config);
			})
		});
	})
}
// Add passive node HH config
function loadNodeData(treeGroups) {
	for (let treeGroup of treeGroups) {
		treeGroup.nodes.split(",").forEach( (k, i) => {
			let node = treeNodes[k];
			if(node !== undefined && (node.isNotable || node.isKeystone)) {
				var nodeData = [], nodeSection = [], config = [];
				var stats = node.stats;
				if(node.reminderText) stats.concat(node.reminderText);
				nodeSection.description = [].concat(stats);
				nodeData.sections = nodeSection;
				nodeData.name = node.name;
				if(node.ascendancyName !== undefined) {
					nodeData.type = "ascendancy notable"
				} else if(node.isKeystone !== undefined) {
					nodeData.type = "keystone"
				} else {
					nodeData.type = "notable"
				}
				config.reference = "node_"+k;
				config.data = nodeData;
				config.iconUrl = "";
				hhData.push(config);
				//console.log("loaded passive", config);
			}
		});
		var masteryGroup = new Map();
		treeGroup.masteryEffects.split("},{").forEach( (k, i) => {
			let master = k.split(",")[0].replaceAll("\{","").replaceAll("\}","");
			let slave = k.split(",")[1].replaceAll("\{","").replaceAll("\}","");
			let mastery = treeNodes[master].name;
			let effect = treeNodes[master].masteryEffects.find( e => e.effect == slave);
			if(effect !== undefined) {
				if(masteryGroup[mastery] !== undefined) {
					masteryGroup[mastery] = masteryGroup[mastery].concat(effect.stats);
				}
				else masteryGroup[mastery] = [].concat(effect.stats);
				if(effect.reminderText !== undefined) masteryGroup[mastery] = masteryGroup[mastery].concat(effect.reminderText);
			}
		});
		Object.entries(masteryGroup).forEach( k => {
			var nodeData = [], nodeSection = [], config = [];
			nodeSection.description = [].concat(k[1]);
			nodeData.sections = nodeSection;
			nodeData.name = k[0];
			nodeData.type = "mastery"
			config.reference = "mastery_"+k[0];
			config.data = nodeData;
			config.iconUrl = "";
			hhData.push(config);
			//console.log("loaded mastery", config);
		});
	}
}
