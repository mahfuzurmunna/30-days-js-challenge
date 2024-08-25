// Add a click event listener to a button that changes the text content of a paragraph.
const fPara = document.getElementById("change");

const headBtn = document.getElementById("headBtn");

//  Add a double-click event listener to an image that toggles its visibility
const dbImg = document.getElementById("dbImg");

dbImg.addEventListener("dblclick", function () {
  dbImg.style.display = "none";
});

headBtn.addEventListener("click", () => {
  fPara.innerText =
    "This text has been changed by clicking the button. Dont worry it will get reset after it reloads";
});

// mouseover event listener to an element that changes its background color.
const colorBg = document.getElementById("bg");

function getRandomColor() {
  let hexLetters = "ABCDEF1234567890";

  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += hexLetters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}

colorBg.addEventListener("mouseover", function () {
  let colorVariable = getRandomColor();
  colorBg.style.backgroundColor = colorVariable;
});

colorBg.addEventListener("mouseout", function () {
  colorBg.style.backgroundColor = "rgb(214, 196, 30)";
});

const formParent = document.getElementById("form-container");
const form = document.getElementById("form");
const formBtn = document.getElementById("formBtn");

// formParent.addEventListener("click", addEvent);
// form.addEventListener("click", addEvent, true);

// addevent function
function addEvent(event) {
  event.preventDefault();
  const formData = new FormData(form);
  // console.dir(formData);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
}

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

const fName = document.getElementById("fName");
const valuePara = document.getElementById("inputValue");

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
fName.addEventListener("keyup", function (e) {
  console.log(fName);
  valuePara.textContent = fName.value;
});

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
formBtn.addEventListener("click", addEvent);

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const dropDown = document.getElementById("country");

dropDown.addEventListener("change", function (e) {
  const valueOfOption = document.querySelectorAll("option");
  const selectedValue = dropDown.value;
  valuePara.textContent = `${selectedValue}`;
});

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const ulParent = document.getElementById("ulParent");
const uList = document.getElementById("unordered");

ulParent.addEventListener("click", (event) => {
  console.dir(event.target.innerText);
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
  const newLi = document.createElement("li");
  const language = prompt("Enter your language");

  if (language) {
    newLi.innerText = language;
  }

  uList.insertBefore(newLi, addBtn);
});
