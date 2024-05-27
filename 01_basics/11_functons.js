function sayName() {
  console.log("My world");
}

// sayName -> reference, sayName()-> execution;

sayName();

function addTwoNumbers(num1, num2) {
  return num1 * num2;
}

const value = addTwoNumbers(4, 6);

// console.log(addTwoNumbers(2, 3));

console.log(value);

function logicUserMessage(userName) {
  if (userName === undefined) {
    console.log("please enter a userName");
  } else {
    return `${userName} just logged here`;
  }
}

// console.log(logicUserMessage());
