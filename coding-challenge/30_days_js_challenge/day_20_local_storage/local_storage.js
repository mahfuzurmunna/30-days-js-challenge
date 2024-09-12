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
function addEvent(event) {
  event.preventDefault();
  const formData = new FormData(form);
  // console.dir(formData);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
    localStorage.setItem(key, value);
    const retrievedForm = localStorage.getItem(key);
  });
}

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", addEvent);
console.log(retrivedObj);
