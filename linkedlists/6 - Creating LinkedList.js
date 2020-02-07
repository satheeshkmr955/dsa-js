class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    const newNode = new Node(data);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(data) {
    const newNode = new Node(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  display() {
    const arr = [];
    let currNode = this.head;
    while (currNode !== null) {
      arr.push(currNode.data);
      currNode = currNode.next;
    }
    console.log(arr);
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currNode = this.head;
    while (counter !== index) {
      currNode = currNode.next;
      counter++;
    }
    return currNode;
  }

  insert(index, data) {
    if (index >= this.length) {
      return this.append(data);
    }
    const newNode = new Node(data);
    const indexNode = this.traverseToIndex(index - 1);
    newNode.next = indexNode.next;
    indexNode.next = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index > this.length) {
      return this;
    }
    const indexNode = this.traverseToIndex(index - 1);
    let deleteNode = indexNode.next;
    indexNode.next = deleteNode.next;
    deleteNode = undefined;
    this.length--;
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }
    let prev = this.head;
    let curr = prev.next;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head.next = null;
    this.head = prev;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.prepend(20);
myLinkedList.append(5);
myLinkedList.append(11);
myLinkedList.insert(1, 30);
myLinkedList.insert(3000, 99);
myLinkedList.remove(1);
myLinkedList.display();
myLinkedList.reverse();
myLinkedList.display();
// console.log(JSON.stringify(myLinkedList, null, 1));
// console.dir(myLinkedList, { depth: null });
