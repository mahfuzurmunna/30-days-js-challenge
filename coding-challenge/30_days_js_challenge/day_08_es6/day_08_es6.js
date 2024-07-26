const personName = "ishan";
const age = 18;
const book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  year: 2000,
  getTitleAndAuthor: function () {
    return `title: ${this.title} and author: ${this.author}`;
  },
  updateYear: function (updatedYear) {
    this.year = updatedYear;
    return this.year;
  },
  library: {
    name: ["abc", "efg"],
    books: ["data structure", "C for Programming"],
  },
  thisMethod: function () {
    let n = this.library;
    return n;
  },
};
console.log(`my cousin name is ${personName} and he is ${age} years old`);

const attributee = ["talented", "unsmart", "obidient"];

console.log([...attributee[0], ...attributee[1]]);

console.log({ ...book.title, ...book.author });

function myIden(name, age = 18) {
  return `my name is ${name} and im ${age} years old`;
}

console.log(myIden("munna"));

let name = "muna";
let color = "brown";
const year = 27;

let indentity = { name, color, age };
console.log(indentity);

const num = [1, 2, 3];

const newArr = [4, 5, 6, ...num];
console.log(newArr);

function spread(a, b, c) {
  return a * b + c;
}

console.log(spread(...num));

let fNum = num[0];
let restNum = num.slice(1);

console.log(fNum, restNum);

const [first, second, ...rest] = [1, 2, 3, 5];

console.log(first);
console.log(second);
console.log("rest of the element: ", rest);

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num);
}

console.log(sum(1, 2, 4, 8));
