// https://www.youtube.com/watch?v=gcULXE7ViZw
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currNode = this.root;
      while (true) {
        if (data < currNode.data) {
          if (!currNode.left) {
            currNode.left = newNode;
            return this;
          }
          currNode = currNode.left;
        } else {
          if (!currNode.right) {
            currNode.right = newNode;
            return this;
          }
          currNode = currNode.right;
        }
      }
    }
  }

  lookup(data) {
    if (!this.root) {
      return false;
    }
    let currNode = this.root;
    while (currNode) {
      if (data < currNode.data) {
        currNode = currNode.left;
      } else if (data > currNode.data) {
        currNode = currNode.right;
      } else if (data === currNode.data) {
        return currNode;
      }
    }
    return false;
  }

  findMinNode(node) {
    if (!node.left) {
      return node;
    } else {
      let currNode = node;
      while (currNode) {
        if (!currNode.left) {
          return currNode;
        }
        currNode = currNode.left;
      }
    }
  }

  remove(data) {
    if (!this.root) {
      return this;
    } else {
      let currNode = this.root;
      let parentNode = null;
      while (currNode) {
        if (data < currNode.data) {
          parentNode = currNode;
          currNode = currNode.left;
        } else if (data > currNode.data) {
          parentNode = currNode;
          currNode = currNode.right;
        } else if (data === currNode.data) {
          // No Child
          if (!currNode.left && !currNode.right) {
            // Check Parent's Child is Left or Right
            if (parentNode.left === currNode) {
              parentNode.left = currNode.left;
            } else {
              parentNode.right = currNode.right;
            }
            return this;
          }
          // One Child
          else if (!currNode.left) {
            // Check Parent's Child is Left or Right
            if (parentNode.left === currNode) {
              // currNode.left is null. so currNode child is in right
              parentNode.left = currNode.right;
            } else {
              parentNode.right = currNode.right;
            }
            return this;
          } else if (!currNode.right) {
            // Check Parent's Child is Left or Right
            if (parentNode.left === currNode) {
              // currNode.right is null. so currNode child is in left
              parentNode.left = currNode.left;
            } else {
              parentNode.right = currNode.left;
            }
            return this;
          }
          // Two Child
          else {
            // Find min node in current node -> right
            // or
            // max node in current node -> left and change below code accordingly
            const leftMostNode = this.findMinNode(currNode.right);
            // leftMostNode data is replaced with current node (delete node)
            currNode.data = leftMostNode.data;
            // currNode.right.left is set to leftMostNode.right because we select leftMostNode (min value node) in currNode.right. hence currNode.right.left is selected
            // leftMostNode.right may have node below it. So append it to currNode.right.left
            currNode.right.left = leftMostNode.right;
            if (leftMostNode === currNode.right) {
              currNode.right = null;
            }
            return this;
          }
        }
      }
      return false;
    }
  }

  DFSInOrder() {
    return this.transverseInOrder(this.root, []);
  }
  transverseInOrder(currNode, arr) {
    if (currNode.left) {
      this.transverseInOrder(currNode.left, arr);
    }
    arr.push(currNode.data);
    if (currNode.right) {
      this.transverseInOrder(currNode.right, arr);
    }
    return arr;
  }

  DFSPreOrder() {
    return this.transversePreOrder(this.root, []);
  }
  transversePreOrder(currNode, arr) {
    arr.push(currNode.data);
    if (currNode.left) {
      this.transversePreOrder(currNode.left, arr);
    }
    if (currNode.right) {
      this.transversePreOrder(currNode.right, arr);
    }
    return arr;
  }

  DFSPostOrder() {
    return this.transversePostOrder(this.root, []);
  }
  transversePostOrder(currNode, arr) {
    if (currNode.left) {
      this.transversePostOrder(currNode.left, arr);
    }
    if (currNode.right) {
      this.transversePostOrder(currNode.right, arr);
    }
    arr.push(currNode.data);
    return arr;
  }
}

const myTree = new BST();
myTree.insert(9);
myTree.insert(4);
myTree.insert(6);
myTree.insert(20);
myTree.insert(170);
myTree.insert(15);
myTree.insert(1);
// myTree.insert(100);
// myTree.insert(150);
// myTree.insert(120);
// myTree.insert(160);
// myTree.insert(180);
// myTree.insert(179);
// myTree.insert(185);
// myTree.remove(170);

console.log(JSON.stringify(myTree.DFSInOrder(), null, 0));
console.log(JSON.stringify(myTree.DFSPreOrder(), null, 0));
console.log(JSON.stringify(myTree.DFSPostOrder(), null, 0));

//     9
//  4     20
//1  6  15  170

// myTree.insert(80);
// myTree.insert(5);
// console.log(myTree.lookup(1));
// console.dir(myTree, { depth: null });
// myTree.remove(4);
// console.log(JSON.stringify(myTree, null, 1));
console.dir(myTree, { depth: null });
