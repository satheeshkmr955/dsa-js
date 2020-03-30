/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const helper = (curr, arr) => {
  if (!curr) return null;
  if (curr.left) helper(curr.left, arr);
  arr.push(curr.val);
  if (curr.right) helper(curr.right, arr);
  return arr;
};
const kthSmallest = (root, k) => {
  const arr = helper(root, []);
  return arr[k - 1];
};
