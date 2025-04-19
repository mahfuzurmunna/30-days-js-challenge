for (let i = 0; i <= 10; i++) {
  // console.log(i);
}
function fiveTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(i * num);
  }
}
// fiveTable(5);

let i = 1;
let sum = 0;
while (i <= 10) {
  sum = sum + i;
  i++;
}

let numbers = 10;

while (numbers > 1) {
  console.log(numbers);
  numbers--;
}

console.log(numbers);
// num = 4, i = 3;  4x3x2x1 => 1x4 = 4; 4x3 = 12; 12 x 2 = 24
function fact(num) {
  let res = 1;
  for (i = num; i < 1; i--) {
    res = res * i;
  }
  return res;
}

console.log(fact(4));
