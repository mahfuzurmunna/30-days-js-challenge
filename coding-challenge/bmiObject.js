const markData = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBmi: function (mass, height) {
    this.age = this.mass / (this.height * this.height);
    return this.age;
  },
};
const johnData = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
  calcBmi: function (mass, height) {
    this.age = this.mass / (this.height * this.height);
    return this.age;
  },
};

console.log(
  `${
    markData.calcBmi() > johnData.calcBmi()
      ? `${markData.name}'s BMI is ${markData
          .calcBmi()
          .toFixed(2)} is higher than ${johnData.name}'s BMI ${johnData
          .calcBmi()
          .toFixed(2)}`
      : `${johnData.name}'s BMI is ${johnData
          .calcBmi()
          .toFixed(2)} is higher than ${markData.name}'s BMI ${markData
          .calcBmi()
          .toFixed(2)}`
  }`
);
