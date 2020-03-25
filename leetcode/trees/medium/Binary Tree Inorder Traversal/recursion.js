/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const helper = (node, nums) => {
  if (node.left) helper(node.left, nums);
  nums.push(node.val);
  if (node.right) helper(node.right, nums);
  return nums;
};
const inorderTraversal = root => {
  if (!root) return [];
  return helper(root, []);
};
