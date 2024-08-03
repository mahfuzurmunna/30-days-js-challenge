class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello my name is ${this.name} and i'm ${this.age} years old`;
  }
}

module.exports = Person;
