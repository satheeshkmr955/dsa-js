class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return;
    }
    const topPointer = this.top;
    this.top = newNode;
    this.top.next = topPointer;
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    let topPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return topPointer;
  }

  isEmpty() {
    console.log(this.top === null);
    return this.top === null;
  }
}

const myStack = new Stack();
myStack.peek();
myStack.isEmpty();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.isEmpty();
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
// console.log(JSON.stringify(myStack, null, 1));
console.dir(myStack, { depth: null });
