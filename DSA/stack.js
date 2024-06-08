class Stack {
  constructor() {
    this.stack = [];
  }
  add(data) {
    this.stack.push(data);
  }

  remove() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }
  contain(element) {
    return this.stack.includes(element);
  }

  reverse() {
    this.stack.reverse();
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {}
  }
}
