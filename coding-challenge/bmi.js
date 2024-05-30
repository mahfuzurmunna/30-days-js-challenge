const bmiMeasure = (mass, height) => {
  return mass / (height * height);
};

const bmiData = [
  (markData = {
    markMass1: 78,
    markHeight1: 1.69,
    markMass2: 95,
    markHeight2: 1.88,
  }),
  (johnData = {
    johnMass1: 92,
    johnHeight1: 1.95,
    johnMass2: 85,
    johnHeight2: 1.76,
  }),
  (myData = {
    myMass: 74,
    myHeight: 1.73,
  }),
];

const markBmi = bmiMeasure(bmiData[0].markMass1, bmiData[0].markHeight1);

const johnBmi = bmiMeasure(bmiData[1].johnMass1, bmiData[1].johnHeight1);

const myBmi = bmiMeasure(
  bmiData[2].myMass.toFixed(2),
  bmiData[2].myHeight.toFixed(2)
);

if (markBmi > johnBmi) {
  console.log(
    `Marks's BMI (${markBmi}) is higher than john's BMI (${johnBmi})`
  );
} else {
  console.log(`John's BMI (${johnBmi}) is higher than mark's BMI (${markBmi})`);
}
