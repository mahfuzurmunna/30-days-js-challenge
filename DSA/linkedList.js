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
