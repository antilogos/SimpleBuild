// Create the all the data for Horadric Helper
var hhData = Array();
// Tag that should not be displayed
const GEM_TAG_FILTER = ["active_skill", "dexterity", "intelligence", "strength"];
const baseImgUrl = "https://poe.ninja/cdn/"

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

function translateStats(gemStat, gemTranslate) {
	var skillModifiers = [];
	//console.log("readable stats:",gemStat);
	Object.entries(gemTranslate).forEach( keyValue => {
		// Assure that translation in specific language exists
		if(keyValue[1].English !== undefined && gemStat[keyValue[0]] !== undefined) {
			let valueByStat = [];
			keyValue[1].ids.forEach( idStat => {
				let value = 0;
				// Merge same stat id with multiple value
				gemStat[keyValue[0]].filter(s => s.id == idStat).forEach( statValue => {
					value = value + statValue.value;
				});
				valueByStat.push(value);
			});
			// from each sentence available, only one can be displayed
			let translation = keyValue[1].English.filter( sentence => {
				// check if all condition apply
				return sentence.condition.every( condition => {
					if(condition.hasOwnProperty("min")) {
						if(condition.hasOwnProperty("max")) {
							return condition.min <= valueByStat[0] && condition.max >= valueByStat[0];
						} else return condition.min <= valueByStat[0];
					} else if(condition.hasOwnProperty("max")) {
						return condition.max >= valueByStat[0];
					} else if(Object.keys(condition).length === 0) {
						// free match
						return true;
					} else {
						console.log("other condition,",condition,"for",sentence);
						return true;
					}
				})
			})
			if(translation !== undefined) {
				var baseString, ignore = false;
				// TODO what is index_handlers?
				translation.forEach( sentence => {
					if(sentence.format !== undefined && sentence.format.indexOf("ignore") > 0) {
						ignore = true;
					} else {
						baseString = sentence.string;
						// Replace all value per index
						valueByStat.forEach( (stats, index) => {
							baseString = baseString.replaceAll("\{"+index+"\}", sentence.format[index].replaceAll("#", stats));
						});
					}
				});
				if(baseString !== undefined && !ignore) skillModifiers.push(baseString);
			}
		} else {
			// Mods that are not meant to be displayed?
			// console.log("not found ",statGroup," for ",stats," with file ", skillGem.stat_translation_file);
		}
	});
	// console.log("find stat",skillModifiers);
	return skillModifiers;
}
// Add items HH applyConfig
function loadItemData(itemGroups) {
  // Items
	itemGroups.items.forEach( k => {
		var config = [];
		config.reference = "item_"+k.itemId;
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
				var gemStat = {}, gemTranslate = {};
				// Parse stats and per level stats to keep only stats that have description with the value of base or appropriate level
				skillGem.static.stats.forEach( (stats, index) => {
					// if stats not displayed from static, it should come from per_level
					if(stats === null) stats = skillGem.per_level[1].stats[index];
					var statTranslation;
					var translationFile = skillGem.stat_translation_file;
					if(translationFile !== undefined && mapStatGem[translationFile] !== undefined) {
						statTranslation = mapStatGem[translationFile].find(a => a.ids.find(id => id == stats.id));
					}
					else statTranslation = allStats.find(a => a.ids.find(id => id == stats.id));
					// FIXME fix 2-stats modifiers like add X to Y
					if(statTranslation !== undefined) {
						var keyValueStat = {};
						keyValueStat.id = stats.id;
						let tranlationKey = statTranslation.ids.join(",");
						if(stats.hasOwnProperty("value")) keyValueStat.value = stats.value;
						else if(skillGem.per_level[g.level] && skillGem.per_level[g.level].stats[index] && skillGem.per_level[g.level].stats[index].value)
						keyValueStat.value = skillGem.per_level[g.level].stats[index].value;
						if(gemStat.hasOwnProperty(tranlationKey)) {
							gemStat[tranlationKey].push(keyValueStat);
						} else {
							gemStat[tranlationKey] = [];
							gemStat[tranlationKey].push(keyValueStat);
							gemTranslate[tranlationKey] = statTranslation;
						}
					} else {
						//console.log("translation not found", stats, g[1].getAttribute("skillId"));
					}
				});
				// Include stat from appropriate quality and normalized it with quality value (base on 2000)
				let qualityStat = skillGem.static.quality_stats[qualityIdMap[g.qualityId]];
				if(qualityStat !== undefined && qualityStat.value > 0) {
					let qualityTranslation = allStats.find(a => a.ids.find(id => id == qualityStat.id));
					if(g.quality !== undefined && g.quality > 0 && qualityTranslation !== undefined) {
						var keyValueStat = {};
						keyValueStat.id = qualityStat.id;
						let tranlationKey = qualityTranslation.ids.join(",");
						keyValueStat.value = qualityStat.value / 1000 * g.quality;
						if(gemStat.hasOwnProperty(qualityTranslation.ids.join(","))) {
							gemStat[tranlationKey].push(keyValueStat);
						} else {
							gemStat[tranlationKey] = [];
							gemStat[tranlationKey].push(keyValueStat);
							gemTranslate[tranlationKey] = qualityTranslation;
						}
					}
				}
				// Translate gemStats into description
				//console.log(gemStat);
				skillModifiers.push(translateStats(gemStat, gemTranslate));
				//console.log(skillModifiers);

				if(skillModifiers.length > 0) gemSection.modifiers = skillModifiers.flat();
				gemData.rarity = "Gem";
				if(skillGem.base_item !== null) {
					gemData.name = skillGem.base_item.display_name;
					gemSection.properties = [].concat(skillGem.tags.filter(t => GEM_TAG_FILTER.indexOf(t) < 0).join(", "));
				} else {
					gemData.name = skillGem.active_skill.display_name;
					gemSection.properties = [].concat(skillGem.active_skill.types.filter(t => GEM_TAG_FILTER.indexOf(t) < 0).join(", "));
				}
				gemData.sections = gemSection;
				config.reference = "gem_" + k + "_" + i + "_" + j;
				config.data = gemData;
				config.iconUrl = "";
				hhData.push(config);
				// Second gem description for roadmap
				var config2 = [];
				config2.reference = "gem_" + gemData.name.replaceAll(" ", "_");
				config2.data = gemData;
				config2.iconUrl = "";
				hhData.push(config2);
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
			if(node !== undefined && (node.isNotable || node.isKeystone || node.isMultipleChoiceOption)) {
				var nodeData = [], nodeSection = [], config = [];
				var stats = node.stats;
				if(node.reminderText) stats.concat(node.reminderText);
				nodeSection.description = [].concat(stats);
				nodeData.sections = nodeSection;
				nodeData.name = node.name;
				if(node.ascendancyName !== undefined && !node.isMultipleChoice) {
					nodeData.type = "ascendancy notable"
				} else if(node.isKeystone !== undefined) {
					nodeData.type = "keystone"
				} else {
					nodeData.type = "notable"
				}
				config.reference = "node_"+k;
				config.data = nodeData;
				config.iconUrl = baseImgUrl + node.icon;
				hhData.push(config);
			}
		});
		var masteryGroup = new Map();
		treeGroup.masteryEffects.split("},{").filter(s => s.length > 0).forEach( (k, i) => {
			let master = k.split(",")[0].replaceAll("\{","").replaceAll("\}","");
			let slave = k.split(",")[1].replaceAll("\{","").replaceAll("\}","");
			let mastery = treeNodes[master].name;
			let effect = treeNodes[master].masteryEffects.find( e => e.effect == slave);
			if(effect !== undefined) {
				if(masteryGroup[mastery] !== undefined) {
					masteryGroup[mastery] = masteryGroup[mastery].concat(" • "+effect.stats);
				}
				else masteryGroup[mastery] = [].concat(" • "+effect.stats);
				if(effect.reminderText !== undefined) masteryGroup[mastery] = masteryGroup[mastery].concat("\n"+effect.reminderText);
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

// Load poe elements in dom
function loadHoradricHelper() {
	window.HoradricHelper.PathOfExile && window.HoradricHelper.PathOfExile.applyConfig(hhData);
}
