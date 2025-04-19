function checkOddEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

function squareNumber(num) {
  return num * num;
}

function maxOfTwo(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function concatenateStrings(str1, str2) {
  let res = str1 + str2;
  return res;
}

const sumOfTwo = (num1, num2) => {
  return num1 + num2;
};

const charExists = (str, char) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) return true;
  }
  return false;
};

console.log(charExists('munna','e'))

function parameterFunction (val1='goku', val2='munna') {
  return val1,val2;
}

function person (name='munna',age=20) {
  return `My name is ${name}, my age is ${age}, nice to meet you`
} 



console.log(person())

// console.log(sumOfTwo(30, 40));
// console.log(concatenateStrings("mahfuzr", "munna"));
