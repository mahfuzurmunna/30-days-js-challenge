const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `Pleasae give a valid number, its: ${height}`;
    results.style.color = "blue";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Pleasae give a valid number, its: ${weight}`;
    results.style.color = "blue";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the resultl
    results.innerHTML = `<span>${bmi}</span>`;
    results.style.color = "blue";
  }

  //   results.style.color = "blue";
});
console.log(form);
