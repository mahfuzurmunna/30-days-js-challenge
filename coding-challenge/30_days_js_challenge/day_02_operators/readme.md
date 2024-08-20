# Day 02: Operator

## Arithmetic Operations Script:

Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

```javascript
function basic(a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a / b);
  console.log(a * b);
  console.log(a % b);
}
```

## Comparison and Logical Operators Script

Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

```javascript
function compare(a, b) {
  if (a > b && b < a) {
    return "a is bigger";
  }
  if (a || b) {
    return "the numbers are real";
  }
}
```

## Ternary operator Script

Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

```javascript
const num = -10;
num >= 0 ? return 'num is positive' : return 'num is negative';
```
