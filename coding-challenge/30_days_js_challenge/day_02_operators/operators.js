function twoNumbers(a, b) {
  return a + b;
}

function substractTwoNumbers(a, b) {
  return a - b;
}

function multiplyTwoNumbers(a, b) {
  return a * b;
}

function divideTwoNumbers(a, b) {
  return a / b;
}

function equity(a, b) {
  if (a === b) {
    return "Numbers are equal";
  } else if (a > b) {
    return a;
  } else return b;
}

function compareNumbers(a, b) {
  if ((a && b) || b > a) {
    return "b is equal and these are real numbers";
  } else if (a > b && a < 10) return " Only a is real";
}

function opposite(a, b = false) {
  return !a;
}

console.log("compare numbers result ", opposite(true, 5));

let aNumber = 5;

aNumber += 10;

aNumber -= 4;

console.log(aNumber, equity(3, 3));

function checkPosNeg(num) {
  return num > 0 ? true : false;
}

console.log("pos cehck:", checkPosNeg(-20));
