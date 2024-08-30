class Queue {
  constructor(capacity = 100) {
    this.queue = [];
    this.front = -1;
    this.rear = -1;
    this.capacity = capacity;
  }

  isEmpty() {
    return this.front < 0;
  }

  enqueue(data) {
    if (this.rear === this.capacity) return `Queue is full`;
    if (this.isEmpty()) {
      this.front++;
      this.rear++;
    }
    this.rear++;
    this.queue[this.rear] = data;
  }

  dequeue() {
    if (this.isEmpty()) return `Queue is empty`;
    return this.queue.shift();
  }
  peek() {
    return this.queue[this.front];
  }
  printQueue () {
    return this.queue.join(', ');
  }
}
const quque = new Queue();

// quque.enqueue(10);
quque.enqueue(20);
quque.enqueue(30);
quque.enqueue(50);
console.log(quque.printQueue())