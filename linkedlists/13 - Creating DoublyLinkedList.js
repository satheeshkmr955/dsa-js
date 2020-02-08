class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(data) {
    const newNode = new Node(data);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(data) {
    const newNode = new Node(data);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(data) {
    const newNode = new Node(data);
    this.head.prev = newNode;
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
    indexNode.next.prev = newNode;
    newNode.prev = indexNode;
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
    deleteNode.next.prev = deleteNode.prev;
    deleteNode = undefined;
    this.length--;
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }
    let curr = this.head;
    this.tail = this.head;
    let temp = null;
    while (curr) {
      temp = curr.prev;
      curr.prev = curr.next;
      curr.next = temp;
      curr = curr.prev;
    }
    this.head = temp.prev;
  }
}

const myLinkedList = new DoublyLinkedList(2);
myLinkedList.prepend(1);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.display();
myLinkedList.insert(1, 30);
myLinkedList.insert(3000, 99);
myLinkedList.display();
myLinkedList.remove(1);
myLinkedList.display();
myLinkedList.reverse();
myLinkedList.display();
// console.log(JSON.stringify(myLinkedList, null, 1));
console.dir(myLinkedList, { depth: null });
