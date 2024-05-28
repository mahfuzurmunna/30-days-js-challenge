//scopes in javascript
const name = "munna"; //global scope
if (true) {
  let a = 10; // block scope
  const b = 20;
  let c = 50;
}

console.log(c);

for (let i = 0; i < 10; i++) {
  //   console.log(i);
}

function one() {
  const userName = "hitesh";

  function two() {
    const website = "youtube";
    // console.log(userName);
  }

  //   console.log(website);

  two();
}

one();

if (true) {
  const userName = "mahfuz";
  if (userName === "mahfuz") {
    const website = "facebook";
    // console.log(userName);
  }
  //   console.log(website);
}

// console.log(userName);

//mini hoisting

// console.log(normal(20));
function normal(number) {
  return number + 10;
}

const functionInVariable = function abNormal(num) {
  return num * num + 2;
};
// console.log(functionInVariable(10));
