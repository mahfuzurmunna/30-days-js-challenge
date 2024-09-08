## Day-16 Recursion

### 1. Factorial and Fibonacci Script:

Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.

```javascript
//factorial
function factorial(number) {
  if (number === 0) return 1;

  return factorial(number - 1) * number;
}

//fibonacci
function fibo(number, cache = {}) {
  //base case
  if (number <= 1) return number;

  for (number in cache) {
    return cache[number];
  }

  //recursion
  cache[number] = number;

  return fibo(n - 2) + fibo(n - 1);
}
```

### 2.Array Recursion Script:

Create a script that includes recursive functions to find the sum and maximum element of an array.

```javascript
//sum of array
function sumOfArr(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] + sumOfArr(arr.slice(1));
}
//max element
function maxELemnetOfArray(arr) {
  //base case
  if (arr.length === 1) return arr[0];

  return Math.max(arr[0], maxElement(arr.slice(1)));
}
```

### 3. String Recursion Script:

Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.

```javascript
//reverse string
function reverseStr(str) {
  if (str.length === 0) return "";
  return reverseStr(str.substring(1)) + str[0];
}

//palindrome search
function palindrome(str) {
  if (str.legnth <= 1) return true;

  if (str[0] !== str[str.length - 1]) return false;

  palindrome(str.substring(1, -1));
}
```

### 4. Recursive Search Script:

Create a script that includes recursive functions for binary search and counting occurrences in an array.

```javascript
function binarySearch (arr,target,l,h) {
    if(l > h) return false;
    l = 0;
    h = arr.length-1;

    let mid = Math.floor((l+h)/2);

    if(arr[mid] === target) {
        return mid;
    }

    if(arr[mid] > target) {
        binarySearch(arr,target,l,mid-1);
    } else {
        binarySearch(arr,target,mid+1,l);
    }
}


//occurence
function countOccurance(arr,key,index=0) {
    if(index >= arr.length) return 0;

    if(arr[index] === key) {
        return 1 + countOccurance(arr,key,index+1)
    } else {
        return countOccurance(arr,key,index+1);
    }
}
```



### 5. Tree Traversal Script:

Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (optional).

```javascript
class bstNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
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

  inorderTraversal () {
    const result = [];
    this.inorder(this.root,result);
    return result;
  }

  inOrder(node, result) {
   if(node === null) return null;
   
   this.inOrder(node.left,result);
   result.push(node.value);
   this.inOrder(node.right,result);
  }

  depthCalc() {
    if(!this.root) return null;

    return this.depth(this.root);
  }

  depth(node) {
    let leftNodes = depth(node.left);
    let rightNodes = depth(node.right);

    return Math.max(leftNodes,rightNodes) + 1;
  }
}


```