const arr = [1, 2, 3, 4, 5];
// console.log(arr[0], arr[arr.length - 1]);

arr.push(20);
arr.pop();
arr.shift(11);
arr.unshift();
console.log(arr);

const newArr = arr.map((num) => {
  return num * 3;
});
const onlyEven = newArr.filter((num) => {
  return num % 2 === 0;
});
// console.log(onlyEven);

for (let i = 0; i < arr.length; i++) {
  //   console.log(newArr[i]);
}

newArr.forEach((num) => {
  //   console.log(num);
});

let rows = 3;
let cols = 3;
let matrix = [];
for (let i = 0; i < rows; i++) {
  matrix[i] = [];

  for (let j = 0; j < cols; j++) {
    matrix[i][j] = i * cols + j + 1;
  }
}
console.log(matrix[1][2]);
