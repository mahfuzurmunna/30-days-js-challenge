// arrow function

const user = {
  userName: "Munna",
  price: 1000,

  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to the website `);
    // console.log(this);
  },
};

// user.welcomeMessage();

// user.userName = "rahman";
// user.welcomeMessage();
// console.log(this);

function coffee() {
  let userName = "munna";
  //   console.log(userName);
}

coffee();

const addTwo = (num1, num2) => num1 - num2;

console.log(addTwo(23, 3));

// arrow function
const addNum = (num1, num2) => {
  const userName = {
    user: "Munna",
    id: "202303",
  };
  return num1 + num2;
};

// console.log(addNum(23, 24));

const user2 = {
  userName: "hello Goku",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.price}, welcome to the playground`);
    // console.log(this);
  },
};

user2.welcomeMessage();
user2.price = 250;
user2.welcomeMessage();

const myArray = [2, 4, 5, 6];
myArray.forEach((arr) => {
  if (arr % 2 === 0) {
    console.log(arr);
  }
});

// console.log(myArry2);

// console.log(newArr);
const arrowFunction = () => {
  const newArray = {
    name: "hello",
    lastName: "mahfuz",
    welcomeMessage: function (number) {
      console.log(`${this.lastName.toUpperCase()}`);
      console.log(this);
    },
  };

  newArray.welcomeMessage();
};

arrowFunction();
