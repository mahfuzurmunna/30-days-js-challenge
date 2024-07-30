function throws() {
  return hello;
}

// console.log(throws());

try {
  throws();
} catch (error) {
  //   console.error(error);
}

function divides(n1, n2) {
  if (n2 === 0) {
    throw new error("Denominator cannot be zero");
  }
  return n1 / n2;
}

function safeDivide(n1, n2) {
  try {
    let result = divides(n1, n2);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  } finally {
    console.log("In the finally blocck");
  }
}

// safeDivide(10, 2);
// safeDivide(10, 0);

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwErrorFunction() {
  try {
    console.log(`in the try block of throwErrorFunction`);
    throw new CustomError("This is custom error");
  } catch (error) {
    console.log("In the catch block of throwErrorFunction");
    console.error("Caught an error: ", error.message);
  } finally {
    console.log("In the final block of throwErrorFunction");
  }
}

// throwErrorFunction();

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateInput(input) {
  try {
    console.log("In the try block of validateInput");
    if (!input || input.trim() === "") {
      throw new ValidationError("Input cannot be empty");
    }
    console.log("input is valid", input);
  } catch (error) {
    console.log("In the catch block of validateInput");
    console.log("Caught an  error ->", error.message);
  } finally {
    console.log("In the finally block of validateInput");
  }
}

validateInput("");
// validateInput("Valid");
