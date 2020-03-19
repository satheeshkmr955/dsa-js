/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = root => {
  if (root === null) return [];
  const arr = [];
  const queue = [];
  queue.push(root);
  while (true) {
    const temp = [];
    let nodeCount = queue.length;
    if (nodeCount === 0) return arr;
    while (nodeCount > 0) {
      const node = queue.shift();
      temp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      nodeCount--;
    }
    arr.push(temp);
  }
};
