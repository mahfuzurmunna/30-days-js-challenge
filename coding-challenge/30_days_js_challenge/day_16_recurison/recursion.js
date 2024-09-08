/*
--------
Activity 1: Basic Recursion
--------
*/

const { result } = require("lodash");

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

function sumOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  return arr[0] + sumOfArray(arr.slice(1));
}
// console.log(sumOfArray([1, 2, 3]));

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxElement(arr) {
  if (arr.length === 1) {
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

function reverseStr(str) {
  if (str.length === 0) {
    return str;
  }

  return reverseStr(str.substring(1)) + str[0];
}

// console.log(reverseStr('munna'));

function palindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return palindrome(str.substring(1, str.length - 1));
}

// console.log(palindrome("racecar"));

/*
--------
Activity 4: Recursive Search
--------
*/

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
const sortedArray = [1, 2, 5, 5, 6, 9];

function iterativeBS(arr, target) {
  let first = 0;
  let last = arr.length;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      last = mid - 1;
    }
    if (arr[mid] < target) {
      first = mid + 1;
    }
  }
  return false;
}

function recursiveBS(arr, key, l = 0, h = arr.length - 1) {
  if (l > h) {
    return false;
  }

  let mid = Math.floor((l + h) / 2);

  if (arr[mid] === key) {
    return mid;
  }

  if (key < arr[mid]) {
    return recursiveBS(arr, key, l, mid - 1);
  } else {
    return recursiveBS(arr, key, mid + 1, h);
  }
}

// console.log(recursiveBS(sortedArray, 2));

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function occOfTarget(arr, key, index = 0) {
  if (index >= arr.length) return 0;
  if (arr[index] === key) {
    return 1 + occOfTarget(arr, key, ++index);
  } else {
    return occOfTarget(arr, key, ++index);
  }
}

console.log(occOfTarget(sortedArray, 5));

/*
--------
Activity 5: Tree Traversal (Optional)
--------
*/

class bstNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new bstNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  isEmpty() {
    return this.root ? true : false;
  }

  insertNode(node, newNode) {
    if (node.value > newNode.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (node === null) return null;

    if (node.value > value) {
      node.left = this.deleteNode(node.left, value);
    } else if (node.value < value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        let tempNode = this.smallestNode(node.right);
        node.value = tempNode.value;
        node.right = this.deleteNode(node.right, tempNode.value);
      }
    }

    return node;
  }

  smallestNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  inorderTraversal() {
    const result = [];
    this.inOrder(this.root,result);
    return result
  
  }

  inOrder (node,result) {
    if(node !== null) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right,result);
    }
  }

  depth() {
    return this.depthCount(this.root);
  }

  depthCount(node) {
    if(node === null) return 0;
    let leftTree = this.depthCount(node.left);
    let rightTree = this.depthCount(node.right);

    return Math.max(leftTree,rightTree) + 1;
  }
}

const newBST = new binarySearchTree();

newBST.add(10);
newBST.add(20);
newBST.add(30);
newBST.add(40);
newBST.add(5);
newBST.add(7);
newBST.add(4);
newBST.add(15);
// newBST.remove(15)
// console.log(newBST.root.right);

console.log(newBST.depth())


// power function using recurison 

function pow (m,n) {
  if( n === 0) return 1;

  if(n % 2 === 0) {
    return pow(m * m, (n/2));
  } else {
    return m * pow(m * m, (n-1)/2);
  }
}

console.log(pow(5,2));