const { sum } = require("lodash");

let oneToFive = [1, 2, 3, 4, 5];

// console.log(oneToFive[0], oneToFive[oneToFive.length - 1]);

oneToFive.push(20);
oneToFive.pop();

oneToFive.shift();

oneToFive.unshift(10);
// console.log(oneToFive);

const newArr = oneToFive.map((num, index, array) => {
  return num * 3;
});

const evenArr = newArr.filter((num) => num % 2 === 0);

const sumOfAll = newArr.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(sumOfAll);

for (let i = 0; i < newArr.length; i++) {
  const elemnt = newArr[i];

  console.log("index:", i, elemnt);
}

newArr.forEach((num, index) => {
  return num * 5;
});

console.log(newArr);

function firstTask() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("First task is completed");
    }, 1000);
  });
}

function secondTask() {
  return new Promise((res, rej) => {
    res("Second task is compelted");
  });
}

function thirdTask() {
  return new Promise((res, rej) => {
    let success = false;
    if(success) {
      res("Third task is complted");
    } else {
      rej("third task is incompelte❌")
    }
    
    
  });
}

firstTask()
  .then((result) => {
    console.log(result);
    return secondTask();
  })
  .then((result) => {
    console.log(result);
    return thirdTask();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log("Error", error)).finally(()=>
  setTimeout(()=> {
    console.log("all tasks are compelted")
  },2000))
