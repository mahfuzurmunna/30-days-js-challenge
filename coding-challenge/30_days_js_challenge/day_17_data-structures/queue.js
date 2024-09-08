class Queue {
  constructor(capacity = 100) {
    this.queue = [];
    this.capacity = capacity;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  enqueue(data) {
    if(this.queue.length === this.capacity) return `Queue is full`;
    this.queue.push(data);
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    if(this.isEmpty()) return null;
    return this.queue[0];
  }

  printQueue() {
    if (!this.isEmpty()) {
      return this.queue.join(', ')
    } else {
      return 'Queue is empty';
    }
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(50);

console.log(queue.dequeue()); // 10
console.log(queue.printQueue()); // 20, 30, 50

// Function to simulate a printer queue
function simulatePrinterQueue(jobs) {
  const printerQueue = new Queue();

  // Add all jobs to the printer queue
  jobs.forEach(job => {
    console.log(`Adding job: ${job}`);
    printerQueue.enqueue(job);
  });

  // Process each job in the printer queue
  while (!printerQueue.isEmpty()) {
    const job = printerQueue.dequeue();
    console.log(`Processing job: ${job}`);
  }

  console.log("All jobs have been processed.");
}

// Example usage
const printJobs = ["Job1", "Job2", "Job3", "Job4"];
simulatePrinterQueue(printJobs);
