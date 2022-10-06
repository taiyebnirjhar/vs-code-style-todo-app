// get element
const HeaderTag = document.querySelector("#Header");
const HeaderTagEnds = document.querySelector("#HeaderEnds");

const ul = document.querySelector("#ul");
const ulEnds = document.querySelector("#ulEnds");

const li = document.querySelectorAll("#li");
const liEnds = document.querySelectorAll("#liEnds");

const button = document.querySelector("#button");
const buttonEnds = document.querySelector("#buttonEnds");

const addItem = document.querySelector("#addItem");
const listItem = document.querySelector("#listItem");

const inputStart = document.querySelectorAll("#input");
const inputClose = document.querySelectorAll("#inputClose");

const number = document.querySelectorAll(".number");

const inputField = document.querySelector("#inputField");

/******************************************************************/

HeaderTag.textContent = `<header>`;
HeaderTagEnds.textContent = `</header>`;

ul.textContent = `<ul`;
ulEnds.textContent = `</ul>`;

li.forEach((li) => (li.textContent = `<li>`));
liEnds.forEach((li) => (li.textContent = `<li>`));

button.textContent = `<button>`;
buttonEnds.textContent = `</button>`;
/******************************************************************/

// functions
const inputFieldHandler = (e) => {
  const parent = e.target.parentElement;
  const children = parent.childNodes;
  const firstChild = parent.firstElementChild;

  for (const child of children) {
    if (child.classList) {
      const items = child.classList;
      console.log(items.value);
    }
  }

  // console.log(children);
  // console.log(firstChild.classList.add("hidden"));
};
const inputStyle = (elements, value) => {
  for (const elemenet of elements) {
    elemenet.textContent = `${value}`;
  }
};

inputStyle(inputStart, "<input");
inputStyle(inputClose, "/>");

const addItemHandler = () => {
  const newItem = document.createElement("div");

  const element = (number = 5, task = "assignment") => ` <div>
  <span class="number>5</span>
  <span class="tag list" id="li"></span>
  <input class="task" value="text">task</input>
  <span class="tag" id="liEnds"></span>
</div>`;
  const readyItem = newItem.append(element());
  listItem.append(readyItem);
};

const numberHandler = () => {
  let line = 1;
  for (const num of number) {
    num.textContent = `${line++}`;
  }
};

numberHandler();
/******************************************************************/

// event listner
addItem.addEventListener("click", () => {
  // addItemHandler();
});
inputField.addEventListener("click", (e) => {
  inputFieldHandler(e);
});
