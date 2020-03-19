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

const isMirror = (node1, node2) => {
  if (node1 === null && node2 === null) return true;
  if (node1 && node2 && node1.val === node2.val)
    return (
      isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
    );
  return false;
};

const isSymmetric = root => {
  return isMirror(root, root);
};
