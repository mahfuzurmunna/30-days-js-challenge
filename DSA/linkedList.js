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

  insertMiddle(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let slow = this.head;
      let fast = this.head;

      while (fast && fast.next && fast.next.next) {}
    }
  }
}
