//-------creating an element by js

/* //1. where to add
const placesList = document.getElementById("placesList");
console.log(placesList);

//2. what to be added
const li = document.createElement("li");
li.innerText = "create element by js";
// console.log(li);

//3.add the child
placesList.appendChild(li);


//2. what to be added
const li0 = document.createElement("li");
li0.innerText = "created another HTML element by js";

//3.add the child
placesList.appendChild(li0); */

//1. where to add
const mainContainer = document.getElementById("main-container");

//2. what to be added
const section = document.createElement("section");

//2.1 what will be added into section
const h1 = document.createElement("h1");
h1.innerText = "Added new section by js";

//adding ul
const ul = document.createElement("ul");
//addings items on ul
const li1 = document.createElement("li");
li1.innerText = "item1 added by js";
const li2 = document.createElement("li");
li2.innerText = "item2 added by js";

//adding child li1 and li2 to ul
ul.appendChild(li1);
ul.appendChild(li2);

//adding child h1 and ul to section
section.appendChild(h1);
section.appendChild(ul);

//3.adding child section into mainContainer
mainContainer.appendChild(section);

//set innert HTML directly
const sectionDress = document.createElement("section");

sectionDress.innerHTML = `
<h1>This is My Dress Section Which is added by js and insert html directly</h1>
<ul>
    <li>seloyar</li>
    <li>kamij</li>
    <li>orna</li>
    <li>saree</li>
    <li>lunggi</li>
</ul>
`;

mainContainer.appendChild(sectionDress);
