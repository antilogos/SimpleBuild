// CONSTANTS
GRAPH_BOX_WIDTH = 40;
GRAPH_BOX_HEIGHT = 40;
GRAPH_BOX_SPACING = 10;
GRAPH_BOX_ROUNDING = GRAPH_BOX_SPACING/5;
GRAPH_BOX_MARGIN = GRAPH_BOX_SPACING/5;
GRAPH_BOX_MARGIN_FOCUS = GRAPH_BOX_SPACING/3;
GRAPH_DOMAIN_ROUNDING = GRAPH_BOX_SPACING/2;
GRAPH_RATIO = {x: 4, y: 3, z: 500} // x/y: rectangle ratio, z: point to pixel ratio
LANG = "fr"

function getLangNameOrId(obj) {
    if(obj.name) {
        if(obj.name[LANG]) {
            return obj.name[LANG];
        }
    }
    return obj.id
}

function clearPopupInfo(svg) {
    // Clear popup
    let popupContainerCharacter = document.getElementById("infoPopupCharacter");
    while(popupContainerCharacter.firstChild) popupContainerCharacter.removeChild(popupContainerCharacter.firstChild);
    const hoverCircle = svg.getElementById("highlightItem");
    hoverCircle.setAttribute("fill", "none");
    hoverCircle.setAttribute("stroke", "none");
    let popupContainerDomain = document.getElementById("infoPopupDomain");
    while(popupContainerDomain.firstChild) popupContainerDomain.removeChild(popupContainerDomain.firstChild);
}

