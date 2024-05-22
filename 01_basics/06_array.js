//array methods 01: map() -> this method basicly iterates through each array array element and depending upon specific condition given it returns a new array. example: The following iterates over an array of numbers and returns new array in which every number is multiplied by 2

let mapArray = [1, 2, 3, 4, 5];
let newMapArray = mapArray.map((arrayElement) => arrayElement * 2);
// console.log(newMapArray);

//method 02: filter() -> this method basicly what it says exactly. it filters out a spefic element from an array based on the condition. example: the following iterates over an array of numbers and filters the array in such a way that if the number is greater than 4, then it is kept . results are stored in a new array\

let filterArray = [1, 2, 3, 4, 6];
let newFilterArray = mapArray.filter((arrayElement) => arrayElement > 4);
// console.log(newFilterArray);

//method 03: reduce() -> it is a powerful method which can be used to reduce the values of array to one single element. values get accumulated over each iteration and at the end, we are left with single value/element. example: sum all the numbes of the following array numbers:

let reduceArray = [1, 2, 3, 4, 5];
let multiply = reduceArray.reduce(
  (prevArrayElement, currentArrayElement) =>
    prevArrayElement * currentArrayElement
);

let sum = 0;

for (let i = 0; i < reduceArray.length; i++) {
  sum = reduceArray[i] + sum;
}

// console.log(sum);

// console.log(multiply);

//method 04: forEach() -> This is the simplest to understand as a method. It simply iterates over the array and performs whichever condition is specified. example : iterate over the number = [1,2,3,4,5]; POINT TO BE NOTED: it does not return a new array, it changes the original one.

let forArray = [2, 4, 6, 8, 9, 10, 13];

let newArray = forArray
  .map((arrayElement) => (arrayElement % 2 === 0 ? arrayElement : null))
  .filter((arrayFilter) => arrayFilter !== null);

// console.log(newArray);

//method 05: find () -> this method takes in a callback function which checks the condition while iterating over every element of the array and returns the first match. example: check the age of the person in the age array if age is greater than 18. then return the first match

let ageArray = [12, 15, 19, 20, 18];

const checkAge = ageArray.filter((age) => age > 18);
const checkCondtion = (age) => {
  return age > 18;
};

let result = ageArray.find(checkAge);
console.log(checkAge);
