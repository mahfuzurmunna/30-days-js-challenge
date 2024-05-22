"use strict";

let score = 25;

let stringName = "hello";

// console.log(typeof score);

// let valueInNumber = Number(score);
let valueInBolean = Boolean(score);

console.log(typeof valueInBolean);
console.log(valueInBolean);

// type conversion issues : any data types -> number

// "33" => 33 (string -> number)
// "3abc" => NaN (string+number -> not a number)
// true => 1/0 (bolean -> number)
// null => 0 (object -> number)

// type conversion : any data types -> Boolean

// any number > 0 => true; 0 => false (number -> boolean)
// ""  => false (blank string -> boolean)
// "munna" => true (string -> boolean)

let x = 3;
const y = ++x;

console.log(x, y);

let gameCounter = 100;

const z = gameCounter++;

const clockCounter = gameCounter++;
console.log(`value of Game: ${gameCounter++}, Value of Z : ${clockCounter} `);

// postfix : with operator after operand (example: x++), the increment operator increments and returns the value before incrementing other operand;

// prefix: with operator befor operand (example: x++), the increment operator increments and returns the value after incrementing other operand;

//
