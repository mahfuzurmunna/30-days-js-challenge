function add(num1, num2) {
  consol.log(num1 + num2);
}

function substract(num1, num2) {
  consol.log(num1 - num2);
}

function multiply(num1, num2) {
  consol.log(num1 * num2);
}

function divide(num1, num2) {
  consol.log(num1 / num2);
}

function remainder(num1, num2) {
  consol.log(num1 % num2);
}

console.log(`Addition: ${add(10, 30)}`);
console.log("Substract:" + substract(20, 15));
console.log("multiply:" + multiply(11, 23));
console.log("Divide:" + divide(16, 8));
console.log("Remainder:" + remainder(124, 24));

let pos = 20;

pos += add(5, 10);

console.log(pos);

let neg = substract(10, 7);

console.log(neg);

pos >= neg ? `pos is bigger` : `neg is bigger`;

function arithmeticOperation(num1, num2) {
  console.log(`Addition ${num1} + ${num2} = ${a + b}`);
  console.log(`Subtraction ${num1} - ${num2} = ${a - b}`);
  console.log(`Multiplication ${num1} * ${num2} = ${a * b}`);
  console.log(`Divide ${num1} / ${num2} = ${a / b}`);
  console.log(`Remainder ${num1} % ${num2} = ${a % b}`);
}

function comparisonLogicalOperator(a, b) {
  a > b ? console.log(`a is bigger thanb`) : console.log(`b is bigger than a`);
  a === b ? console.log(`Both are equal`) : "";

  if (a && b) console.log(true);

  if (a || b === 5) console.log(true);

  if (!a) console.log(false);
}