// Display the node tooltip if in range of a character or relation ?
function highlightNode(svg, event) {
	// Get style properties and mouse coordinates from the document
	const rect = svg.getBoundingClientRect();
	const view = new DOMMatrix(window.getComputedStyle(svg.firstChild).transform);
	// Compute the relative position on skill tree
	let x = (event.clientX - rect.left-view.e)/view.a;
	let y = (event.clientY - rect.top-view.f)/view.d;

	let nearest_char;
	struct_character_list.forEach( c => {
	    if(c.pos.x < x && (c.pos.x + GRAPH_BOX_WIDTH) > x) {
	        if(c.pos.y < y && (c.pos.y + GRAPH_BOX_HEIGHT) > y) {
	            nearest_char = c;
            }
        }
    });
    // Clear popup
    clearPopupInfo(svg);

    if(nearest_char) {
        // Info popup
        let popupElement = document.getElementById("infoPopupCharacter");
		let charHighlightDiv = document.createElement("div");
		charHighlightDiv.textContent = getLangNameOrId(nearest_char);
		charHighlightDiv.style.display = "block";
		charHighlightDiv.style.background = "rgba(0,0,0,0.8)";
		charHighlightDiv.style.color = "#777";
        charHighlightDiv.style.whiteSpace = "pre-line";
		popupElement.appendChild(charHighlightDiv);
		// prevent overflow from right and bottom
		let relative_box = {x : nearest_char.pos.x*view.a+view.e, y: nearest_char.pos.y*view.d+view.f}
		let posX = relative_box.x + (GRAPH_BOX_WIDTH/2*view.a) - popupElement.getBoundingClientRect().width/2;
		let posY = relative_box.y + ((GRAPH_BOX_HEIGHT+2*GRAPH_BOX_MARGIN_FOCUS)*view.d);
	    if(posX + popupElement.getBoundingClientRect().width > rect.width) posX = rect.right - popupElement.getBoundingClientRect().width;
		if(posY + popupElement.getBoundingClientRect().height > rect.height) posY = rect.height - popupElement.getBoundingClientRect().height;
		// apply position to popup
		popupElement.style.left = posX + "px";
		popupElement.style.top = posY + "px";
		popupElement.style.display = "block";
		popupElement.style.position = "fixed";
		popupElement.style.width = "auto";
		popupElement.style.height = "auto";
		popupElement.style.float = "left";
		// higlight and position the hover element
        const hoverCircle = svg.getElementById("highlightItem");
		hoverCircle.setAttribute("x", (nearest_char.pos.x-GRAPH_BOX_MARGIN)*view.a+view.e);
		hoverCircle.setAttribute("y", (nearest_char.pos.y-GRAPH_BOX_MARGIN)*view.d+view.f);
		hoverCircle.setAttribute("width", (GRAPH_BOX_WIDTH+2*GRAPH_BOX_MARGIN)*view.a);
		hoverCircle.setAttribute("height", (GRAPH_BOX_HEIGHT+2*GRAPH_BOX_MARGIN)*view.d);
        hoverCircle.setAttribute("rx", GRAPH_BOX_ROUNDING);
        hoverCircle.setAttribute("ry", GRAPH_BOX_ROUNDING);
        hoverCircle.setAttribute("fill", "rgba(0,0,0,0)");
        hoverCircle.setAttribute("stroke", "#00F");
        hoverCircle.setAttribute("stroke-width", GRAPH_BOX_MARGIN_FOCUS*((view.a+view.d)/2));
    }

    let nearest_domain;
    // Domain pos are centered
    struct_domain_list.forEach( d => {
        if(d.pos.x - d.width/2 < x && (d.pos.x + d.width/2) > x) {
            if(d.pos.y - d.height/2 < y && (d.pos.y + d.height/2) > y) {
                nearest_domain = d;
            }
        }
    });
    if(!nearest_char && nearest_domain) {
        // Info popup
        let popupElementDomain = document.getElementById("infoPopupDomain");
		let domainHighlightDiv = document.createElement("div");
		domainHighlightDiv.textContent = getLangNameOrId(nearest_domain);
		domainHighlightDiv.setAttribute("width", (GRAPH_BOX_WIDTH+2*GRAPH_BOX_MARGIN)*view.a);
		domainHighlightDiv.setAttribute("height", (GRAPH_BOX_HEIGHT+2*GRAPH_BOX_MARGIN)*view.d);
		domainHighlightDiv.style.display = "block";
		domainHighlightDiv.style.background = "rgba(0,0,0,0.8)";
		domainHighlightDiv.style.color = "#777";
        domainHighlightDiv.style.whiteSpace = "pre-line";
		popupElementDomain.appendChild(domainHighlightDiv);
		// prevent overflow from right and bottom
		let relative_box = {x : nearest_domain.pos.x*view.a+view.e, y: nearest_domain.pos.y*view.d+view.f}
		let posX = relative_box.x - popupElementDomain.getBoundingClientRect().width/2;
		let posY = relative_box.y + ((nearest_domain.height/2+2*GRAPH_DOMAIN_ROUNDING)*view.d);
	    if(posX + popupElementDomain.getBoundingClientRect().width > rect.width) posX = rect.right - popupElementDomain.getBoundingClientRect().width;
		if(posY + popupElementDomain.getBoundingClientRect().height > rect.height) posY = rect.height - popupElementDomain.getBoundingClientRect().height;
		// apply position to popup
		popupElementDomain.style.left = posX + "px";
		popupElementDomain.style.top = posY + "px";
		popupElementDomain.style.display = "block";
		popupElementDomain.style.position = "fixed";
		popupElementDomain.style.width = "auto";
		popupElementDomain.style.height = "auto";
		popupElementDomain.style.float = "left";
    }

}

