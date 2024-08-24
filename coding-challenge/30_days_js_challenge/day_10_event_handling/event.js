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
