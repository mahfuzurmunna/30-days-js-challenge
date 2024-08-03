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

// validateInput("");
// validateInput("Valid");

function createRandomPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve("Promise resolved");
    } else {
      reject(new Error("promise rejected"));
    }
  });
}

createRandomPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Caught an error", error.message);
  });

async function handleRandomPromise() {
  try {
    const message = await createRandomPromise();
    console.log(message);
  } catch (error) {
    console.error("Caught an error -> ", error.message);
  }
}

// handleRandomPromise();

fetch("https://invalid.url")
  .then((response) => {
    if (!response.ok) {
      throw new Error("network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("fetch error -> ", error.message);
  });

async function fetchWithTryCatch() {
  try {
    const response = await fetch("https://invalid.url");
    if (!response.ok) {
      throw new Error("network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("fetch error:", error.message);
  }
}
fetchWithTryCatch();
