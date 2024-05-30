const calcTip = (bill) => {
  return bill > 50 && bill < 300 ? (bill * 15) / 100 : (bill * 20) / 100;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totalBill = bills.map((map, index) => {
  const tip = tips[index];
  return map + tip;
});

// Calculate total bills and create the summary strings
// let totalBill = bills.map((bill, index) => {
//   let tip = tips[index];
//   return `The bill was ${bill}, the tip was ${tip}, and total bill was ${
//     bill + tip
//   }`;
// });
// console.log(totalBill);

console.log(totalBill);
