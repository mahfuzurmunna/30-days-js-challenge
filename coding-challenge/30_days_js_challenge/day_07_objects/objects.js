const bookDetails = {
  title: "Rokomari",
  author: "ishan",
  year: 2022,
  method: function () {
    return `The book title is ${this.title} and its author is ${this.author}`;
  },
  updateYear: function (year) {
    this.year = year;
    return this.year;
  },
  library: {
    name: "gronthagar",
    books: [
      {
        name: "great book",
        author: "gosh",
      },
      {
        name: "the guide",
        author: "williams",
      },
    ],
  },
};



bookDetails.updateYear(2025);
// bookDetails.library.books.map((name) => console.log(name.name))
// console.log(bookDetails.method());

for (const key in bookDetails) {
  if (Object.prototype.hasOwnProperty.call(bookDetails, key)) {
    const element = bookDetails[key];
    console.log(element)
    
    
  }
}
console.log(
  Object.values(bookDetails))
