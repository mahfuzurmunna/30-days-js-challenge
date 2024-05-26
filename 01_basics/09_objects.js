// object literals
// object create
"use strict";

const mySym = Symbol("key1");

const JsUser = {
  name: "Mahfuz",
  age: 27,
  [mySym]: "key2",
  "full name": "Mahfuzur Rahman Munna",
  location: "Mirpur",
  email: "mahfuzurrm07@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
// console.log(typeof JsUser[mySym]);
// console.log(typeof mySym);

// Object.freeze(JsUser);

JsUser.email = "mahfuz@gmail.com";

JsUser.newId = "CSE202303051";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log(`Hello world!, ${this.name}`);
};
console.log(JsUser.greeting());
