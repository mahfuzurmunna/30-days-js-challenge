/** 
------------------------ 
Activity 3: Queue
------------------------
**/

class Queue {
  constructor(capacity = 100) {
    this.queue = [];
    this.capacity = capacity;
    this.rear = 0;
    this.front =0;
  }

  isEmpty() {
    return this.rear === this.front;
  }

  enqueue(value) {
    if (this.rear === this.capacity) return "Queue is full";

    this.queue[this.rear] = value;
    this.rear++;
    return true;
  }

  getLength () {
    return this.rear - this.front;
  }

  dequeue() {
    const item = this.queue[this.front];
    for (let i = this.front; i < this.rear-1; i++) {
      this.queue[i] = this.queue[i+1];
    }
    this.rear--;
    delete this.queue[this.rear];
    return item;
  }

  peek () {
    return this.queue[this.front];
  }

  display() {
    const  values = [];
    for(let i = this.front; i<this.rear; i++) {
      values.push(queue[i]);
    }

    return values;
  }
}


const queue = new Queue();

queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');

// queue.dequeue();

console.log(queue.display());