// Listen to mouse click and wheel to change matrix transformation
function addTransformAnimation(svg, canvas) {
	var drag = false;
	var offset = { x: 0, y: 0, z: 1};
	var matrix = new DOMMatrix();

    // Drag and drop move
	svg.addEventListener('pointerdown', function (event) {
		drag = true;
		offset = { x: event.offsetX, y: event.offsetY , z: offset.z};
	});

	svg.addEventListener('pointermove', function (event) {
		if(canvas.style.transform !== undefined) {
			matrix = new DOMMatrix(canvas.style.transform);
		}
		if (drag) {
			var tx = event.offsetX - offset.x;
			var ty = event.offsetY - offset.y;
			offset = {
				x: event.offsetX,
				y: event.offsetY,
				z: offset.z
			};
			matrix.preMultiplySelf(new DOMMatrix()
                //.scaleSelf(offset.z)
				.translateSelf(tx, ty));
			canvas.style.transform = matrix.toString();
            // Clear popup
            clearPopupInfo(svg);
		}
	});

	svg.addEventListener('pointerup', function (event) {
		drag = false;
	});

    // Mousewheel zoom
    svg.addEventListener('wheel', function (event) {
        event.preventDefault();

        if (canvas.style.transform) {
            matrix = new DOMMatrix(canvas.style.transform);
        }

        const scale = event.deltaY < 0 ? 1.03 : 0.97;
        var newScale = offset.z * scale;
        if (matrix.a < 0.3 && newScale < 1) {
            newScale = 1;
        } else if(matrix.a > 2 && newScale > 1) {
            newScale = 1;
        }
        offset.z = newScale;


        matrix.preMultiplySelf(
            new DOMMatrix()
                .translateSelf(event.offsetX, event.offsetY)
                .scaleSelf(newScale)
                .translateSelf(-event.offsetX, -event.offsetY)
        );

        canvas.style.transform = matrix.toString();

        // Clear popup
        clearPopupInfo(svg);
    }, { passive: false });

	svg.addEventListener("mousemove", function (event) {
		highlightNode(svg, event);
	});
}

// Algorithm to get coordinates of points to put char
function computeCircularGroups(graphDatas) {
    // Counts the character per domain
    const counts = {};
    graphDatas.characters.forEach(character => {
        counts[character.domain] = (counts[character.domain] || 0) + 1;
    });
    const groups = new Map(
        graphDatas.domains.map(d => [
            d.id,
            counts[d.id] || 0
        ])
    );

    // Count all characters
    const totalAllGroups = Array.from(groups.values()).reduce((a, b) => a + b, 0);
    // Count number of groups that have at least one element
    const totalGroups = Array.from(groups.values()).filter(e => e > 0).length;
    const totalGroupsWeight = Array.from(groups.values()).map(Math.sqrt).reduce((a, b) => a + b, 0)

    graphDatas.domains = Array.from(graphDatas.domains)
        .filter(d => (groups.get(d.id) ?? 0) > 0)
        .reduce((acc, d) => {
            const weight = Math.sqrt(groups.get(d.id)) ?? 0;
            // Position of the weighted center of the the group
            const ratio = (acc.currentWeight + weight / 2) / totalGroupsWeight;
            // Shift to make the first element align to the left
            const angle = 2 * Math.PI * ratio - Math.PI/2;
            // Calculate position x and y
            const gx = GRAPH_RATIO.x * GRAPH_RATIO.z /2 // Align to middle
                + Math.cos(angle) * GRAPH_RATIO.x
                * GRAPH_RATIO.z * 0.4; // Occupy 80% of space, letting 10% margin on each side
            const gy = GRAPH_RATIO.y * GRAPH_RATIO.z /2 // Align to middle
                + Math.sin(angle) * GRAPH_RATIO.y
                * GRAPH_RATIO.z * 0.4;

            // Other computed value
            d.count = groups.get(d.id);
            d.lines = Math.ceil(d.count/Math.ceil(Math.sqrt(d.count)));
            d.columns = Math.ceil(Math.sqrt(d.count));
            d.width = d.columns * GRAPH_BOX_WIDTH + (d.columns +1) * GRAPH_BOX_SPACING + (GRAPH_BOX_WIDTH / d.lines) * (d.lines -1);
            d.height = d.lines * GRAPH_BOX_HEIGHT + (d.lines +1) * GRAPH_BOX_SPACING;

            // Update domains
            d.proportional = weight / totalGroupsWeight;
            d.pos = {
                x: gx,
                y: gy
            };
            acc.domains.push(d);

            // Update reduce accumulator
            acc.currentWeight += weight;

            return acc;
        }, {
            currentWeight: 0,
            domains: []
        })
        .domains;

    result = [];
    return result;
}

