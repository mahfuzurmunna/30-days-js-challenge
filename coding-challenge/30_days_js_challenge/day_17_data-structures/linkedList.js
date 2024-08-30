/** 
------------------------ 
Activity 1: Linked List
------------------------
**/

const { last } = require("lodash");

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.

class LlNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  addNodeAtEnd(value) {
    const newNode = new LlNode(value);

    if (this.head === null)return this.head = newNode;

    let lastNode = this.head;

    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;
  }

  removeNodeFromEnd() {
    if(!this.head) return null;
    if(!this.head.next) return this.head = null;

    let currNode = this.head;
    let lastNode = this.head.next;
    
    while(lastNode.next) {
        currNode = lastNode;
        lastNode = lastNode.next;
    }
    currNode.next = null;    
  }

  displayAllNode() {
    if(!this.head) return `Linked list is empty`;
    
    let values = [];
    let currNode = this.head;
    while(currNode) {
        values.push(currNode.value);
        currNode = currNode.next;
    }
    return values.join(' -> ');
  }
}

const sLL = new SinglyLinkedList();

sLL.addNodeAtEnd(10);
sLL.addNodeAtEnd(40);
sLL.addNodeAtEnd(80);
// sLL.addNodeAtEnd(25);
// sLL.removeNodeFromEnd();
console.log(sLL.displayAllNode())
// console.log(sLL)

