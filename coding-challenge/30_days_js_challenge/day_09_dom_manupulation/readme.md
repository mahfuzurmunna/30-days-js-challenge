# DOM Manipulation Feature Requests

## 1. Text Content Manipulation Script

Write a script that selects an HTML element by its `ID` and changes its `Text Content`

```javascript
const logo = document.getElementById("logo");
logo.innerText = "Hello Logo!";
```

## 2. Element Creation Script

Create a script that demonstrates creating a new `div` element and appending it to the body

```javascript
const newDiv = document.createElement("div");
const newText = document.createTextNode("This is main div");
newDiv.appendChild(newText);
document.body.appendChiled(newDiv);
```

## 3. Element Removal Script

Write a script that selects an HTML element and `removes` it from the DOM

```javascript
const myImg = document.getElementById("myImage");
const btnElement = document.getElementById("changeImageBtn");
btnElement.addEventListener("click", () => {
  myImg.remove();
});
```

## 4. Attribute Modification Script

Create a script that that changes the `attributes` of an HTML element

```javascript
const addBtn = document.createElement("button");
addBtn.innerText = "Change P text";
addBtn.addEventListener("click", () => {
  newParagraph.setAttribute("class", "newClass");
});
```

## 5. Event Handling Script:

Write a script that adds `event listeners` to HTML elements to change their content or style based on user interaction

```javascript
addBtn.addEventListener("mouseover", () => {
  newParagraph.style.color = "brown";
});
```
