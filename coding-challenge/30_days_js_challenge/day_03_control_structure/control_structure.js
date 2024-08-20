function checks(num, sum, gum) {
  if (num < 0) {
    console.log("num is negative");
  } else {
    console.log("num is positive");
  }

  const personAge = num;

  if (personAge < 18) {
    console.log("still a kid");
  } else {
    console.log("he should start politics");
  }

  if (num > sum) {
    if (num > gum) {
      console.log("num is bigger");
    }
  } else if (sum > gum) {
    console.log("sum is bigger");
  } else {
    console.log("gum is bigger");
  }
}

function ternary(num) {
  num % 2 === 0 ? console.log("num is even") : console.log("num is odd");
}
let minYear = 1000;
let maxYear = 5000;
let randomYear = Math.floor(Math.random() * (minYear + maxYear) + minYear);
const year = 2000;

function leapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log("its leap year");
      } else {
        console.log("not a leap year");
      }
    }
  } else {
    console.log("not a leap year");
  }
}

leapYear(year);
console.log(randomYear);
