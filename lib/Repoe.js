/* UTILITY */

var qualityIdMap = {Default: 0, Alternate1: 1, Alternate2: 2, Alternate3: 3};
var allGem = {}, loadGem = false, loadGemTranslate = false, mapStatGem = new Map();
var allStats, loadStats = false;

/* Extract */

// Load all skill gem from repoe file
function extractRePoEFiles() {
	fetch("https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/data/gems.json").then(response => response.json()).then(parsed => {
		/*
			Object.entries(parsed).forEach( gem => {
			// Cull non wanted field
			allGem[gem[0]] = {};
			if(gem[1].base_item && gem[1].base_item.display_name) allGem[gem[0]].base_item = {"display_name": gem[1].base_item.display_name};
			if(gem[1].active_skill) {
				allGem[gem[0]].active_skill = {};
				if(gem[1].active_skill.display_name) allGem[gem[0]].active_skill.display_name = gem[1].active_skill.display_name;
				if(gem[1].active_skill.types) allGem[gem[0]].active_skill.types = gem[1].active_skill.types;
				if(gem[1].active_skill.description) allGem[gem[0]].active_skill.description = gem[1].active_skill.description;
			}
			if(gem[1].static && gem[1].static.stats) allGem[gem[0]].static = {"stats": gem[1].static.stats};
			if(gem[1].per_level) {
				allGem[gem[0]].per_level = {};
				if(gem[1].per_level.required_level) allGem[gem[0]].per_level.required_level = gem[1].per_level.required_level;
				if(gem[1].per_level.stats) allGem[gem[0]].per_level.stats = gem[1].per_level.stats;
			} 
			if(gem[1].tags) allGem[gem[0]].tags = gem[1].tags;
		});
		*/
		allGem = parsed;
		loadGem = true;
	}).then( data => {
			// ALL THIS SEEMS IRELEVANT AS ALL STATS ARE IN STAT_TRANSLATIONS AND NOT INTO STAT_TRANSLATION_FILE
		for( let gem of Object.values(allGem)) {
			if(gem.base_item && gem.base_item.release_state && gem.base_item.release_state == "released") {
				// Load special stats for gem
				if(!mapStatGem[gem.stat_translation_file]) {
					mapStatGem[gem.stat_translation_file] = "loading...";
					fetch("https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/data/"+gem.stat_translation_file+".json")
					.then(response => response.json())
					.then(subparsed => {
						mapStatGem[gem.stat_translation_file] = subparsed;
						})
					.then(data => {
						if(Object.values(mapStatGem).filter(s => s == "loading...").length == 0) {
							loadGemTranslate = true;
							waitForLoadAsync();
						}
					})
				}
			}
		}}
	).then(data => waitForLoadAsync());
	fetch("https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/data/stat_translations.json").then(response => response.json()).then(parsed => {
		allStats = parsed;
		loadStats = true;
	}).then(data => {
		// Save in local storage and retry boot
		var localSave = {};
		localSave.lastCheck = Date.now();
		localSave.parsedGems = allGem;
		localSave.parsedStats = allStats;
		//localStorage.setItem("RePoE",JSON.stringify(localSave, null, 0));
		waitForLoadAsync();
	});
}

/* LOAD */

if(localStorage.getItem("RePoE")) {
	// Check if file uptodate
	let loadRePoE = JSON.parse(localStorage.getItem("RePoE"));
	if(loadRePoE && loadRePoE.lastCheck && loadRePoE.allGem && Date.now() < (loadRePoE.lastCheck + 28 * 24 * 3600 * 1000)) {
		// Load from local storage
		allGem = loadRePoE.parsedGems;
		allStats = loadRePoE.parsedStats;
		loadGem = true;
		loadStats = true;
		loadGemTranslate = true;
		waitForLoadAsync();
		// Else load from fetching github
	} else {
		extractRePoEFiles();
	}
} else {
	extractRePoEFiles();
}

