# Array Feature Requests

## 1. Array Manupulation Script

Write a script that demonstrate the creation of an array, adding and removing elemnets using `push`, `pop`, `shift` and `unshift`.

```javascript
let arr = [1, 2, 3, 4, 5];

sArr.push(10);
sArr.pop();
sArr.shift();
sArr.unshift(23);

console.log(arr);
```

## 2. Array Transformation Script

Create a script that uses `map`, `filter` and `reduce` methods to transform and aggregate array data.

```javascript
const sArr = [3, 23, 45, 23, 23];

const newArr = sArr.map((num) => num * 2);

const evenArr = sArr.filter((num) => num % 2 === 0);

const rdcArr = sArr.reduce((acc, num) => acc + num);

console.log(newArr, evenArr, rdcArr);
```

## 3. Array Iteration Script

Write a script that iterates over an array using both `for` and `forEach` loop and log each element

```javascript
const newArr = ["munn", "lol", "hello"];
for (let el of newArr) {
  console.log(el);
}

newArr.forEach((elm) => console.log(elm));
```

## 4. Two Dimensional Array

Create a script that demonstrate the creation and manipulation of a two dimensional array

```javascript
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
```
