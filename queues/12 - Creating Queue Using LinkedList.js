class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    console.log(this.first);
    return this.first;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return this;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    let deleteNode = this.first.next;
    this.first = deleteNode;
    this.length--;
    return deleteNode;
  }

  isEmpty() {
    console.log(this.first === null);
    return this.first === null;
  }
}

const myQueue = new Queue();
myQueue.peek();
myQueue.isEmpty();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.peek();
myQueue.isEmpty();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
// console.log(JSON.stringify(myQueue, null, 1));
console.dir(myQueue, { depth: null });
