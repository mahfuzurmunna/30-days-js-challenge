/** 
------------------------ 
Activity 1: Linked List
------------------------
**/

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const newNode = new Node(value);

    if (!this.head) return (this.head = newNode);

    let lastNode = this.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;
  }

  remove() {
    if (!this.head) return null;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prevNode = this.head;
    let lastNode = this.head.next;

    while (lastNode.next) {
      prevNode = lastNode;
      lastNode = lastNode.next;
    }

    prevNode.next = null;
  }

  display() {
    if (!this.head) return null;

    const values = [];

    let currNode = this.head;

    while (currNode) {
      values.push(currNode.value);
      currNode = currNode.next;
    }
    return values.join(" -> ");
  }
}

// Example usage:
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
console.log(list.display()); // Output: "1 -> 2 -> 3"
list.remove();
console.log(list.display()); // Output: "1 -> 2"
list.remove();
console.log(list.display()); // Output: "1"
list.remove();
console.log(list.display()); // Output: null
