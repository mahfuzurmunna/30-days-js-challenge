// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Greeting from ${this.name} who is ${this.age} years old`;
  }

  updateAge(newAge) {
    return (this.age = newAge);
  }

  static genericGreeting() {
    return `Welcome to baba person server`;
  }
}

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
const newPerson = new Person("munna", 26);
newPerson.updateAge(30);
// console.log(newPerson.greeting());

// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

class Student extends Person {
  constructor(name, age, studentId,studentCount) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount += 1;
  }

  getId() {
    return `Student name is ${this.name}, he is ${this.age} years old & his id is: ${this.studentId}`;
  }

  static numberOfStudent () {
    return `Total number of students: ${Student.studentCount}`
  }
}

const newStudent = new Student('mahfuz,',20,"CSE202303061");
// console.log(newStudent.getId());
console.log(Person.genericGreeting());



