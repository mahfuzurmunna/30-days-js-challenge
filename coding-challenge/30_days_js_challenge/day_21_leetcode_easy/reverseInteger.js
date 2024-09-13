var reverse = function (x) {
  let numStr = x.toString();
  let numArr = numStr.split("");
  let result = "";

  for (let i = numArr.length - 1; i >= 0; i--) {
    if (numArr[i] === 0) {
      continue;
    }
    result += numArr[i];
  }

  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0;
  }
  if (x < 0) {
    result = parseInt(result);
    return -result;
  } else {
    return parseInt(result);
  }
};

let num = 1534236469;
let numStr = num.toString();
let numArr = numStr.split("");
// console.log(Array.from(num));
// console.log(num)

console.log(reverse(num));
