const container = document.querySelector(".container");

container.style.backgroundColor = "blue";

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype = {
  eat() {
    console.log(`${this.name} is eating`);
  },

  play() {
    console.log(`${this.name} is playing`);
  },
};

const newPerson = new Person("lul", 1000);
console.log(newPerson);

newPerson.eat();
