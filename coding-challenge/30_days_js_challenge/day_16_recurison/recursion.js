/*
--------
Activity 1: Basic Recursion
--------
*/


// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n) {
  if (n === 1) return n;
  return factorial(n - 1) * n;
}

// console.log(factorial(5));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function Fibonacci(n) {
  if (n <= 1) return n;

  return Fibonacci(n - 2) + Fibonacci(n - 1);
}

// console.log(Fibonacci(7));

/*
--------
Activity 2: Recursion with Arrays
--------
*/

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumOfArray (arr) {
  if(arr.length === 1) {
    return arr[0];
  }

  return arr[0] + sumOfArray(arr.slice(1));


}
// console.log(sumOfArray([1, 2, 3]));

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxElement(arr) {
   if(arr.length === 1) {
    return arr[0];
   }

  return Math.max(arr[0], maxElement(arr.slice(1)));
}

// console.log(maxElement([10000000,1000000000,2000,3,100000 ]));

/*
--------
Activity 3: String Manipulation with Recursion
--------
*/

function reverseStr (str) {
  if(str.length === 0) {
    return str;
  }

  return  reverseStr(str.substring(1)) + str[0];
}

// console.log(reverseStr('munna'));

function palindrome (str) {
  
}
