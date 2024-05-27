// arrow function

const user = {
  userName: "Munna",
  price: 1000,

  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to the website `);
    console.log(this);
  },
};

// user.welcomeMessage();

// user.userName = "rahman";
// user.welcomeMessage();
// console.log(this);

function coffee() {
  let userName = "munna";
  console.log(userName);
}

coffee();
