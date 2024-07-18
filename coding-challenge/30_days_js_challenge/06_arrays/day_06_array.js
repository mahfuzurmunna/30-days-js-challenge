let sArr = [1, 2, 3, 4, 5];

console.log(sArr);

sArr.push(10);
sArr.pop();
sArr.shift();
sArr.unshift(23);

console.log(sArr);

const newArr = sArr.map((num) => num * 2);

const evenArr = sArr.filter((num) => num % 2 === 0);

const rdcArr = sArr.reduce((acc, num) => acc + num);

console.log(rdcArr);

sArr.forEach((num) => console.log(num));

let mArr = [
  [3, 1, 5],
  [4, 3, 6],
  [6, 8, 2],
];

console.log(mArr[1][0]);
