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
  stack.push([root, null, null]);

  while (stack.length !== 0) {
    const [node, lower, upper] = stack.pop();

    if (node === null) continue;

    if (lower !== null && lower >= node.val) return false;
    if (upper !== null && upper <= node.val) return false;

    stack.push([node.left, lower, node.val]);
    stack.push([node.right, node.val, upper]);
  }
  return true;
};
