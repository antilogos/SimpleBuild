
/* Utility */

// Create the all the data for Horadric Helper
var hhData = Array();
// Tag that should be displayed
const GEM_TAG_FILTER = {"en": ["Attack", "Melee", "Strike", "Spell", "Channelling", "Physical", "Fire", "Lightning", "Cold", "Chaos", "Bow", "Projectile", "Chaining", "Minion", "Aura", "Hex", "Support", "Exceptional", "AoE", "Critical", "Trigger", "Duration", "Slam", "Warcry", "Arcane", "Brand", "Orb", "Nova", "Prismatic", "Mine", "Trap", "Totem", "Golem", "Herald", "Stance", "Guard", "Movement", "Travel", "Blink", "Curse", "Mark", "Vaal", "Link"],
"fr": ["Attaque", "Mêlée", "Frappe", "Sort", "Canalisation", "Physique", "Feu", "Foudre", "Froid", "Chaos", "Arc", "Projectile", "Ricochet", "Créature", "Aura", "Calamité", "Soutien", "Exceptionnel", "Zone", "Critique", "Déclenchement", "Durée"]};
// TODO replace with skill-3.png
const baseImgUrl = "https://poe.ninja/cdn/"

function displayMode(elem, type) {
	if(type == "show") {
		elem.setAttribute("as-showcase","");
		elem.setAttribute("icon-inside","");
	} else {
		elem.setAttribute("as-icon","");
		elem.setAttribute("icon-size","auto");
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

// treat stat with their index handler
function handleStats(stat, handler) {
	switch (handler) {		case  "canonical_stat": return stat; break;
		case  "display_indexable_support": return stat; break;
		case  "affliction_reward_type": return stat; break;
		case  "metamorphosis_reward_description": return stat; break;
		case  "passive_hash": return stat; break;
		case  "tree_expansion_jewel_passive": return stat; break;
		case  "mod_value_to_item_class": return stat; break;
		case  "multiplicative_damage_modifier": return stat; break;		case  "per_minute_to_per_second": return stat*60; break;
		case  "per_minute_to_per_second_0dp": return stat*60; break;
		case  "per_minute_to_per_second_1dp": return stat*60; break;
		case  "per_minute_to_per_second_2dp": return stat*60; break;		case  "per_minute_to_per_second_2dp_if_required": return stat*60; break;
		case  "milliseconds_to_seconds": return stat/1000; break;
		case  "milliseconds_to_seconds_0dp": return stat/1000; break;
		case  "milliseconds_to_seconds_1dp": return stat/1000; break;
		case  "milliseconds_to_seconds_2dp": return stat/1000; break;
		case  "milliseconds_to_seconds_2dp_if_required": return stat/1000; break;		case  "deciseconds_to_seconds": return stat/10; break;		case  "old_leech_percent": return stat/100; break;		case  "old_leech_permyriad": return stat/36000; break;
		case  "30%_of_value": return stat*0.3; break;
		case  "60%_of_value": return stat*0.6; break;
		case  "negate": return stat*-1; break;
		case  "negate_and_double": return stat*-2; break;
		case  "double": return stat*2; break;
		case  "multiply_by_four": return stat*4; break;
		case  "times_one_point_five": return stat*1.5; break;
		case  "times_twenty": return stat*20; break;
		case  "divide_by_two_0dp": return stat/2; break;
		case  "divide_by_three": return stat/3; break;
		case  "divide_by_four": return stat/4; break;		case  "divide_by_five": return stat/5; break;
		case  "divide_by_six": return stat/6; break;
		case  "divide_by_ten_0dp": return stat/10; break;
		case  "divide_by_ten_1dp": return stat/10; break;
		case  "divide_by_ten_1dp_if_required": return stat/10; break;		case  "divide_by_twelve": return stat/12; break;
		case  "divide_by_twenty_then_double_0dp": return stat/20*2; break;		case  "divide_by_fifty": return stat/50; break;
		case  "divide_by_fifteen_0dp": return stat/15; break;		case  "divide_by_one_hundred": return stat/100; break;		case  "divide_by_one_hundred_2dp": return stat/100; break;
		case  "divide_by_one_hundred_2dp_if_required": return stat/100; break;
		case  "divide_by_one_hundred_and_negate": return stat/100*-1; break;		case  "divide_by_one_thousand": return stat/1000; break;
		default: return stat;
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
				translation.forEach( sentence => {
					if(sentence.format !== undefined && sentence.format.indexOf("ignore") > 0) {
						ignore = true;
					} else {
						baseString = sentence.string;
						// Replace all value per index
						valueByStat.forEach( (stats, index) => {
							if(sentence.index_handlers && sentence.index_handlers[index][0]) {
								stats = handleStats(stats, sentence.index_handlers[index][0]);
							}
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

function getItemIconFromPob(innerText) {
	var extract;
	if(innerText) {
		var rarity = innerText.split("\n").find(i => i.startsWith("\t\t\tRarity: "));
		if(rarity) {
			if(rarity.indexOf("NORMAL") >= 0) {
				extract = innerText.split("\n")[innerText.indexOf(rarity)+1];
			} else if(rarity.indexOf("MAGIC") >= 0) {
				extract = innerText.split("\n")[innerText.indexOf(rarity)+1];
				extract = Object.keys(itemIcon).find(base => extract.indexOf(base) >= 0);
			} else if(rarity.indexOf("RARE") >= 0) {
				extract = innerText.split("\n")[innerText.indexOf(rarity)+2];
			} else if(rarity.indexOf("UNIQUE") >= 0) {
				extract = innerText.split("\n")[innerText.indexOf(rarity)+1];
			} else {
				//console.log("no rarity found for item", innerText);
			}
		}
	}
	if(extract && itemIcon[extract] && rarity.indexOf("UNIQUE") < 0) return itemIcon[extract].icon;
	else if(extract && uniqueItemIcon[extract]) return uniqueItemIcon[extract].icon;
	else return "";
}

/* Items */

// Add items to HH config
function loadItemData(itemGroups) {
	itemGroups.items.forEach( k => {
		var config = [];
		config.reference = "item_"+k.itemId;
		// Remove PoB lines with ModRange and empty lines
		config.data = k.innerText.split("\n").filter(line => line.trim().length > 0 && line.indexOf("ModRange") < 0 && line != "Sockets:").join("\n");
		// Find base item name to find image
		config.iconUrl = getItemIconFromPob(k.innerText);
		hhData.push(config);
	});
}

/* Gems */

// Add gems to HH config
function loadGemData(gemGroups) {
	gemGroups.forEach( (gemGroup, k) => {
		gemGroup.groups.forEach( (s, i) => {
			s.gems.forEach( (g, j) => {
				var config = [], config2 = [], gemData = [], gemSection = [];
				var skillGem = allGem[g.skill];
				// FIXME retrograde vaal gem into normal gem if not exists in files
				if(!skillGem && g.skill.indexOf("Vaal") >= 0) skillGem = allGem[g.skill.replaceAll("Vaal", "")];
				if(skillGem) {
					// First section: Properties are Level, Quality and Tag
					var properties = [];
					properties.push(dynamicDico["gemdescription_level"][localStorage.getItem("lang")] + g.level);
					if(g.quality > 0) properties.push(dynamicDico["gemdescription_quality"][localStorage.getItem("lang")] + g.quality + "%");
					// Try to get the name of the gem and find the data in gemRewards for translation and icon
					var gemNameId;
					if(skillGem.base_item !== null) {
						gemNameId = skillGem.base_item.display_name;
						properties.push(skillGem.tags.filter(t => GEM_TAG_FILTER["en"].indexOf(t.charAt(0).toUpperCase() + t.slice(1)) >= 0).join(", "));
					} else {
						gemNameId = skillGem.active_skill.display_name;
						properties.push(skillGem.active_skill.types.filter(t => GEM_TAG_FILTER["en"].indexOf(t.charAt(0).toUpperCase() + t.slice(1)) >= 0).join(", "));
					}
					gemSection.properties = properties;
					// Skip all gems not found (skill not from gem, and vaal, altqual, awakened gems)
					if(skillGem) {
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
							if(statTranslation !== undefined) {
								var keyValueStat = {};
								keyValueStat.id = stats.id;
								let tranlationKey = statTranslation.ids.join(",");
								if(stats.hasOwnProperty("value")) {
									keyValueStat.value = stats.value;
								} else if(skillGem.per_level[g.level] && skillGem.per_level[g.level].stats[index] && skillGem.per_level[g.level].stats[index].value !== undefined) {
									keyValueStat.value = skillGem.per_level[g.level].stats[index].value;
								}
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
						skillModifiers.push(translateStats(gemStat, gemTranslate));

						if(skillModifiers.length > 0) gemSection.modifiers = skillModifiers.flat();
						gemData.rarity = "Gem";
						if(gemRewards[gemNameId]) {
							gemData.name = gemRewards[gemNameId].lang[localStorage.getItem("lang")];
							config.iconUrl = gemRewards[gemNameId].icon;
							config2.iconUrl = gemRewards[gemNameId].icon;
						} else {
							gemData.name = gemNameId;
							config.iconUrl = gemRewards["Portal"].icon;
							config2.iconUrl = gemRewards["Portal"].icon;
						}
						gemData.sections = gemSection;
						var gemRefId = gemNameId.replaceAll(" ", "_");
						// Alternate quality
						if(g.qualityId && g.qualityId != "Default") {
							gemData.name = gemData.name + " " + dynamicDico["quality_"+g.qualityId][localStorage.getItem("lang")];
							gemRefId = gemRefId + "_" + g.qualityId;
						}
						config.reference = "gem_" + k + "_" + i + "_" + j;
						config.data = gemData;
						hhData.push(config);
						// Second gem description for roadmap
						config2.reference = "gem_" + gemRefId;
						config2.data = gemData;
						hhData.push(config2);
					} else {
						// Skill not from gem (enchant, object, ascendancy, etc.)
						console.log("not from gem or not in translation", g.skill, skillGem);
					}
				} else {
					// Skill missing from RePoE
					console.log("not in skill list ", g.skill);
				}
			})
		});
	})
}
// Add passive node HH config
function loadNodeData(treeGroups) {
	for (let treeGroup of treeGroups) {
		// Only nodes that need reference (notable and keystone)
		treeGroup.nodes.forEach( (k, i) => {
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
				// FIXME coord of the icon, not usable with HoradricHelper for now
				let coord;
				if(node.isNotable) {
					coord = Object.values(passiveSkillTreeData.sprites.notableActive)[3].coords;
				} else if(node.isKeystone) {
					coord = Object.values(passiveSkillTreeData.sprites.keystoneActive)[3].coords;
				}
				config.iconUrl = baseImgUrl + node.icon;
				hhData.push(config);
			}
		});
		// Masteries
		if(treeGroup.masteryEffects) {
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
			});
		}
	}
}

// Load poe elements in dom
function loadHoradricHelper() {
	window.HoradricHelper.PathOfExile && window.HoradricHelper.PathOfExile.applyConfig(hhData);
}
