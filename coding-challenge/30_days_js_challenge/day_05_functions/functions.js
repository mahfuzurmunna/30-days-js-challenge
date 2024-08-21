function oddOrEven(num) {
  num % 2 === 0 ? console.log(`${num} is even`) : console.log(`${num} is odd`);
}

// function square(num) {
//   console.log(num * num);
// }

function concate(str1, str2) {
  console.log(str1 + str2);
}

const sum = (n1, n2) => n1 + n2;

const contain = (word, char) => {
  if (word.includes(char)) {
    console.log(true);
  } else {
    console.log(false);
  }
};

contain("munnna", "m");

const func = (p1, p2 = 10) => {
  console.log(p1, p2);
};

// func("m");

const person = (name, age = 26) => {
  console.log(`Hello, my name is ${name} & i'm ${age} years old`);
};

// person("munna");

function higher(func, number) {
  while (number > 0) {
    func();
    number--;
  }
}
function two(f1, f2, value) {
  const res = f2(value);
  const result = f1(res);
  console.log(result);
}
function call() {
  console.log("function is calling");
}

function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

// higher(call, 10);

two(double, square, 5);
