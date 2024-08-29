// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

const { result } = require("lodash");

// normal approach
function factorial(num) {
  let result = 1;

  for (let i = num; i > 1; i--) {
    // i = 4 , 3 , 2
    result = result * i;
  }

  return result;
}
// console.log(factorial(4));

// recursive approach
function recursiveFactorial(num) {
  //base case
  if (num === 1) {
    return 1;
  }

  //recursive case
  return num * recursiveFactorial(num - 1);
}

// console.log(recursiveFactorial(7));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibo(num) {
  const cache = {};

  //base case
  if (num <= 1) {
    return num;
  }

  //recursive case
  return fibo(num - 2) + fibo(num - 1);
}

// Activity 2: Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases

const arr = [10, 20, 30, 40, 50, 60, 70, 80];

function sumArr(arr, index = 0) {
  //base case
  if (arr.length === index) {
    return 0;
  }
  //recursive case
  return arr[index] + sumArr(arr, index + 1);
}

// console.log(sumArr(arr));

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function findMax(arr) {
  //base case
  if (arr.length === 1) {
    return arr[0];
  }
  //recursive case
  let lastValue = findMax(arr.slice(1));
  return Math.max(arr[0], lastValue);
}

// console.log(findMax(arr));

function findMaxSecond(arr, index = 0, currentMax = -Infinity) {
  //base case
  if (index === arr.length) {
    return currentMax;
  }
  if (arr[index] > currentMax) {
    currentMax = arr[index];
  }

  return findMaxSecond(arr, index + 1, currentMax);
}

// console.log(findMaxSecond(arr));

// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function recursiveReverseString(str) {
  //base case
  if (str.length === 1) return str;
  const firstLetter = str[0];

  //recursive case
  return recursiveReverseString(str.substring(1)) + firstLetter;
}

let str = "hannah";

// console.log(recursiveReverseString(str));

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function recursivePalindrome(str) {
  if (str.length <= 1) return true;
  //   console.log(str)

  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return recursivePalindrome(str.substring(1, -1));
}

// console.log(recursivePalindrome(str));

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.




// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countOccurance(array, element) {
  let count = 0;

  // base case
  if(array.length === 0) {
    return 0;
  }

  //recursive case
  if(array[0] === element) count++;

  return count + countOccurance(array.slice(1),element);

}

let newArr = [50, 20, 30, 50, 50];
console.log(countOccurance(newArr, 50));


// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.


class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertion (key) {
        const newNode = new Node(key);
        if(this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root,newNode);
        }
    }

    insertNode (node,newNode) {
        if(node.key > newNode.key) {
            if(node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left,newNode);
            }
        } else {
            if(node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right,newNode);
            }
        }
    }

    inOrderTraversal () {
        const result = [];
        this.inorder(this.root,result);
        return result;
    }

    inorder (node,result) {
        if(node !== null) {
            this.inorder(node.left,result);
            result.push(node.key);
            this.inorder(node.right,result);
        }
    }
}

let newBST = new BinarySearchTree();

newBST.insertion(17);
newBST.insertion(20);
newBST.insertion(40);
newBST.insertion(15);
newBST.insertion(18);
newBST.insertion(16);
newBST.insertion(10);
newBST.insertion(39);
console.log(newBST.inOrderTraversal())
// console.log(newBST)


// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

function calculateDepth(root) {
    if (root === null) return 0;

    const leftValues = calculateDepth(root.left);
    const rightValues = calculateDepth(root.right);

    return Math.max(leftValues,rightValues) + 1 ;
}

console.log("Depth of the binary tree:", calculateDepth(newBST.root));
