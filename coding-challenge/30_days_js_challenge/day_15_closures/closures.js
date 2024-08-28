// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function anotherFunction() {
  let theVariable = null;
  return () => theVariable = undefined;
}

const hold = anotherFunction();
// hold();
// console.log(hold());

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function counter() {
  let privateCounter = 20;

  function increase() {
    let increaseCounter = privateCounter;
    return ++increaseCounter;
  }
  return { increase };
}

// console.log(counter().increase());

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function generateId() {
  const timeStamp = Date.now();
  let uniqueId = Math.floor(Math.random() * 20);

  return function () {
    console.log(timeStamp);
    return timeStamp + uniqueId;
  };
}

const uniqueId = generateId();

// console.log(uniqueId());
// console.log(uniqueId());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function capture() {
  const userName = "Jackson";

  return function () {
    return `Hello and welcome Mr ${userName}`;
  };
}

const greet = capture();
// console.log(greet());

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function createArrayOfFunction(length) {
  let arrayFunction = [];

  for (let i = 0; i < length; i++) {
    arrayFunction.push(function () {
      console.log(i);
    });
  }

  return arrayFunction;
}

const functionArray = createArrayOfFunction(5);

// functionArray[1]();

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function calculate() {
  let items = [];

  return {
    add: function (item) {
      items.push(item);
    },
    remove: (item) => {
      if (items.length === 0) return `There is no items in the collection ❌`;

      const index = items.indexOf(item);

      if (index !== -1) {
        items.splice(index, 1);
      }
    },
    list: () => {
      items.forEach((item) => console.log(item));
    },
  };
}

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function complexCalc() {
  const caachedResult = {};

  function readFileWithMemo(a) {
  
    for(a in caachedResult) {
      return caachedResult[a];
    }
    setTimeout(() => {
      console.log(`complex calculation result: `, a);
      caachedResult[a] = a;
    }, 3000);
  }
  return { readFileWithMemo };
}

const rf = complexCalc();
rf.readFileWithMemo('sample');


// Task 8: Create a memoized version of a function that calculates the factorial of a number.

// 4! => 4x3x2x1

function memoizedFactorial () {
  const cache = {};

  return function factorial (num) {
    if(num in cache) {
      return cache[num];
    }

    let result = 1;
    for(let i = num; i>1; i--) {
      result  *= i;
    }
    cache[num] = result;
    return result;
  }
}

const factorial = memoizedFactorial();

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(5));


