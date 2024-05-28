// 1: Get current date and time

const currentDate = new Date().toLocaleDateString();

// 2: Check if a variable is an Array
let myArr = [1, 4, 2, 4];

Array.isArray(myArr);

//3: Merge two Arrays
let secondArr = [23, 31, 55, 21, 33, 23, 31, 33, 40, 52];
const mergedArr = myArr.concat(secondArr);
// <-- another method -->
const spreadArr = [...myArr, ...secondArr];
// console.log(spreadArr, mergedArr);

//4:  Remove duplicates from an array
const uniqueArray = [...new Set(secondArr)];
// console.log(uniqueArray);

//5: Reverse an array:
const reversedArr = myArr.reverse();
// console.log(reversedArr);

// 6: sort an array in ascending order

const sortedArr = secondArr.sort((a, b) => a - b);

// console.log(sortedArr);

//7: Convert string to number
const myNumber = "20";
const myName = "munna";
const number = parseInt(myNumber);
// console.log(number, myNumber);

//8: Generate a random number between two values
const min = 5;
const max = 20;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(randomNumber);

//9: Check if a string contains substring
console.log(myName.includes("u"));

//10: Get the length of an object

const creditCard = {
  cardName: "Mahfuzur Rahman Munna",
  cardID: "1046436762",
  cardCompany: "payoneer",
};

const objectLength = Object.keys(creditCard).length;

// console.log(objectLength);

// 11: Convert object to array
const arrayObj = Object.entries(creditCard);

// console.log(arrayObj);

// 12:  get current url

const currentUrl = window.location.href;

console.log(currentUrl);
