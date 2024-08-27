const person = {
  name: "fatema",
  age: "25",
  greeting: function () {
    return `my name is ${this.name} and i am ${this.age}`;
  },
};

module.exports = person;
