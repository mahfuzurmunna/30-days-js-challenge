# Day 04: Loops

## Number Printing Script

Write a script that prints numbers from 1 to 10 using a for loop and a while loop.

```javascript
i = 1;
for (; i <= 10; i++) {
  console.log(i);
}
while (i <= 10) {
  console.log(i);
  i++;
}
```

## Multiplication Talbe Script

Create a script that prints the multiplication table of 5 using a for loop.

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(5 * i);
}
```

## Pattern Printing Script

Write a script that prints a pattern of stars using nested loops.

```javascript
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
```

## Sum Calculation Script

Write a script that calculates the sum of numbers from 1 to 10 using a while loop.

```javascript
let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}
```

## 5. Factorial Calculation Script

Create a script that calculates the factorial of a number using a do...while loop.

```javascript
function factorial(num) {
  let sum = 1;
  do {
    sum *= num;
    num--;
  } while (num > 1);
  console.log(sum);
}
```
