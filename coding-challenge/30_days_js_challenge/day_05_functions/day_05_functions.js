function checkOddEven(number) {
  number % 2 === 0 ? console.log(true) : console.log(false);
}

function square(n) {
  console.log(n * n);
}

square(5);

//function expression
const getMax = function (num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
};

//arrow function
const sum = (num1, num2) => {
  console.log(num1 + num2);
};

// checking if a string consist a certain char
const checkChar = (string, char) => {
  for (const c of string) {
    if (c === char) {
      return true;
    }
  }
  return false;
};

console.log(checkChar("munna", "a"));

const myIden = (name, age = 30) => {
  console.log(`My name is ${name} and i'm ${age} years old`);
};

myIden("munna");

//writing high order function
function highOrder() {
  function call(number) {
    for (let i = 0; i < number; i++) {
      console.log("function called");
    }
  }
  call(5);
}

highOrder();
