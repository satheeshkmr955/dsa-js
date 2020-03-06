class PriorityQueue {
  constructor() {
    this.Collection = [];
  }

  isEmpty() {
    return this.Collection.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue has no Element";
    } else {
      return this.Collection[0];
    }
  }

  rear() {
    if (this.isEmpty()) {
      return "Queue has no Element";
    } else {
      return this.Collection[this.Collection.length - 1];
    }
  }

  enqueue(node, weight) {
    let isAdd = false;
    if (this.isEmpty()) {
      this.Collection.push({ node, weight });
    } else {
      for (let i = 0; i < this.Collection.length; i++) {
        if (this.Collection[i].weight > weight) {
          isAdd = true;
          this.Collection.splice(i, 0, { node, weight });
          break;
        }
      }
      if (!isAdd) {
        this.Collection.push({ node, weight });
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    } else {
      this.Collection.shift();
    }
  }
}

const myPQ = new PriorityQueue();

myPQ.enqueue("z", 26);
myPQ.enqueue("a", 1);
myPQ.enqueue("h", 8);
console.log(myPQ.peek());
myPQ.dequeue();
console.log(myPQ.peek());
console.log(myPQ.rear());

console.log(JSON.stringify(myPQ, null, 1));
console.dir(myPQ, { depth: null });
