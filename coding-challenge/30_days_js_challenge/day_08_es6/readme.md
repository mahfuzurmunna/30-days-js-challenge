# ES6+ Feature Requests

## 1. Template literal Script

Write a script that demonstrate the use of `template literals` to create and log strings with embedded varialbes and multi-line strings

```javascript
const name = "munna";
const age = 27;
const city = "mirpur";

const greeting = `Hello, my name is ${name}. I am ${age} years old and i live in ${city}`;

// Log the greeting to the console
console.log(greeting);
```

## 2. Destructuring Script

Create a script that uses array and `object destructuring` to extract values and log them

```javascript
const array = [1, 8, 93, 2];
console.log(...array);
```

## 3. Spread and rest Operators Script

Write a script that demonstrates the use of the `spread operator` to combine arrays and the `rest operator` to hanlde multiple function arguments.

```javascript
//using spread operator to combine two arrays
const arr1 = [123, 2, 434, 23];
const arr2 = ["uno", "dos", "tres"];
console.log([...arr1, ...arr2]);

//using rest operators to handle multiple function arguments
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num);
}

console.log(sum(1, 2, 3, 4, 5)); // Sum : 15;
```

## 4. Default Parameter Script

Create a script that defines a function with `default parameters` and logs the result of calling it with different arguement

```javascript
function default(name,cit=mirpur) {
    return `my name is ${name} and i live in ${cit}`
}

console.log(defualt('munna')); // my name is munna and i live in mirpur;
```

## 5. Enhanced Objet Literals Script:

Write a script that uses enhanced `object literals` to create and log an object with methods and computed property names.

```javascript
let bookName = "harry potter and deathly hallows";
let author = "JK Rowlins";
let publishedYear = "1999";

const bookDetails = {
  bookName,
  author,
  publishedYear,
};

console.log(bookDetails);
```
