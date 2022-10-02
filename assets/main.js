// get element
const HeaderTag = document.querySelector("#Header");
const HeaderTagEnds = document.querySelector("#HeaderEnds");
const ul = document.querySelector("#ul");
const ulEnds = document.querySelector("#ulEnds");
const li = document.querySelectorAll("#li");
const liEnds = document.querySelectorAll("#liEnds");
const button = document.querySelector("#button");
const buttonEnds = document.querySelector("#buttonEnds");

HeaderTag.textContent = `<header>`;
HeaderTagEnds.textContent = `</header>`;

ul.textContent = `<ul`;
ulEnds.textContent = `</ul>`;

li.forEach((li) => (li.textContent = `<li>`));
liEnds.forEach((li) => (li.textContent = `<li>`));

button.textContent = `<button>`;
buttonEnds.textContent = `</button>`;
