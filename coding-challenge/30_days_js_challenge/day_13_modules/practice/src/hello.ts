/**
-----------------------
array
-----------------------
 */

let names: string[] = ["Mario", "Shadow", "Peach"];
names.push("pull-push-leg");

let ages: number[] = [20, 30, 40, 50];
ages.unshift(500);
// console.log(ages);

let fruits = ["apples", "pears", "bananas", "jackfruits"];
fruits.push("peaches");

const f = fruits[2];
// console.log(f);

const things = [1, true, "hello"]; // union type
const t = things[0];
// console.log(t);

/**
--------------------------------
object literals
--------------------------------
**/

let user: { firstName: string; age: number; id: number; isFictional: boolean } =
  {
    firstName: "munna",
    age: 40,
    id: 1020,
    isFictional: true,
  };

user.firstName = "rahman";
console.log(user.firstName);

/**
--------------------------------
type inference with object literals
--------------------------------
**/

let person = {
  name: "munna",
  score: 26,
};
const score = person.score;

/**
--------------------------------
functions
--------------------------------
**/

function addTwoNumber(a: number, b: number): number {
  return a + b;
}
console.log(addTwoNumber(5, 4));

function findVowel(word: string): number {
  const vowels = "AEIOUaeiou";
  let count = 0;
  for (let letters of word) {
    if (vowels.includes(letters)) {
      count++;
    }
  }
  return count;
}
console.log(findVowel("aeiou"));

function addAllNumbers(items: number[]): number {
  const total = items.reduce((acc, value) => acc + value, 0);
  return total;
}
console.log(addAllNumbers([3, 5, 8, 9, 10]));

/**
--------------------------------
return type inference
--------------------------------
**/

function formatGreeting(name: string, greeting: string): string {
  return `${greeting}, ${name}`;
}

const result = formatGreeting("munnna", "hello");
console.log(result);

/**
--------------------------------
any type
--------------------------------
**/

let title;

title = 25;
title = {
  hello: "world",
};

let anyThing: any[] = ["hello", true, 30, null];
anyThing.push({ id: 1234 });
console.log(anyThing);

/**
--------------------------------
functions & any
--------------------------------
**/

function addTogether(value: any): any {
  return value + value;
}

const resultOne = addTogether("hello");
const resultTwo = addTogether(10);
console.log(`${resultOne}, ${resultTwo}`);

/**
-------------------------------
🔗tuples
-------------------------------  
**/

let human: [string, number, boolean] = ["mario", 30, false];

//examples

let hsla: [number, string, string, number];
hsla = [200, "100%", "60%", 1];

let xy: [number, number];
xy = [96.5, 24.6];

function useCords(): [number, number] {
  //get co-ordinates
  const lat = 100;
  const long = 69;

  return [lat, long];
}

const [lat, long] = useCords();

/**--------------------------------
interfaces
-----------------------------------
**/

interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = { name: "mario", avatar: "/img/mario.png" };

interface Post {
  title: string;
  body: string;
  tags: string[];
  create_at: Date;
  author: Author;
}

const newPost: Post = {
  title: "my first post",
  body: "lorem ipsum",
  tags: ["gaming", "tech"],
  create_at: new Date(),
  author: authorOne,
};

/**
--------------------------------
as function argument types
--------------------------------
**/

function createPost(post: Post): void {
  console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);

/**
--------------------------------
interfaces with array
--------------------------------
**/

let posts: Post[] = [];
posts.push(newPost);
// console.log(posts)

/**
--------------------------------
type aliases
--------------------------------
**/

type Rgb = [number, number, number];

function getRandonmColor(): Rgb {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b];
}

const colorOne = getRandonmColor();
const colorTwo = getRandonmColor();

console.log(colorOne, ",", colorTwo);

//example 02 - object literal

type User = {
  name: string;
  score: number;
};

const userOne: User = { name: "munna", score: 61 };

function formatUser(user: User): void {
  console.log(`${user.name} has an id of ${user.score}`);
}

formatUser(userOne);

/**
--------------------------------
 union types
--------------------------------
**/

let someId: number | string | null = "munna"; //multiple type declared

someId = 20;

type Id = number | string; // type alias with union type
let anotherId: Id;

