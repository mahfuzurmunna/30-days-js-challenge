function operator(num1, num2) {
  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(num1 * num2);
  console.log(num1 / num2);
  console.log(num1 % num2);

  if (num1 > num2) {
    console.log("num1 is bigger");
  } else {
    console.log("num2 is bigger");
  }

  if (num1 === num2) {
    console.log("both number is equal");
  }

  if ((num1 && num2) || num1) {
    console.log("both numbers are correct");
  }
}

operator(20, 10);

let oldNum = 20;

oldNum += 30;
oldNum -= 25;
console.log("new number", oldNum);

console.log(!oldNum);

oldNum ? console.log("positive") : console.log("negative");
