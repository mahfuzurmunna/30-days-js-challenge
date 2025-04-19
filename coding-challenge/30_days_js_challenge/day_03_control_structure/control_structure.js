function checkPosNegZero(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

function eligibilityOfVoting(name, age) {
  if (age >= 18) {
    return `${name} is eligible to vote this year`;
  } else {
    return `${name} is still too yound`;
  }
}

function largestOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return "num1 is the largest";
  } else if (num2 > num1 && num2 > num3) {
    return "num2 is the largest";
  }
  return "num3 is the largest";
}

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
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturay";
  default:
    console.log(`Sorry, this is not a day ${day}`);
}

console.log(day);

console.log(checkPosNegZero(-1));

function oddEven(num) {
  return num % 2 === 0 ? `${num} is even` : `${num} is odd`;
}

console.log(oddEven(5));
