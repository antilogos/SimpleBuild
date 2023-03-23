// Load all skill gem from repoe file
var allGem, loadGem = false, mapStatGem = new Map();
fetch("https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/data/gems.json").then(response => response.json()).then(parsed => {
	allGem = parsed;
	loadGem = true;
}).then( data => {
		// ALL THIS SEEMS IRELEVANT AS ALL STATS ARE IN STAT_TRANSLATIONS AND NOT INTO STAT_TRANSLATION_FILE
	for( let gem of Object.values(allGem)) {
		if(gem.base_item && gem.base_item.release_state && gem.base_item.release_state == "released") {
		// Load special stats for gem
		if(!mapStatGem[gem.stat_translation_file]) {
			mapStatGem[gem.stat_translation_file] = "loading...";
			fetch("https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/data/"+gem.stat_translation_file+".json").then(response => response.json()).then(subparsed => {
				mapStatGem[gem.stat_translation_file] = subparsed;
				});
			}
		}
	}}
).then(data => waitForLoadAsync());
var qualityIdMap = {Default: 0, Alternate1: 1, Alternate2: 2, Alternate3: 3};
var allStats, loadStats = false;
fetch("https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/data/stat_translations.json").then(response => response.json()).then(parsed => {
	allStats = parsed;
	loadStats = true;
}).then(data => waitForLoadAsync());