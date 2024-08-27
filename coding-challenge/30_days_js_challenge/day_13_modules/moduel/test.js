// import greet from "./multipleFunction";
const twoNumberFunc = require("./twoNumber");
console.log(twoNumberFunc(10, 20));

const personObj = require("./personObj");
console.log(personObj.greeting());

const { arr, name, age, reverse } = require("./constants&Function");

console.log(arr);
console.log(name);
console.log(age);
console.log(reverse(name));

// console.log(greet('mun'))
