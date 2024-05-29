// this method :

const thisObject = {
  userName: "Munna",
  id: "cse202303061",
  courses: ["data structure", "algorithm", "machine learning"],
  courseName: function () {
    console.log(
      `${this.userName} enorlled into these courses: ${this.courses.map(
        (course) => {
          return course;
        }
      )}`
    );
    // console.log(this);
  },
};

// thisObject.courseName();

// In node environment : console.log(this )-> { } empty object !

function coffee() {
  let userName = "Goku";
  console.log(this.userName); //we cannot use this into a function but we can in object !
}

coffee();

const arrowCoffee = () => {
  let userName = "Luffy";
  console.log(this.userName);
};

arrowCoffee();

const addTwo = (num1, num2) => num1 + num2; //implicit return

const addThree = (num1, num2, num3) => {
  if (num1 > num2) {
    return (num1 = num3);
  } else if (num2 > num3) {
    return (num2 = num1);
  }
};

// console.log(addThree(3, 1, 2));

const objectFunc = () => {
  return { userName: "Munna" };
};

// console.log(objectFunc());
