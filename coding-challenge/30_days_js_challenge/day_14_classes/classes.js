class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `My name is ${this.name} and i'm ${this.age} years old`;
  }

  updateAge(newage) {
    this.age = newage;
    return this.age;
  }
}

const Fatema = new Person("Fatema", 16);
const Munna = new Person("Munna", 27);

//27 years 160 days and running;

console.log(Fatema.greet());
console.log(Munna.greet());

Fatema.updateAge(24);

console.log(Fatema.greet());

class Student extends Person() {
  constructor(studentId) {
    this.studentId = studentId;
  }
}