// Draw all the graph elements
function drawGraphDatas(svgElement, graphDatas) {

    graphDatas.domains.forEach(d => {
        // Characters per Domain in a trapeze (sqrt(x) by sqrt(x) with each line shifted by 1/x)
        const domainSqrtCount = Math.ceil(Math.sqrt(d.count)); // FIXME try to be proportionnal to box width/height ?
        const shiftByLine = GRAPH_BOX_WIDTH / d.lines;
        const domainPosX = d.pos.x-d.width/2;
        const domainPosY = d.pos.y-d.height/2;

        // Create the box
        const domainBox = document.createElementNS("http://www.w3.org/2000/svg","rect");
        domainBox.id = "DomainBox"+d.id;
        domainBox.setAttribute("x", domainPosX);
        domainBox.setAttribute("y", domainPosY);
        domainBox.setAttribute("width", d.width);
        domainBox.setAttribute("height", d.height);
        domainBox.setAttribute("rx", GRAPH_DOMAIN_ROUNDING);
        domainBox.setAttribute("ry", GRAPH_DOMAIN_ROUNDING);
        domainBox.setAttribute("stroke", d.style.color);
        domainBox.setAttribute("fill", d.style.color+"3");
        domainBox.setAttribute("stroke-width", GRAPH_BOX_MARGIN);

        var counter = 0;
        graphDatas.characters
            .filter(c => c.domain == d.id)
            .forEach( c => {
                // Character rect
                const curLine = Math.floor(counter / domainSqrtCount);
                const curColumn = counter%domainSqrtCount;
                const charBox = document.createElementNS("http://www.w3.org/2000/svg","rect");
                const posX = domainPosX + (shiftByLine * curLine) // Shifted start
                    + (GRAPH_BOX_SPACING * (curColumn+1)) + (GRAPH_BOX_WIDTH * curColumn);
                const posY = domainPosY
                    + (GRAPH_BOX_SPACING * (curLine+1)) + (GRAPH_BOX_HEIGHT * curLine);

                // Create the box
                charBox.setAttribute("x", posX);
                charBox.setAttribute("y", posY);
                charBox.setAttribute("width", GRAPH_BOX_WIDTH);
                charBox.setAttribute("height", GRAPH_BOX_HEIGHT);
                charBox.setAttribute("rx", GRAPH_BOX_ROUNDING);
                charBox.setAttribute("ry", GRAPH_BOX_ROUNDING);
                charBox.setAttribute("fill", "");
                charBox.setAttribute("stroke", "#00F");
                charBox.setAttribute("stroke-width", GRAPH_BOX_MARGIN);
                svgElement.appendChild(charBox);

                counter = counter +1;
                c.pos = {x: posX, y: posY};
            });

        svgElement.appendChild(domainBox);
    });
}

// Main function to create the svg
function buildSvgChartRoot(elementId, graphDatas) {
	// Create the main svg node
	let mainDiv = document.getElementById(elementId);
	const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
	svg.setAttribute("class","charchart");
	svg.setAttribute("xmlns","http://www.w3.org/2000/svg");

	// Viewport with listener to move the graph around
	const viewport = document.createElementNS("http://www.w3.org/2000/svg","g");
	viewport.style.width="100%";
	viewport.style.height="100%";
	addTransformAnimation(svg, viewport);
	svg.appendChild(viewport);

    // Add an event and circle to display nearest node popup
	const hoverCircle = document.createElementNS("http://www.w3.org/2000/svg","rect");
	hoverCircle.setAttribute("id", "highlightItem");
	hoverCircle.setAttribute("x", "1");
	hoverCircle.setAttribute("y", "1");
	hoverCircle.setAttribute("width", "1");
	hoverCircle.setAttribute("height", "1");
	hoverCircle.setAttribute("stroke", "none");
	hoverCircle.setAttribute("fill", "255 255 255 255");
	svg.appendChild(hoverCircle);

	// Clear container div and add svg
	while(mainDiv.firstChild) mainDiv.removeChild(mainDiv.firstChild);
	mainDiv.appendChild(svg);

    // Size of the windows available
    const width = parseFloat(window.getComputedStyle(svg).width);
    const height = parseFloat(window.getComputedStyle(svg).height);

    computeCircularGroups(graphDatas);

    drawGraphDatas(viewport, graphDatas);
}

