# Day 04: Control Sturctures

## If-Else Statement

```javascript
let number = 20;

if (number < 0) {
  console.log("number is negative");
} else {
  console.log("number is postive");
}

if (number >= 18) {
  console.log("person is eligible to vote");
} else {
  console.log("person is yet to be 18 years old");
}
```

## Nested If-else Statement

Task 3: Write a program to find the largest of three numbers using nested if-else statements.

```javascript
function largest(a, b, c) {
  if (a > b) {
    if (a > c && b > c) {
      console.log("1st: a , 2nd: b , 3rd: c");
    } else if (a > c && c > b) {
      console.log("1st: a , 2nd: c , 3rd: b");
    } else {
      console.log("1st: c , 2nd: a, 3rd: b");
    }
  } else if (b > c) {
    if (a > c) {
      console.log("1st: b , 2nd: a , 3rd: c");
    } else {
      console.log("1st: b , 2nd: c , 3rd: a");
    }
  } else {
    console.log("1st: c , 2nd: b, 3rd: a");
  }
}
```

## Conditional Ternary Operator

Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

```javascript
function checkOddEven(number) {
number % 2 === 0 ? return 'odd' : return 'even';
}
```

## Combining Conditions

Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

```javascript
function ifLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log("It is a leap year");
      } else {
        console.log("It is not a leap year");
      }
    } else {
      console.log("It is a leap year");
    }
  } else {
    console.log("It is not a leap year");
  }
}
```
