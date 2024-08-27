// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

const { remove } = require("lodash");

function outerFunction() {
  let varies = "munna";

  return () => {
    varies = "rahman";
    return varies;
  };
}

const innerFunction = outerFunction();

// console.log(innerFunction());

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function counter() {
  let count = 10;

  function privateCounter() {
    let pCount = count++;
    return pCount;
  }

  function getCount() {
    return count;
  }

  return { privateCounter, getCount };
}

const myCounter = counter();
console.log(myCounter.privateCounter());
console.log(myCounter.getCount());

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function generateId() {
  let uniqueId = Math.floor(Math.random() * 30);

  function trackId() {
    let tracking = uniqueId;
    return ++tracking;
  }
  return { trackId };
}

const id = generateId();

console.log(id.trackId());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function captureName() {
  const userName = "mannan";

  function greet() {
    return `Hello everyone! this is ${userName}`;
  }

  return { greet };
}

console.log(captureName().greet());

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

let arrayFunction = [];
// Create functions and store them in the array
for (let i = 0; i < 5; i++) {
  arrayFunction.push(
    (function (index) {
      return function () {
        console.log(index);
      };
    })(i)
  );
}

arrayFunction.forEach((func) => func());

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

const ItemManager = (function () {
  let items = [];

  return {
    addItem: function (item) {
      items.push(item);
      console.log(`${item} has been added!`);
    },

    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
        console.log(`${item} has been deleted`);
      } else {
        console.log(`${item} is not found`);
      }
    },

    listItems: function () {
      if (items.length === 0) {
        console.log(`No items available`);
      } else {
        items.forEach((item,index) =>{
            console.log(`${index+1}: ${item} `)
        })
      }
    },
  };
}());
// Usage example:
ItemManager.addItem("Apple");
ItemManager.addItem("Banana");
ItemManager.listItems();       // Lists all items
ItemManager.removeItem("Banana");
ItemManager.listItems();   