
var elligibleGem = Object.entries(allGem)
  // Filter almost all unreleased gem (exclude DNT and UNUSED in name)
  .filter(g => g[1].base_item.release_state == "released")
  // Filter all support gem 
  .filter(g => !g[1].is_support)
  // Filter gem from Royale mode
  .filter(g => g[1].base_item).filter(g => g[0].indexOf("Royale") < 0)
  // Filter almost all gem from item
  .filter(g => g[1].static.stats && g[1].static.stats.length)
  // Filter gem with no base damage (including General's warcry)
  .filter(g => !g[1].static.stats.filter(s => s && s.id).find(s => s.id == "base_deal_no_damage"))
  // Filter vaal gem, guard gem, warcry gem, and herald gem
  .filter(g => !g[1].tags.includes("vaal") && !g[1].tags.includes("guard") && !g[1].tags.includes("herald") && !g[1].tags.includes("warcry"))
  // Filter trigger gem because most of them are counterattack and skills that trigger on equipping unique items
  .filter(g => !g[1].tags.includes("trigger"))
  // Filter most of the buff but also some other like discharge, flicker strike, cold snap, etc.
  .filter(g => !g[1].static.cooldown > 0)
