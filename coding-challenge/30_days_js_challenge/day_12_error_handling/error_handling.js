function errorThrowing() {
  throw new Error("This function throws an error");
}

function checkError() {
  try {
    console.log(errorThrowing());
  } catch (error) {
    console.error("error:", error);
  }
}

function divideNumbers(num1, num2) {
  if (num2 === 0) {
    throw new Error(`Denominator ${num2} is zero, give a proper number`);
  }
  return num1 / num2;
}

// try {
//   divideNumbers(2, 0);
// } catch (error) {
//   console.log(error);
// }

try {
  console.log("We have tried and succeded");
} catch (error) {
  console.error(error);
} finally {
  console.log("Finally we get a result");
}

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function validateString(input) {
  if (input.trim() === "") {
    throw new CustomError("input string cannot be empty");
  }
  console.log("input is valid");
}

try {
  validateString("");
} catch (error) {
  console.error(`${error.message}`);
}

class EmptyInputError extends Error {
  constructor(message) {
    super(message);
    this.name = "emptyInputError";
  }
}

function validatesString(input) {
  if (input === "") {
    throw new EmptyInputError("Input cannot be empty");
  }
  console.log("Input is valid");
}


