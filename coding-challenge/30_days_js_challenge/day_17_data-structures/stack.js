/** 
------------------------ 
Activity 2: Stack
------------------------
**/

class Stack {
  constructor(capacity = 100) {
    this.stack = [];
    this.capacity = 100;
  }

  push(value) {
    if (this.capacity === this.stack.length) return "Stack is full";
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

function reverseStrUsingStack(str) {
  const newStack = new Stack();
  let result = '';
  for (const letter of str) {
    newStack.push(letter);

  }
  for(let i = 0; i<str.length; i++) {
    result += newStack.pop();
  }
  // let result = "";

  // for (let i = 0; i < newStack.length; i++) {
  //   result += newStack[i];
  // }
  return result;
}

console.log(reverseStrUsingStack("munna"));
