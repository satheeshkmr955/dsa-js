class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor(val) {
    const newNode = new Node(val);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  front() {
    return this.head;
  }

  rear() {
    return this.tail;
  }

  isEmpty() {
    return this.head === null && this.tail === null;
  }

  insertFront(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
    }
  }

  insertRear(val) {
    const newNode = new Node(val);
    if (!this.tail) {
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  deleteFront() {
    if (!this.head) return null;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.head.next.prev = null;
      this.head = this.head.next;
      this.length--;
    }
  }

  deleteRear() {
    if (!this.tail) return null;
    if (!this.tail.prev) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.length--;
    }
  }
}

const myDeque = new Deque(5);
// myDeque.insertFront(4);
// myDeque.insertRear(6);
// myDeque.deleteFront();
// myDeque.deleteRear();
// console.log(myDeque.front());
// console.log(myDeque.rear());
console.dir(myDeque, { depth: null });
