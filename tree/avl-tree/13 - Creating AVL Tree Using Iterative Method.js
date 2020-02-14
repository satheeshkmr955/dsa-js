// https://www.youtube.com/watch?v=jDM6_TnYIqE
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 1;
    this.parent = null;
  }
}

class AVL {
  constructor() {
    this.root = null;
  }

  height(node) {
    if (!node) return 0;
    return node.height;
  }

  updateHeight(node) {
    node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  updateParentNode(parent, node, newRoot) {
    if (parent) {
      const parentSide = parent.data < node.data ? "right" : "left";
      parent[parentSide] = newRoot;
      this.updateHeight(parent);
    } else this.root = newRoot;
  }

  leftLeftRotation(node) {
    if (!node) return null;
    const newRoot = node.left;
    const right = newRoot.right;
    newRoot.right = node;
    node.left = right;

    const parent = node.parent;
    newRoot.parent = parent;
    node.parent = newRoot;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    this.updateParentNode(parent, node, newRoot);
  }

  rightRightRotation(node) {
    if (!node) return null;
    const newRoot = node.right;
    const left = newRoot.left;
    newRoot.left = node;
    node.right = left;

    const parent = node.parent;
    newRoot.parent = parent;
    node.parent = newRoot;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    this.updateParentNode(parent, node, newRoot);
  }

  leftRightRotation(node) {
    if (!node) return null;
    const newRoot = node.left.right;
    const newRootLeft = newRoot.left;
    const newRootRight = newRoot.right;
    newRoot.left = node.left;
    newRoot.right = node;
    newRoot.left.right = newRootLeft;
    newRoot.right.left = newRootRight;

    const parent = node.parent;
    newRoot.parent = parent;
    newRoot.left.parent = newRoot;
    newRoot.right.parent = newRoot;

    this.updateHeight(newRoot.left);
    this.updateHeight(newRoot.right);
    this.updateHeight(newRoot);

    this.updateParentNode(parent, node, newRoot);
  }

  rightLeftRotation(node) {
    if (!node) return null;
    const newRoot = node.right.left;
    const newRootLeft = newRoot.left;
    const newRootRight = newRoot.right;
    newRoot.left = node;
    newRoot.right = node.right;
    newRoot.left.right = newRootLeft;
    newRoot.right.left = newRootRight;

    const parent = node.parent;
    newRoot.parent = parent;
    newRoot.left.parent = newRoot;
    newRoot.right.parent = newRoot;

    this.updateHeight(newRoot.left);
    this.updateHeight(newRoot.right);
    this.updateHeight(newRoot);

    this.updateParentNode(parent, node, newRoot);
  }

  getBalance(node) {
    if (!node) return null;
    return this.height(node.left) - this.height(node.right);
  }

  checkBalanceFactor(node) {
    while (node) {
      this.updateHeight(node);
      const balance = this.getBalance(node);
      if (balance > 1) {
        if (this.getBalance(node.left) < 0) this.leftRightRotation(node);
        else this.leftLeftRotation(node);
      }
      if (balance < -1) {
        if (this.getBalance(node.right) > 0) this.rightLeftRotation(node);
        else this.rightRightRotation(node);
      }
      node = node.parent;
    }
  }

  findMinNode(node) {
    if (!node) return null;
    else {
      let currNode = node;
      while (currNode) {
        if (!currNode.left) {
          return currNode;
        }
        currNode = currNode.left;
      }
    }
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
            newNode.parent = currNode;
            break;
          }
          currNode = currNode.left;
        } else {
          if (!currNode.right) {
            currNode.right = newNode;
            newNode.parent = currNode;
            break;
          }
          currNode = currNode.right;
        }
      }
      this.checkBalanceFactor(currNode);
    }
  }

  lookup(data) {
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

  remove(data) {
    if (!this.root) return null;
    else {
      let currNode = this.root;
      while (currNode) {
        if (data < currNode.data) {
          currNode = currNode.left;
        } else if (data > currNode.data) {
          currNode = currNode.right;
        } else if (data === currNode.data) {
          // No Child
          if (!currNode.left && !currNode.right) {
            if (currNode.parent.left === currNode) {
              currNode.parent.left = currNode.left;
            } else {
              currNode.parent.right = currNode.right;
            }
          }
          // One Child
          else if (!currNode.left) {
            if (currNode.parent.left === currNode) {
              currNode.parent.left = currNode.right;
              currNode.right.parent = currNode.parent;
            } else {
              currNode.parent.right = currNode.right;
              currNode.right.parent = currNode.parent;
            }
          } else if (!currNode.right) {
            if (currNode.parent.left === currNode) {
              currNode.parent.left = currNode.left;
              currNode.left.parent = currNode.parent;
            } else {
              currNode.parent.right = currNode.left;
              currNode.left.parent = currNode.parent;
            }
          }
          // Two Child
          else {
            const leftMostNode = this.findMinNode(currNode.right);
            currNode.data = leftMostNode.data;
            currNode.right.left = leftMostNode.right;
            currNode.right.left.parent = currNode.right;
            if (leftMostNode === currNode.right) {
              currNode.right = null;
            }
            this.updateParentNode(leftMostNode);
          }
          break;
        }
      }
    }
  }
}

const myTree = new AVL();
myTree.insert(50);
myTree.insert(40);
myTree.insert(60);
myTree.insert(30);

myTree.remove(60);
// console.log(myTree.lookup(16));
// console.log(myTree.lookup(3));
// console.log(JSON.stringify(myTree, null, 1));
console.dir(myTree, { depth: null });
