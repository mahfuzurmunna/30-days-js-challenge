class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

//insert at the start
LinkedList.prototype.inserAtBegining = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

//insert at the end
LinkedList.prototype.inersertAtEnd = function (data) {
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