anotherId = "1kj1b2jkf";
anotherId = 5;

//type guards

function swapIdType(id: Id): Id {
  //can only use props and methods common to
  //both number and strings
  if (typeof id === "string") {
    return parseInt(id);
  } else {
    return id.toString();
  }
}

const idOne = swapIdType(1);
const idTwo = swapIdType("2");

console.log(idOne, ",", idTwo);

/**
--------------------------------
tagged interface
--------------------------------
**/

interface UserTwo {
  type: "user";
  userName: string;
  id: number | string;
}

interface Person {
  type: "person";
  userName: string;
  id: number | string;
}

let facebookUser: UserTwo = {
  type: "user",
  userName: "mun",
  id: 24,
};
let twitterUser: Person = {
  type: "person",
  userName: "mun",
  id: 24,
};

function checkThem(value: UserTwo | Person) {
  if (value.type === "user") {
    console.log(value.userName);
  } else {
    console.log(value.userName);
  }
}

checkThem(facebookUser);

/**
--------------------------------
reusable interfaces : are a way to define data structure: values to impletement an interface, where it must have all the properties of that interface
--------------------------------
**/

interface hasQuantity {
  quantity: number;
}

const someQuantity: hasQuantity = { quantity: 50 };

function printQuantity(item: hasQuantity): void {
  console.log(`the quantity of the item is  ${item.quantity}`);
}

const fruit = {
  name: "mango",
  quantity: 50,
};
const vehicle = {
  type: "car",
  quantity: 3,
};
const anotherPerson = {
  name: "munna",
  age: 30,
};

printQuantity(fruit);
printQuantity(vehicle);

// printQuantity({name:'munna',quantity: 100}) // so we cannot declare it implicitely

/**
--------------------------------
function signature
--------------------------------
**/

type Calculator = (numOne: number, numTwo: number) => number;

function addDuoNumber(a: number, b: number) {
  return a + b;
}

function squareNumber(num: number) {
  return num * num;
}

function joinTwoNumbers(numOne: number, numTwo: number) {
  return `${numOne}${numTwo}`;
}

let calcs: Calculator[] = [];
calcs.push(addTwoNumber);
// calcs.push(joinTwoNumbers);
// it depends on which type the function is returning, argmnt does not.
calcs.push(squareNumber);

/**
--------------------------------
function signature on interfaces
--------------------------------
**/

interface HasArea {
  name: string;
  calcArea: (a: number, b: number) => number;
}

const shapeOne: HasArea = {
  name: "square",
  calcArea(l: number, w: number) {
    return l * w;
  },
};

const shapeTwo: HasArea = {
  name: "circle",
  calcArea(radius: number) {
    return (Math.PI * radius) ^ 2;
  },
};

console.log(shapeOne.calcArea(5, 9));
console.log(shapeTwo.calcArea(10, 10));

/**
--------------------------------
extending interface
--------------------------------
**/

interface HasFormatter {
  format(): string;
}

interface Bill extends HasFormatter {
  id: string | number;
  amount: number;
  server: string;
}

const randomUser = {
  id: 1,
  format(): string {
    return `This user has an id of ${this.id}`;
  },
};

const bill = {
  id: 2,
  amount: 50,
  server: "munna",
  format(): string {
    return `User ${this.server} has Bill with id ${this.id} has $ ${this.amount} to pay`;
  },
};

function printFormatted(val: HasFormatter): void {
  console.log(val.format());
}

function printBill(bill: Bill): void {
  console.log("server", bill.server);
  console.log(bill.format());
}

printFormatted(randomUser);
printBill(bill);

/**
--------------------------------
extending type aliases
--------------------------------
**/

type Alien = {
    id : string | number
    firstName: string
}

type Spieces = Alien & { // borrowing properties of person by extending it
    email : string
}

const alienOne = {
    id: 1,
    firstName: 'jadu'
}

const alienTwo: Spieces = {
    id: '2',
    firstName : 'ninja',
    email : 'gmail@com'
}

const personThree: Alien = {
    id: '2',
    firstName: 'peach@gmail.com'
}

function printAlien (user: Spieces) {
    console.log(user.id,user.email,user.firstName)
}

// printAlien(alienOne);
