for (let i = 1; i <= 10; i++) {
  //   console.log(i);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(i * 5);
}

let i = 10;

while (i >= 1) {
  //   console.log("this:", i);
  i--;
}
// console.log(sum);

let num = 1;

do {
  //   console.log(num);
  num++;
} while (num < 6);

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

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  if (i === 7) {
    break;
  }
  console.log(i);
}

function factorial(num) {
  let sum = 1;
  do {
    sum *= num;
    num--;
  } while (num > 1);
  console.log(sum);
}

factorial(5);
