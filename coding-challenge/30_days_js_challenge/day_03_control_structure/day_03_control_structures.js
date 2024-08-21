const min = -10;
const max = 25;
let number = Math.floor(Math.random() * (max - min + 1)) + min;

if (number < 0) {
  console.log("number is negative");
} else if (number === 0) {
  console.log("number is zero");
} else {
  console.log("number is positive");
}

if (number >= 18) {
  console.log("Person is eligible for voting");
} else {
  console.log("Person is a kid");
}

let num1 = 10;
let num2 = 9;
let num3 = 8;

//calculating the largest number using nested if/else statement
if (num1 > num2) {
  if (num1 > num3) {
    console.log("num1 is the largest");
  } else {
    console.log("num3 is the largest");
  }
} else {
  console.log("num2 is the largest");
}

//measuring which day it is by using switch statement
let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thurstday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

console.log("Today is:" + day);

number % 2 === 0 ? console.log("Even") : console.log("Odd");

let minYear = 1000;
let maxYear = 5000;

let randomYear = Math.floor(Math.random() * (minYear + maxYear) - 1) + minYear;

console.log(randomYear);

function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log("it is a leap year");
      } else {
        console.log("it is not a leap year");
      }
    } else {
      console.log("it is not a leap year");
    }
  } else {
    console.log("it is not a leap year");
  }
}
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
isLeap(randomYear);

largest(6, 8, 6);
