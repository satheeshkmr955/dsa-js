/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isValidBST = root => {
  const stack = [];
  let inOrder = -Math.pow(2, 31) - 1;
  while (stack.length !== 0 || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.val <= inOrder) return false;
    inOrder = root.val;
    root = root.right;
  }
  return true;
};
