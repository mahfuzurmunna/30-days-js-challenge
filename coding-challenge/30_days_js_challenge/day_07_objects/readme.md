# Object Feature Requests

## 1. Book Object Script

Write a script that creates a book object, adds methods to it, and logs its properties and method results

```javascript
const book = {
  name: "himur ache poddo",
  author: "humayon ahmed",
};
console.log(Object.keys(book));
```

## 2. Library Object Script

Create a script that creates a book object, adds methods to it, and logs its properties and method results

```javascript
// Create the book object with properties and methods
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,

  // Method to return a string with the title and author
  getTitleAndAuthor: function () {
    return `${this.title} by ${this.author}`;
  },

  // Method to update the year
  updateYear: function (newYear) {
    this.year = newYear;
    return this.year;
  },
};

// Log the initial properties of the book
console.log("Initial Book Properties:");
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);
console.log(`Year: ${book.year}`);

// Log the result of the getTitleAndAuthor method
console.log("Title and Author:");
console.log(book.getTitleAndAuthor());

// Update the year and log the updated year
const updatedYear = book.updateYear(2023);
console.log("Updated Year:");
console.log(updatedYear);

// Log the updated properties of the book
console.log("Updated Book Properties:");
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);
console.log(`Year: ${book.year}`);
```

## 3. Object Iteration Script

Write a script that demonstrate iterating over an objects properties using `for...in` loop and `Object.keys/Object.value`

```javascript
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,

  // Method to return a string with the title and author
  getTitleAndAuthor: function () {
    return `${this.title} by ${this.author}`;
  },

  // Method to update the year
  updateYear: function (newYear) {
    this.year = newYear;
    return this.year;
  },
};

for (const prop in book) {
  console.log(prop);
}

console.log(Object.keys(book));
console.log(Object.values(book));
```
