const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  let bill = bills[i];
  const tip = calcTip(bill);
  tips.push(tip);

  let totalBill = bill + tip;

  total.push(totalBill);
}

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let arrElement = arr[i];
    sum = arrElement + sum;
  }
  const average = sum / arr.length;
  return average;
};

console.log(calcAverage(total));
console.log(calcAverage(tips));
console.log(calcAverage(bills));
