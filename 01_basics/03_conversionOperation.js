"use strict";

let score = 25;

let stringName =  

// console.log(typeof score);

// let valueInNumber = Number(score);
let valueInBolean = Boolean(score);

console.log(typeof valueInBolean);
console.log(valueInBolean);

// type conversion issues : any data types -> number

// "33" => 33 (string -> number)
// "3abc" => NaN (string+number -> number)
// true => 1/0 (bolean -> number)
// null => 0 (object -> number)

// type conversion : any data types -> Boolean

// any number > 0 => true; 0 => false (number -> boolean)
// ""  => false (blank string -> boolean)
// "munna" => true (string -> boolean)
