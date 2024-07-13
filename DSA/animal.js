class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  makeSound() {
    console.log("make sound");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // Pass the name to the parent class constructor
  }

  makeSound() {
    super.makeSound(); // Call the parent class's method
    console.log("Gheu gheu"); // Add the dog-specific sound
  }
}

let animal;

animal = new Dog();

animal.makeSound();
console.log(animal.name);
