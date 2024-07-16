for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}

let sum = 0;

let j = 1;

while (j <= 10) {
  sum += j;
  j++;
}
console.log("sum of 1-> 10: " + sum);

do {
  console.log(j);
  j++;
} while (j <= 5);

function factorial(n) {
  let q = 1;
  let factorial = 1;
  do {
    factorial = factorial * q;
    q++;
  } while (q <= n);

  console.log(factorial);
}

factorial(6);

for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    if (j == 1) {
      pattern += "\x1b[31m*\x1b[0m "; // Red asterisk
    } else {
      pattern += "* "; // White asterisks
    }
  }
  console.log(pattern);
}

let control = 1;

for (let c = 1; c <= 10; c++) {
  if (c === 7) break;
  console.log(c);
}
