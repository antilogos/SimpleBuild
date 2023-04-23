var filter_class = "", filter_tag = [], filter_serie = "";

// Fill search and display div with buttons
function fillSearch() {
	clearProfile([DIV_SEARCHTAG, DIV_SEARCHSERIE, DIV_SEARCHCLASS]);
	
	// Add Series
	let serieList = new Set(listBuild.flatMap(b => b.serie));
	let serieListDiv = [];
	for (let serie of serieList) {
		var item = document.createElement("button");
		item.classList = "tagButton"
		item.innerHTML = serie;
		serieListDiv.push(item);
		item.addEventListener('click', function (event) {
			filter_serie = "";
			for (let serieDiv of serieListDiv) {
				if(serieDiv === this && !serieDiv.classList.contains("isfilter")) {
					serieDiv.classList.add("isfilter");
					filter_serie = serie;
				} else {
					serieDiv.classList.remove("isfilter");
				}
			}
			fillResult();
		});
		document.getElementById(DIV_SEARCHSERIE).appendChild(item);
	}
	
	// Add class and ascendancies button, only one can be on
	let classList = passiveSkillTreeData.classes.map(n => n.name).concat(passiveSkillTreeData.classes.flatMap(n => n.ascendancies.map(a => a.name)));
	let classListDiv = [];
	for (let classTag of classList) {
		// Search back position from class index
		let classId = passiveSkillTreeData.classes.find(n => n.name == classTag);
		let iconPosition;
		if(classId === undefined) {
			iconPosition = ascendancyPosition[passiveSkillTreeData.classes.flatMap(n => n.ascendancies).find(n => n.name == classTag).id];
		} else {
			iconPosition = classPosition[passiveSkillTreeData.classes.indexOf(classId)];
		}
		var item = document.createElement("button");
		item.classList = "imageButton";
		// Parent div for display
		let iconElement = document.createElement("img");
		iconElement.src = "./img/inventory-sprite.png";
		iconElement.style.width = "394px"; // 788/2
		iconElement.style.height = "355px"; // 710/2
		iconElement.style.margin = "-"+(iconPosition.y/2+2)+"px 0 0 -" +(iconPosition.x/2)+ "px";
		let cropDiv = document.createElement("div");
		cropDiv.classList = "cropPreview";
		cropDiv.appendChild(iconElement);
		cropDiv.title = classTag;
		item.appendChild(cropDiv);
		classListDiv.push(item);
		item.addEventListener('click', function (event) {
			filter_class = "";
			for (let classDiv of classListDiv) {
				if(classDiv === this && !classDiv.classList.contains("isfilter")) {
					classDiv.classList.add("isfilter");
					filter_class = classTag;
				} else {
					classDiv.classList.remove("isfilter");
				}
			}
			fillResult();
		});
		document.getElementById(DIV_SEARCHCLASS).appendChild(item);
	}
	
	// Add tags
	let tagList = new Set(listBuild.flatMap(b => b.tag));
	for (let tag of tagList) {
		var item = document.createElement("button");
		item.classList = "tagButton"
		item.innerHTML = tag;
		item.addEventListener('click', function (event) {
			if(this.classList.contains("isfilter")) {
				filter_tag.splice(filter_tag.indexOf(this.innerHTML), 1);
				this.classList.remove("isfilter");
			} else {
				filter_tag.push(this.innerHTML);
				this.classList.add("isfilter");
			}
			fillResult();
		});
		document.getElementById(DIV_SEARCHTAG).appendChild(item);
	}
	
	fillResult();
}

// Fill result div with button that display their build
function fillResult() {
	clearProfile([DIV_RESULT]);
	// Filter list of build by class and tag
	let filterList = listBuild.filter(b => b.parsed);
	filterList = filterList.filter(b => filter_tag.length == 0 || b.tag.filter(t => filter_tag.indexOf(t) >= 0).length == filter_tag.length);
	filterList = filterList.filter(b => filter_serie == '' || b.serie == filter_serie);
	filterList = filterList.filter(b => 
		filter_class == '' || b.parsed.treeGroups.filter(treeGroup => 
			(treeGroup.ascendClassId > 0 && passiveSkillTreeData.classes[treeGroup.startClass].ascendancies[treeGroup.ascendClassId-1].name == filter_class) ||
			passiveSkillTreeData.classes[treeGroup.startClass].name == filter_class).length > 0
	);
	let series = new Set(filterList.map(b => b.serie));
	// Create section for each serie
	let seriesDiv = {};
	for (let serie of series) {
		let serieDiv = document.createElement("div");
		let serieHeader = document.createElement("h2");
		serieHeader.innerHTML = serie;
		serieDiv.appendChild(serieHeader);
		seriesDiv[serie] = serieDiv;
		document.getElementById(DIV_RESULT).appendChild(serieDiv);
	}
	// Delegate button construction to FormFill
	for (let build of filterList) {
		let item = fillBuildButton(build.parsed, null, build.title);
		seriesDiv[build.serie].appendChild(item);
	}
}

// Filter and display result

function filterResult() {
	for (let build of listBuild.filter(b => b.parsed)) {
		let item = fillBuildButton(build.parsed, null, build.title);
		document.getElementById(DIV_RESULT).appendChild(item);
	}
}

// Parse and load build

function parseAndLoadCode() {
	clearProfile([DIV_IMPORT]);
	var input = document.getElementById("pobinput").value.trim();
	if(input.startsWith("http")) {
		var divHelp = document.createElement("div");
		divHelp.style.display = "flex";
		divHelp.style.flexDirection = "column";
		// Help message
		var spanHelp = document.createElement("span");
		spanHelp.id = "import_helptext";
		spanHelp.innerHTML = langTranslate.find( l => l._id == spanHelp.id)[localStorage.getItem("lang")];
		spanHelp.minWidth = "100%";
		divHelp.appendChild(spanHelp);
		// Help image
		var imgHelp = document.createElement("img");
		console.log(document.getElementById(DIV_IMPORT).clientWidth);
		imgHelp.width = document.getElementById(DIV_IMPORT).clientWidth/2-80;
		if(input.startsWith("https://pastebin.com")) {
			imgHelp.src = "./img/importPastebin.png";
		} else if(input.startsWith("https://pobb.in")) {
			imgHelp.src = "./img/importPobin.png";
		} else if(input.startsWith("https://poe.ninja")) {
			imgHelp.src = "./img/importPoeninja.png";
		}	
		divHelp.appendChild(imgHelp);
		document.getElementById(DIV_IMPORT).appendChild(divHelp);
		// IFrame of website
		var frameImport = document.createElement("iframe");
		frameImport.src = input;
		frameImport.width = "50%";
		frameImport.height = document.body.clientHeight;
		document.getElementById(DIV_IMPORT).appendChild(frameImport);
	} else {
		displayBuild(input);
	}
}

function displayBuild(build) {
	var pobObject = pobCodeToObject(build);
	console.log(pobObject);
	if(pobObject !== undefined) {
		console.log(loadPobData(pobObjet));
		displayParsed(loadPobData(pobObject));
	} else {
		//TODO display error message
	}
}