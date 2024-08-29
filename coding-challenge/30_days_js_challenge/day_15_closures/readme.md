## Day-15 Closures

### 1. Basic Closure Script:

Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable.

```javascript
function basic() {
  const outerVariable = "munna";
  return function () {
    outerVariable = undefined;
    return outerVariable;
  };
}
```

### 2. Counter Closure Script:

Create a script that uses a closure to maintain a private counter with increment and get functions.

```javascript
function temporary() {
  let counter = 1;

  return function () {
    return ++counter;
  };
}

const increment = temporary();

console.log(increment());
```

### 3. Unique ID Generator Script:

Write a script that generates unique IDs using a closure to keep track of the last generated ID.

```javascript
function generate() {
  const visited = new Set(); // Set to track generated IDs

  return function () {
    let id;
    do {
      id = Math.floor(Math.random() * 100); // Generate a random ID
    } while (visited.has(id)); // Ensure the ID is unique

    visited.add(id); // Add the new unique ID to the set
    return id; // Return the generated unique ID
  };
}

const generateId = generate();

console.log(generateId()); // Generates and prints a unique ID
console.log(generateId()); // Generates and prints another unique ID
console.log(generateId()); // Generates and prints another unique ID
```

### 4. Loop Closure Script:

Create a script that demonstrates closures in loops to ensure functions log the correct index.

```javascript
function arrayOfFunction(length) {
  let arrFunc = [];

  for (let i = 0; i < length; i++) {
    arrFunc.push(function () {
      console.log(i);
    });
  }
  return arrFunc;
}
```

### 4. Memoization Script:

Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.

```javascript
function memoizedFactorial() {
  const memo = {};

  function factorial(num) {
    for (num in memo) {
      return memo[num];
    }
    let result = 1;
    for (let i = num; i > 1; i--) {
      result *= i;
    }
    memo[num] = result;
    return result;
  }
  return { factorial };
}

const factorial = memoizedFactorial();

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(5));
```
