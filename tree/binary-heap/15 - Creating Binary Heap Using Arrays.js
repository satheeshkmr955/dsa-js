// https://www.youtube.com/watch?v=NEtwJASLU8Q
class BinaryHeap {
  constructor() {
    this.array = [];
  }

  peek() {
    if (this.array.length > 0) {
      return this.array[0];
    } else {
      return null;
    }
  }

  swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  insert(data) {
    this.array.push(data);
    if (this.array.length === 1) {
      return this;
    } else {
      let i = this.array.length;
      while (i > 0) {
        let parent = parseInt(i / 2);
        if (this.array[parent - 1] < this.array[i - 1]) {
          this.swap(this.array, parent - 1, i - 1);
          i = parent;
        } else {
          return this;
        }
      }
    }
  }

  removeMax() {
    if (this.array.length === 0) {
      return null;
    } else {
      let max = this.array[0];
      this.array[0] = this.array[this.array.length - 1];
      this.array.pop();
      let i = 1;
      while (i < this.array.length) {
        let leftChild = i * 2 - 1;
        let rightChild = i * 2;
        if (
          this.array[i - 1] < this.array[leftChild] ||
          this.array[i - 1] < this.array[rightChild]
        ) {
          if (this.array[leftChild] > this.array[rightChild]) {
            this.swap(this.array, leftChild, i - 1);
            i = leftChild + 1;
          } else {
            this.swap(this.array, rightChild, i - 1);
            i = rightChild + 1;
          }
        } else {
          break;
        }
      }
      return max;
    }
  }
}

const myHeap = new BinaryHeap();
myHeap.insert(60);
myHeap.insert(59);
myHeap.insert(9);
myHeap.insert(49);
myHeap.insert(17);
myHeap.insert(2);
myHeap.insert(62);
myHeap.insert(91);
myHeap.insert(72);
myHeap.insert(85);
myHeap.insert(64);
myHeap.insert(81);
myHeap.insert(44);
myHeap.insert(61);
console.log(myHeap.peek());
console.log(myHeap.removeMax());
console.log(myHeap.peek());
// console.log(JSON.stringify(myHeap, null, 1));
console.dir(myHeap, { depth: null });
