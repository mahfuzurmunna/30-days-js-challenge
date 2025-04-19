const munna = {
  firstName: "Mahfuz",
  lastName: "Schemedtmann",
  birthYear: 1997,
  job: "unemployed",
  friends: ["akash", "nayon", "emon"],
  hasDriverLicense: false,

  //   calcAge: function () {
  //     console.log(this)
  //     this.age = 2025 - this.birthYear;
  //     return this.age;
  //   },

  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
  getSummery: function () {
    return `${this.firstName} is a ${this.calcAge()} years old and he has ${
      this.hasDriverLicense ? "a" : "no"
    } drivers license`;
  },
};

const myArr = [
  "munna",
  "mahfuz",
  2025 - 1997,
  "jobless",
  ["akash", "emon", "nayon"],
  true,
];
const types = [];
for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i], typeof myArr[i]);
  types.push(typeof myArr[i]);
}

for (let i = 0; i < types.length; i++) {
  if (typeof types[i] !== "string") continue;

  console.log("new type:", types[i], typeof types[i]);
}
console.log(types);
