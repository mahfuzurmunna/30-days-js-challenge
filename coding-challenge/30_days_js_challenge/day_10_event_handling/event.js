const mainBtn = document.querySelector(".main");
const para = document.querySelector(".paragraph");
const images = document.querySelector("img");

// change paragraph text using click event
mainBtn.addEventListener("click", (e) => {
  para.textContent = "By clicking the text have been changed";
});

// change display of an image using dbclick event
images.addEventListener("dblclick", () => {
  images.style.display = "none";
});

const yellowBg = document.getElementById("bg");

function randomColor() {
  let letters = "0123456789ABCDEF";
  let randomColor = "#";

  for (let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}

//changing background color randomly using mouseover event
yellowBg.addEventListener("mouseover", () => {
  let random = randomColor();
  yellowBg.style.backgroundColor = random;
});

let fNameField = document.getElementById("myName");

const customParagraph = document.createElement("p");
customParagraph.style.marginLeft = "100px";
fNameField.addEventListener("keyup", (event) => {
  let text = event.key;
  customParagraph.textContent = text;
});

const formBg = document.getElementById("form");

document.body.appendChild(customParagraph);

formBg.addEventListener("mouseover", () => {
  formBg.style.backgroundColor = "brown";
});

formBg.addEventListener("mouseout", () => {
  formBg.style.backgroundColor = "slategrey";
});

const form = document.getElementById("form");
const submitBtn = document.getElementById("forBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
});

const selectOption = document.getElementById("country");

selectOption.addEventListener("change", (e) => {
  // console.dir(e);
  const options = selectOption.querySelectorAll("option");
  console.log(selectOption.value);
  customParagraph.innerText = selectOption.value;
});

// Get the unordered list and the add button
const unorderedList = document.getElementById("unordered");
const addButton = document.getElementById("addBtn");

// Function to add a new language to the list
function addNewLanguage() {
  // Create a new list item
  const newListItem = document.createElement("li");

  // Prompt the user to enter a language
  const language = prompt("Enter a new language:");

  if (language) {
    // Set the text content of the list item to the new language
    newListItem.textContent = language;

    // Append the new list item to the unordered list
    unorderedList.insertBefore(newListItem, addButton);
  }
}

// Add an event listener to the parent unordered list
unorderedList.addEventListener("click", function (event) {
  // Check if the clicked element is a list item
  if (event.target.tagName === "LI") {
    alert(`You clicked on: ${event.target.textContent}`);
  }
});

// Add an event listener to the "Add Lang" button
addButton.addEventListener("click", addNewLanguage);
