# DOM Manipulation Feature Requests

## 1. Click Event Script

Write a script that adds a click event listener to a button to change the text content of paragraph:

```javascript
const btn = document.getElementById("btn");

const para = document.getElementById("paragraph");

btn.addEventListener("click", () => {
  para.textContet = "The paragraph text have been changed";
});
```

## 2. Mouse Event Script

Create a script that handles mouseOver and mouseout events to change the background color of an element

```javascript
const boxColor = document.getElementById("box");

//color generator
function randomColor() {
  let hexCode = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hesCode[Math.floor(Math.random() * 16)];
  }
  return color;
}

boxColor.addEventListener("mouseover", () => {
  const randomColor = randomColor();
  boxColor.style.backgroundColor = randomColor;
});

boxColor.addEventListener("mouseout", () => {
  const randomColor = randomColor();
  boxColor.style.backgroundColor = randomColor;
});
```

## 3. Keyboard Event Script

Write a script that that logs key presses and displays input filed values using keydown and keyup event listeners

```javascript
const nameFiled = document.getElementById("name");
nameFiled.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});
nameFiled.addEventListener("keydown", (e) => {
  console.log(e.key);
});
```

## 4. Form Events Script

Create a script that handles form submission and change events on a select dropdown

```javascript
const form = document.getElementById("myForm");
const dropDown = document.getElementById("cars");
const displayParagraph = document.getElementById("displayParagraph");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});

dropDown.addEventListener("change", () => {
  displayParagraph.textContent = "Selected Value: " + dropDown.value;
});
```

## 5. Event Delegation Script:

Write a script that demonstrate event delegation by handling events on dynamically added child elements

```javascript
const uList = document.getElementById("list");

uList.addEventListener("click", (e) => {
  if (e.target.innerText === "Javascript") {
    if (e.target.style.backgroundColor === "chocolate") {
      e.target.style.backgroundColor = "";
    } else {
      e.target.style.backgroundColor = "chocolate";
    }
  } else {
    if (e.target.style.backgroundColor === "blue") {
      e.target.style.backgroundColor = "";
    } else {
      e.target.style.backgroundColor = "blue";
    }
  }
});

const addLang = document.getElementById("add");

addLang.addEventListener("click", (e) => {
  const newLang = prompt("Enter New Programming Lang");

  if (newLang) {
    addLang(newLang);
  }
});

function addLang(lang) {
  const newLi = document.createElement("li");
  newLi.textContent = lang;
  uList.appendChild(newLi);
}
```
