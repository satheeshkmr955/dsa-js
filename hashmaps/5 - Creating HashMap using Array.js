class Hash {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    const currentData = this.data[index];
    if (currentData) {
      for (let i = 0; i < currentData.length; i++) {
        if (currentData[i][0] === key) {
          return currentData[i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    const keysArr = [];
    this.data.map(arr => {
      if (arr) {
        arr.map(key => keysArr.push(key[0]));
      }
    });
    console.log(this.data);
    return keysArr;
  }
}

const newHash = new Hash(50);
newHash.set("grapes", 10000);
newHash.set("apples", 100);
newHash.set("ap", 160);
newHash.set("sa", 50);
console.log(newHash.get("grapes"));
console.log(newHash.keys());
