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

// console.log(book.title, book.author);
console.log(book.updateYear(2013));
// console.log(book.thisMethod());
for (const prop in book) {
  console.log(prop);
}

console.log(Object.keys(book));
console.log(Object.values(book));
