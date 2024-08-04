class Person {
  static studentCount = 0;
  constructor(name, age, firstName, lastName) {
    this.name = name;
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    return `My name is ${this.name} and i'm ${this.age} years old`;
  }

  updateAge(newage) {
    this.age = newage;
    return this.age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Student extends Person {
  static studentCount = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount += 1;
    console.log(`TOtal number of students: ${Student.studentCount}`);
  }

  printId() {
    return this.greet() + ", his/her id is " + this.studentId;
  }

  greet() {
    return `My name is ${this.name} and ${this.age} and her id is ${this.studentId}`;
  }

  gretter(firstName, lastName) {
    return `my full name is ${firstName} ${this.name} ${lastName}`;
  }

  setter(firstName, lastName) {}
}

class Account {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposite(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log(`Depossit amount must be positive`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}. New balance ${this.#balance}`);
    } else {
      console.log(`Invalid withdraw amount`);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

let Fatema = new Person("Fatema", 16);
const Munna = new Person("Munna", 27);

//27 years 160 days and running;

// console.log(Fatema.greet());
// console.log(Munna.greet());

// Fatema.updateAge(24);

console.log(Fatema.greet());

// Fatema = new Student("fatema", 16, 199046020);

// console.log(Fatema.printId());
// console.log(Fatema.greet());

const person = new Person("mahfuzur", "rahman");
console.log(person.fullName);

person.fullName = "Mahfuz ahmed";

console.log(person.fullName);

const myAccount = new Account(1000);

myAccount.deposite(500);
myAccount.withdraw(200);

console.log(myAccount.getBalance());
