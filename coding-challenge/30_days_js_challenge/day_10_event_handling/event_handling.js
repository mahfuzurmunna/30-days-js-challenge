const heroBtn = document.getElementById("heroBTN");
const heroPara = document.getElementById("heroPara");
const images = document.getElementById("ishan");

heroBtn.addEventListener("click", () => {
  heroPara.innerText = "The text content has been changed";
});

heroBtn.addEventListener("dblclick", () => {
  images.style.display === "none"
    ? (images.style.display = "block")
    : (images.style.display = "none");
  //   console.log("clicked");
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colorBox = document.getElementById("box");
colorBox.addEventListener("mouseover", () => {
  const randomColor = getRandomColor();
  colorBox.style.backgroundColor = randomColor;
});
colorBox.addEventListener("mouseout", () => {
  const randomColor = getRandomColor();
  colorBox.style.backgroundColor = "chocolate";
});

const nameField = document.getElementById("name");
nameField.addEventListener("keyup", (e) => {
  console.log(e.key);
});
const displayP = document.getElementById("display");

nameField.addEventListener("keyup", (e) => {
  displayP.textContent = "Current Value: " + nameField.value;
});
const submitField = document.getElementById("submit");

const form = document.getElementById("myForm");
const cars = document.getElementById("cars");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const formData = new FormData(form);

//   for (const [key, value] of formData.entries()) {
//     console.log(`${key}: ${value}`);
//   }
// });

cars.addEventListener("change", () => {
  displayP.textContent = "Selected value: " + cars.value;
});

const langList = document.getElementById("lang");

langList.addEventListener("click", (e) => {
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

  console.dir(e.target.innerText);
});
const addBtn = document.getElementById("add");
function addLang(language) {
  const newLi = document.createElement("li");
  newLi.textContent = language;
  langList.appendChild(newLi);
}
addBtn.addEventListener("click", (e) => {
  console.log("clicked");
  const newLang = prompt("enter a new programming lang:");
  if (newLang) {
    addLang(newLang);
  }
});
