class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    console.log(this.array[this.array.length - 1]);
    return this.array[this.array.length - 1];
  }

  push(data) {
    this.array.push(data);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }

  isEmpty() {
    console.log(this.array.length === 0);
    return this.array.length === 0;
  }
}

const myStack = new Stack();
myStack.peek();
myStack.isEmpty();
myStack.pop();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.peek();
myStack.isEmpty();
myStack.pop();
myStack.pop();
myStack.pop();
// console.log(JSON.stringify(myStack, null, 1));
console.dir(myStack, { depth: null });
