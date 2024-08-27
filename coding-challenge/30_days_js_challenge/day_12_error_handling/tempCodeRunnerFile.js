// function intentionalError() {
//   throw new Error("This function is defecnted");
// }

// function checkError() {
//   try {
//     intentionalError();
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// checkError();

// // Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
// function dividesNumbers(numorator, denominator) {
//   if (denominator === 0) {
//     throw new CustomError("Denominator cannot be zero");
//   }
//   return numorator / denominator;
// }

// function checkDividor(numerator, denominator) {
//   try {
//     const divide = dividesNumbers(numerator, denominator);
//     console.log(divide);
//   } catch (error) {
//     console.error(`Error Message: ${error.message}`);
//   } finally {
//     console.log("Finally we get a value");
//   }
// }

// // checkDividor(10, 5);

// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//     this.message = "ValidationError";
//   }
// }

// // Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
// function throwNewError() {
//   throw new CustomError("This is a custom error");
// }

// function custorErrorCheck() {
//   try {
//     throwNewError();
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//   }
// }

// // custorErrorCheck();/

// // Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

// function checkString(userInput) {
//   if (userInput === "") {
//     throw new CustomError("The string is empty");
//   } else {
//     return userInput;
//   }
// }

// function checkError(string) {
//   try {
//     const check = checkString(string);
//     console.log(check);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// // checkError("");
// // Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
// const customPromise = new Promise((resolve, reject) => {
//   const min = 1;
//   const max = 20;
//   let error;
//   const randomNumber = Math.floor(Math.random() * (max - min) + min);

//   if (randomNumber % 2 === 0) {
//     error = true;
//   } else {
//     error = false;
//   }

//   if (!error) {
//     resolve("No error found");
//   } else {
//     reject("Error have been detected");
//   }
// });

// // customPromise
// //   .then((response) => {
// //     console.log(response);
// //   })
// //   .catch((error) => console.log(error));

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const error = true;
//       if (!error) {
//         resolve("Resolved after" + ms / 1000 + " seconds ");
//       } else {
//         reject("Coudnt resolve");
//       }
//     }, ms);
//   });
// }

// async function asynchronous() {
//   try {
//     const timing = await delay(2000);
//     console.log(timing);
//     return timing;
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// asynchronous();

function fetchInvalid() {
  fetch("https://invalid-url-example.com/data")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status : ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => {
      console.error(`Error fetching data: ${error.message}`);
    });
}

fetchInvalid();
