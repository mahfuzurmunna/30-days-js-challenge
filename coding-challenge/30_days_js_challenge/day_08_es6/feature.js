// console.log(
//   `my name is ${name} and i'm ${age} years old \nhello there its been a while`
// );

const newArr = [12, 34, "get", "on", "the", "dance", "floor"];

const [a, b] = newArr;

const obj = {
  car: "toyota",
  model: "premio",
  release: 2008,
};

const { car, model } = obj;
// console.log(car, model);

const myArr = [...newArr, "just do it"];
console.log(myArr);

function rest(...numbers) {
  let sum = 0;
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// console.log(rest(1, 2, 3));

function twoParameter(one, two = 1) {
  console.log(one, two);
}

// twoParameter("one");

const name = "mahfuz";
const age = 20;
const color = "white";

let fieldName = "email";
let formData = {
  [fieldName]: "user@gmail.com",
};

let details = "footballPlayer";

let footballPlayerData = {
  [details]: {
    name: "messi",
    preferredFoot: "left",
    age: 36,
    ballonDor: 8,
  },
};

console.log(footballPlayerData);
