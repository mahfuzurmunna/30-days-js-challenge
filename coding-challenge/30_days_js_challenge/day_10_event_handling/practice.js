// Task 01 : Add a click event listener to a  button that changes the text content of a paragraph

const heroBTN = document.querySelector("#heroBTN");
const heroPara = document.querySelector("#heroPara");

heroBTN.addEventListener("click", () => {
  heroPara.textContent = "Text has been changed";
});

//task 02: double click event listener
const img = document.getElementById("ishan");
img.addEventListener("dblclick", () => {
  img.style.display = "none";
});

//task 03 : Mouse events
const formBox = document.getElementById("myform");

function generateRandomColor() {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

formBox.addEventListener("mouseover", (event) => {
  formBox.style.backgroundColor = generateRandomColor();
});

formBox.addEventListener("mouseout", () => {
  formBox.style.backgroundColor = "slategray";
});

//Task 5 : keydown, keyup
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
nameField.addEventListener("keyup", (event) => {
  // console.log(event.target.value)
});

//task 6 : form events

formBox.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameField.value;
  const email = emailField.value;

  console.log(`Name :${name}\n Email: ${email}`);
});

const dropDownMenu = document.querySelector("#cars");

dropDownMenu.addEventListener("click", (e) => {
  e.preventDefault();
  console.dir(e.target.name);
});

// task 9
const addBtn = document.getElementById("add");
const langList = document.querySelector("#lang");

langList.addEventListener("click", (event) => {
  if (event.target && event.target.tagName === "LI") {
    console.log(`You clicked on ${event.target.textContent}`);
  }
});

addBtn.addEventListener("click", (e) => {
  const newLi = document.createElement("li");
  const arrLang = ["C++", "Ruby", "Go"];

  newLi.textContent = arrLang[Math.floor(Math.random() * arrLang.length )];
  

  langList.appendChild(newLi);
});
