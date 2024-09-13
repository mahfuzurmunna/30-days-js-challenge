// Activity 1: Understanding LocalStorage

const stringValue = "this string will be saved in local storage";

localStorage.setItem("string", stringValue);
const retrivedValue = localStorage.getItem("string");

const myObj = {
  name: "munna",
  age: 20,
};

//set item for local storage
function setItem() {
  localStorage.setItem("myObj", JSON.stringify(myObj));
}

// get stored item in the localstorage
function getItem() {
  // alert(retrivedValue);
  const objRetrieve = JSON.parse(localStorage.getItem("myObj"));
  alert(objRetrieve);
  console.log(objRetrieve);
}

// Activity 2: Using LocalStorage
const form = document.getElementById("form");
const newDiv = document.createElement("div");
const savedDiv = document.getElementById("savedData");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const lName = document.getElementById("lname").value;
  localStorage.setItem("userData", JSON.stringify({ fName, email, lName }));

  displayData();
});

function displayData() {
  const retriveData = JSON.parse(localStorage.getItem("userData"));
  console.log(retriveData);

  if (retriveData) {
    newDiv.textContent = `First Name: ${retriveData.fName}, <br> Last Name: ${retriveData.lName}, <br>
    Email: ${retriveData.email}}`;
    savedDiv.appendChild(newDiv);
  }

  window.onload = newDiv;
}

function acceptKeyValue(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
  console.log(`values are set`);
}

function retrieveKey(key) {
  const local = localStorage.getItem(key);
  const session = sessionStorage.getItem(key);
  console.log(local)
  
    alert(`Local Storage: ${local}`);
    setTimeout(() => {
      alert(`Session Storage: ${session}`);
    }, 2000);
  
}

function clearAll (key) {
  localStorage.clear(key);
  sessionStorage.clear(key);
}
