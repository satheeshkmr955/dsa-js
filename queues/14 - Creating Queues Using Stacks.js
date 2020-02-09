class Queue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  peek() {
    if (this.last.length > 0) {
      console.log(this.last[0]);
      return this.last[0];
    }
    if (this.first.length > 0) {
      console.log(this.first[this.first.length - 1]);
      return this.first[this.first.length - 1];
    }
    console.log(null);
    return null;
  }

  enqueue(data) {
    const len = this.first.length;
    for (let i = 0; i < len; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(data);
    return this;
  }

  dequeue() {
    const len = this.last.length;
    for (let i = 0; i < len; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }

  isEmpty() {
    console.log(this.first.length === 0 && this.last.length === 0);
    return this.first.length === 0 && this.last.length === 0;
  }
}

const myQueue = new Queue();
myQueue.peek();
myQueue.isEmpty();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.isEmpty();
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.isEmpty();
myQueue.peek();
// console.log(JSON.stringify(myQueue, null, 1));
console.dir(myQueue, { depth: null });
