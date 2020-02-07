class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    const item = this.data[index];
    return item;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data[this.length - 1];
  }

  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArr = new MyArray();
newArr.push("hello");
newArr.push("world");
newArr.push("!");
console.log(newArr);
newArr.delete(0);
newArr.pop();
console.log(newArr);
