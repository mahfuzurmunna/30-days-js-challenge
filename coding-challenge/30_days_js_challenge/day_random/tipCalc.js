/**
 Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
 */

const bill = 40;
let tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);

function calcTip(bill) {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip = (bill * 15) / 100;
  } else {
    tip = (bill * 20) / 100;
  }
  return tip;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = bills + tips;
console.log(tips, total);

const billsArr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tipsArr = [];
const totalArr = [];

function calcTipTwo(bill) {
  for (let i = 0; i < billsArr.length; i++) {
    if (billsArr[i] >= 50 && billsArr[i] <= 300) {
      tipsArr.push((billsArr[i] * 15) / 100);
      totalArr.push(billsArr[i] + tipsArr[i])
    } else {
      tipsArr.push((billsArr[i] * 20) / 100);
      totalArr.push(billsArr[i] + tipsArr[i])
    }
  }
}

calcTipTwo(billsArr);
console.log("tips array",tipsArr, "total array", totalArr)
