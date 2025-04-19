let marksHeight = 1.95;
let marskWeight = 92;
let johnsHeight = 1.76;
let johnsWeight = 85;
function calculateBMI(mass, height) {
  return mass / (height * height);
}

const marksBMI = calculateBMI(marskWeight, marksHeight);
const johnsBMI = calculateBMI(johnsWeight, johnsHeight);

const markHasHigherBMI = marksBMI > johnsBMI ? true : false;

console.log(
  markHasHigherBMI
    ? `"Mark's BMI is higher than John's!"`
    : `John's BMI is higher than Mark's!`
);

const markBio = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function (mass, height) {
    this.bmi = this.mass/this.height*this.height;
    return this.bmi
  },
};

const johnBio = {
  name: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = (this.mass / this.height) * this.height;
    return this.bmi;
  },
};

const markBMI = markBio.calcBMI();
const johnBMI = johnBio.calcBMI();

const result =
  markBMI > johnBMI
    ? `${markBio.name}'s BMI (${markBMI}) is higher than ${johnBio.name} (${johnBMI})`
    : `${johnBio.name}'s BMI (${johnBMI}) is higher than ${markBio.name} (${markBMI})`;

console.log(result);
