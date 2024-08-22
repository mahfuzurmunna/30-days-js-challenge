const h1 = document.getElementById("hello");

h1.innerText = "Hello nice to meet you!";

const paragraph = document.querySelector(".para");

paragraph.style.backgroundColor = "aliceblue";
paragraph.style.padding = "10px";
paragraph.style.borderRadius = "5px";
paragraph.style.border = "1px solid blue";
paragraph.addEventListener("mouseover", () => {
  paragraph.style.border = "1px solid green";
});

const newDiv = document.createElement("div");
const text = document.createElement("h2");
text.innerText = "This is new text";
newDiv.appendChild(text);

document.body.appendChild(newDiv);

//creating li element

const ul = document.getElementById("list");
const newLi = document.createElement("li");
newLi.innerText = "Contact";
ul.appendChild(newLi);
console.dir(document);

newDiv.remove();

ul.lastChild.remove();

const rmvBtn = document.getElementById("btn");

rmvBtn.addEventListener("click", () => {
  const newImg = document.getElementById("chicken");

  newImg.setAttribute("src", "./istockphoto-1217649450-612x612.jpg");

  const newPara = document.querySelector(p);
  newPara.classList.remove("para");
});
