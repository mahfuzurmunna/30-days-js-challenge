/** 
------------------------ 
Activity 2: Stack
------------------------
**/

class Stack {
  constructor(capacity = 100) {
    this.stack = [];
    this.capacity = capacity;
    this.top = -1;
  }

  add(data) {
    if (this.top === this.capacity) return `Stack is overloaded`;
    this.top++;
    this.stack.push(data);
  }
  remove() {
    if(this.isEmpty()) return `Stack is empty`;
    this.top--;
    return this.stack.pop();
  }

  isEmpty() {
    return this.top < 0;
  }

  peek() {
    return this.stack[this.top];
  }
}

const stack = new Stack();

stack.add(20);
stack.add(30);
stack.add(50);
stack.add(60);
stack.remove();
// console.log(stack.peek());

const stringStack = new Stack();

function reverseString(string) {
  let stringArr = [];

  for (let i = 0; i < string.length; i++) {
    stringStack.add(string[i]);
  }
  for (let i = 0; i < string.length; i++) {
    stringArr.push(stringStack.remove());
  }

  //   console.log(stringStack)
  return stringArr.join('');
}

console.log(reverseString('munna'))


