// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
// normal approach
function factorial (num) {
    let result = 1;

    for(let i = num; i > 1; i--) {
        // i = 4 , 3 , 2 
        result = result * i;
    }

    return result;
}
// console.log(factorial(4));

// recursive approach
function recursiveFactorial (num) {
      //base case
      if(num === 1) {
        return 1;
      }

      //recursive case
      return num * recursiveFactorial(num - 1);
}

// console.log(recursiveFactorial(7));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibo (num) {
    const cache = {};
    
    //base case
    if(num <= 1) {
        return num;
    }

    //recursive case
    return fibo(num - 2) + fibo (num -1);
}

// Activity 2: Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases

const arr = [100,10,20,30,40,50,60,70,80];

function sumArr (arr,index =0) {
    //base case
    if(arr.length === index){
        return 0;
    }
    //recursive case
    return arr[index] + sumArr(arr,index+1);
}

// console.log(sumArr(arr));

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function findMax( arr) {
    //base case
    if(arr.length === 1) {
        return arr[0];
    }
    //recursive case
    let lastValue = findMax(arr.slice(1));
    return Math.max(arr[0],lastValue);
}

console.log(findMax(arr));

function findMaxSecond (arr,index=0,currentMax = -Infinity) {
   
    //base case
    if(index === arr.length) {
        return currentMax;
    }
    if(arr[index] > currentMax) {
        currentMax = arr[index];
    }

    return findMaxSecond(arr,index+1,currentMax);
}

console.log(findMaxSecond(arr));






