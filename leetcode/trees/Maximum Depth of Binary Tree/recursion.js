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
  const lHeight = maxDepth(root.left);
  const rHeight = maxDepth(root.right);
  if (lHeight > rHeight) {
    return lHeight + 1;
  } else {
    return rHeight + 1;
  }
};
