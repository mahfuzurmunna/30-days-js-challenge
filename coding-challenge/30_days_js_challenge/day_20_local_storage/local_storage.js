// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value
function setItem(key, value) {
  localStorage.setItem(key, value);
}
function getItem(key) {
  console.log(localStorage.getItem(key));
}

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const myObject = { name: "John Doe", email: "john@example.com" };

localStorage.setItem("myObj", JSON.stringify(myObject));

const retrivedObj = JSON.parse(localStorage.getItem("myObj"));

// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
const form = document.getElementById("form");
const savedDataDiv = document.getElementById("savedData");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  localStorage.setItem("userData", JSON.stringify({ name, email }));
  displaySavedData();
  console.log(localStorage.getItem("userData"));
});

const getUserData = localStorage.getItem("userData");

function displaySavedData() {
  const savedData = JSON.parse(localStorage.getItem("userData"));
  if (savedData) {
    savedDataDiv.innerHTML = `Name: ${savedData.name} <br> Email: ${savedData.email}`;
  }
}

const rmvBtn = document.getElementById("rmvBtn");
rmvBtn.addEventListener("click", () => {
  localStorage.removeItem("userData");
  savedDataDiv.innerHTML = `Data are removed`;

  console.log("after removing:", localStorage.getItem("userData"));
});

const myName = "mahfuz";

sessionStorage.setItem("myName", myName);

const getSession = sessionStorage.getItem("myName");
console.log(getSession);


sessionStorage.setItem('myObj', JSON.stringify(myObject));

const retreiveObj = JSON.parse(sessionStorage.getItem('myObj'));