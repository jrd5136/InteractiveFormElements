var chr = new Object;
/* First question holding all the questions */
chr["firstques"] = ['Select your dream car', 'Select One', 'Luxury','Convertible'];

/*Luxury Car*/
chr["Luxury"] = ['Select make of car ', 'Select One', 'Mercedes', 'Lexus', ];
chr["Mercedes"] = ['Mercedes Models', 'Select One', 'Benz C-Class', 'Benz CLA-Class', ];
chr["Lexus"] = ['Lexus Models', 'Select One', 'ES 350', 'ES 250'];

/*Convertible Car*/
chr["Convertible"] = ['Select make of car ', 'Select One', 'Jaguar', 'Porsche', ];
chr["Jaguar"] = ['Jaguar Models', 'Select One', 'XK', 'F-Type', ];
chr["Porsche"] = ['Porsche Models', 'Select One', 'Porsche Boxster', 'Porsche 911'];

chr["Benz C-Class"] = ['images/CClass.jpg'];
chr["Benz CLA-Class"] = ['images/CLAClass.jpg'];
chr["ES 350"] = ['images/ES350.jpg'];
chr["ES 250"] = ['images/ES250.jpg'];

chr["XK"] = ['images/XK.jpg'];
chr["F-Type"] = ['images/F-type.jpg'];
chr["Porsche Boxster"] = ['images/boxster.jpg'];
chr["Porsche 911"] = ['images/911.jpg'];





document.addEventListener('load', onLoad());

function onLoad() {
	buildSuperCat();
	

}

function buildSuperCat() {
	var container = document.getElementById('superCat');
	//Create and add options to a document object
	var header = document.createElement('h3');
	header.appendChild(document.createTextNode(chr['firstques'][0]));
	var dropdown = createDropdown('firstques');
	//Add event listener to the on change event of the dropdown menu
	dropdown.addEventListener('change', buildCat);
	//Append that document object to the DOM
	container.appendChild(header);
	container.appendChild(dropdown);
}

function buildCat(event) {
	var container = document.getElementById('cat');
	//Based on the eventtarget attribute, get the value of the category selected
	var type = event.target.value;
	//Build category menu based on that type
	var header = document.createElement('h3');
	header.appendChild(document.createTextNode(chr[type][0]));
	var dropdown = createDropdown(type);
	//Add event listener to the onchange event of the dropdown menu
	dropdown.addEventListener('change', buildProductMenu);
	//Clear all containers in cat and below
	clearContainer(document.getElementById('cat'));
	clearContainer(document.getElementById('prodCat'));
	clearContainer(document.getElementById('prod'));
	//Append that category menu to the DOM
	container.appendChild(header);
	container.appendChild(dropdown);
}

function buildProductMenu(event) {
	var container = document.getElementById('prodCat');
	//Based on the eventtarget attribute, get the value of the category selected
	var type = event.target.value;
	//Build category menu based on that type
	var header = document.createElement('h3');
	header.appendChild(document.createTextNode(chr[type][0]));
	var dropdown = createDropdown(type);
	//Add event listener to the onchange event of the dropdown menu
	dropdown.addEventListener('change', buildProduct);
	//Clear all containers in cat and below
	clearContainer(document.getElementById('prodCat'));
	clearContainer(document.getElementById('prod'));
	//Append that category menu to the DOM
	container.appendChild(header);
	
	container.appendChild(dropdown);
}

function buildProduct(event) {
	var container = document.getElementById('prod');
	//Based on the eventtarget attribute, get the value of the category selected
	var type = event.target.value;
	//Build category menu based on that type
	var header = document.createElement('h3');
	header.appendChild(document.createTextNode(type));
	var img = document.createElement('img');
	img.setAttribute('src', chr[type]);
	var selection = document.createElement("p");
	selection.appendChild(document.createTextNode(getSelections()));
	//Clear all containers in cat and below
	clearContainer(document.getElementById('prod'));
	//Append that category menu to the DOM
	container.appendChild(header);
	container.appendChild(img);
	container.appendChild(selection);
}

function getSelections() {
	var supercategory = document.getElementsByTagName('select')[0].value;
	var category = document.getElementsByTagName('select')[1].value;
	var product = document.getElementsByTagName('select')[2].value;
	var description = "You've selected a " + product + ". This is part of the " + category + " category which is itself part of the " + supercategory + " super category.";
	return description;
}

function clearContainer(container) {
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}
}

function addOption(dropdown, name, value) {
	var select = document.createElement('option');
	select.setAttribute('value', value);
	select.appendChild(document.createTextNode(name));
	dropdown.appendChild(select);
}

function createDropdown(category) {
	var dropdown = document.createElement('select');
	for (var i = 1; i < chr[category].length; i++) {
		addOption(dropdown, chr[category][i], chr[category][i]);
	}
	return dropdown;
}

