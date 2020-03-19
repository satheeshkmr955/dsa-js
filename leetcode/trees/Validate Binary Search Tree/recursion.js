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
const helper = (node, lower, upper) => {
  if (node === null) return true;

  if (lower !== null && lower >= node.val) return false;
  if (upper !== null && upper <= node.val) return false;

  if (!helper(node.left, lower, node.val)) return false;
  if (!helper(node.right, node.val, upper)) return false;

  return true;
};

const isValidBST = root => {
  return helper(root, null, null);
};
