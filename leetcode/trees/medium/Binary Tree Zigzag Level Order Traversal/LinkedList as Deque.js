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

// const myDeque = new Deque(5);
// myDeque.insertFront(4);
// myDeque.insertRear(6);
// myDeque.deleteFront();
// myDeque.deleteRear();
// console.log(myDeque.front());
// console.log(myDeque.rear());
// console.dir(myDeque, { depth: null });

const zigzagLevelOrder = root => {
  if (!root) return [];
  const nums = [];
  const deque = new Deque("separator");
  deque.insertFront(root);
  while (deque.length > 1) {
    const s1 = [];
    const s2 = [];
    while (deque.front() && deque.front().val !== "separator") {
      let curr = deque.front();
      if (curr.next !== undefined) curr = curr.val;
      deque.deleteFront();
      s1.push(curr.val);
      if (curr.left) deque.insertRear(curr.left);
      if (curr.right) deque.insertRear(curr.right);
    }
    while (deque.rear() && deque.rear().val !== "separator") {
      let curr = deque.rear();
      if (curr.next !== undefined) curr = curr.val;
      deque.deleteRear();
      s2.push(curr.val);
      if (curr.right) deque.insertFront(curr.right);
      if (curr.left) deque.insertFront(curr.left);
    }
    if (s1.length > 0) nums.push(s1);
    if (s2.length > 0) nums.push(s2);
  }
  return nums;
};
