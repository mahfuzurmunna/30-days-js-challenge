const obj = {
  title: "himu",
  author: "humyaun",
  year: 2006,
  nestedObj: {
    name: "library",
    books: ["harry", "himu", "badshahi namdar"],
  },
  method: function () {
    console.log(this.title, this.year);
  },
  book: function (year) {
    this.year = year;
    return year;
  },
};

// console.log(obj.nestedObj.books);
// obj.method();

for (let keys in obj) {
  console.log("properties: ", keys);
  console.log("values: ", obj[keys]);
}

// console.log(obj.book(2010));
obj.book(2019);
console.log(obj.year);

console.log(Object.keys(obj));
console.log(Object.values(obj));
