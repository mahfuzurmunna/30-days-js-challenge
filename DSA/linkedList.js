class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

// insert at the begining
LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

//insert at the end
LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let last = this.head;
  while (last.next) {
    last = last.next;
  }

  last.next = newNode;
};

//insert at given node

LinkedList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) {
    console.log("This given prev node cannot be nul");
    return;
  }
  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

// delete first node || delete head
LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
};

// delete last node
LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return; //nothing to delete if linked list empty
  }
  if (!this.head.next) {
    this.head = null; //if there is only one node
    return;
  }

  let secondLast = head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

//delete node by key
LinkedList.prototype.deleteByKey = function (key) {
  //if list is empty
  if (!this.head) {
    console.log("List is empty");
    return;
  }

  //data found at head
  if (this.head.data === key) {
    this.head = this.head.next;
  }

  let currentValue = this.head;

  while (currentValue.next !== null) {
    if (currentValue.next.data === key) {
      currentValue.next = current.next.next;
      return;
    }
    currentValue = currentValue.next;
  }

  console.log("No node found with key:", key);
};

//search operation

LinkedList.prototype.search = function (key) {
  let currentValue = this.head;
  while (currentValue) {
    if (current.data === key) {
      return true;
    }
  }

  return false;
};

//traversal
LinkedList.prototype.printList = function () {
  let currentValue = this.head;
  let listValues = [];

  while (current) {
    listValues.push(currentValue.data); //add data to list
    currentValue = current.next; //move to next node
  }

  console.log(listValues.join(" -> "));
};

//reverse a linked lit
LinkedList.prototype.reverse = function () {
  let current = this.head;
  let prev = null;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  this.head = prev;
};

const node1 = new Node(4);
const node2 = new Node(5);
const node3 = new Node(8);

node1.next = node2;
node2.next = node3;

console.log(Node);
