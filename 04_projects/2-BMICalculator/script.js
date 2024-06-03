const form = document.querySelector("form");
// console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);

  const result = document.querySelector("#results");
  result.style.color = "tomato";
  result.style.fontWeight = "bold";

  if (height <= 0 || isNaN(height) || height === "") {
    result.innerHTML = `<span>Please put a valid Height : ${height}</span>`;
  } else if (weight <= 0 || isNaN(weight) || weight === "") {
    result.innerHTML = `<span>Please put a valid Weight : ${weight}</span>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = `<span>Your BMI is: ${bmi}</span> <br/> <span style="font-size:20px; color:blue">You are Under Weight, Eat food 🍌</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `<span>Your BMI is: ${bmi}</span> <br/> <span style="font-size:20px; color:blue">You are Fit! 😁</span>`;
    } else {
      result.innerHTML = `<span>Your BMI is: ${bmi}</span> <br/> <span style="font-size:20px; color:blue">Start Dieting & Exercise 🚶‍♂️</span>`;
    }
  }
  form.reset();
});
