const add = require("./modules");
const Person = require("./person");
const result = add(5, 3);
const { sum, substract, multiply, divide } = require("./mathOperation");

const newPerson = new Person("munna", 20);

// console.log(newPerson.greet());

// console.log(result);
const a = 10;
const b = 5;
// console.log(`Divide: ${a} / ${b} = ${divide(a, b)}`);

const greet = require("./singleFunction");

// console.log(greet("munna"));

const { arr, name, age, reverse } = require("./constants");

console.log(reverse(arr));
