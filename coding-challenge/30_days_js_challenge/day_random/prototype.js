// const personMethods = {
//   eat(name) {
//     console.log(`${this.name} is eating`);
//   },

//   sleep(name) {
//     console.log(`${this.name} is sleeping`);
//   },
// };

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype = {
  eat(name) {
    console.log(`${this.name} is eating`);
  },

  sleep(name) {
    console.log(`${this.name} is sleeping`);
  },
};

const sakib = Person("Sakib", 55);

// sakib.eat();
const munna = new Person("Munna", 27);
munna.sleep();
// console.log(sakib);

// console.log(player.age);

function test() {}

console.dir(test);

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

const mahfuz = new Human("mahfuz", 30);

mahfuz.sleep();

let persons = new Array();

persons.push("ponnya");
console.log(persons);
