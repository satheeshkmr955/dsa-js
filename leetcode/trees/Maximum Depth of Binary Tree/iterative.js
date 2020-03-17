/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }
  const queue = [];
  let height = 0;
  queue.push(root);
  while (true) {
    let nodeCount = queue.length;
    if (nodeCount === 0) {
      return height;
    }
    height++;
    while (nodeCount > 0) {
      let node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      nodeCount--;
    }
  }
};
