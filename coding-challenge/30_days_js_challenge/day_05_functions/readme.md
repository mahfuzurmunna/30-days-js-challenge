# JavaScript Feature Requests

## 1. Even or Odd Function Script

Write a script that includes a function to check if a number is even or odd and logs the result.

```javascript
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is even.");
  } else {
    console.log(number + " is odd.");
  }
}

// Example usage:
isEvenOrOdd(4); // 4 is even.
isEvenOrOdd(7); // 7 is odd.
```

## 2. Square Calculation Function Script

Create a script that includes a function to calculate the square of a number and returns the result.

```javascript
function calculateSquare(number) {
  return number * number;
}

// Example usage:
console.log(calculateSquare(5)); // 25
console.log(calculateSquare(9)); // 81
```

## 3. Concatenation Function Script

Write a script that includes a function expression to concatenate two strings and returns the result.

```javascript
const concateStrings = function (str1, str2) {
  return str1 + str2;
};

//example usage:
console.log(concateStrings("hello, ", "world!"));
```

## 4. Sum calculation using Arrow function

Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.

```javascript
const sumCalc = (a, b) => a + b;

console.log(sumCalc(5, 4));
```

## 5. High order function script

Write a script that includes a higher-order function to apply a given function multiple times.

```javascript
function applyFunction(func, times, value) {
  for (let i = 0; i < times; i++) {
    value = func(value);
  }
  return value;
}

// Example usage:
const increment = (x) => x + 1;
console.log(applyFunction(increment, 5, 0)); // 5
```
