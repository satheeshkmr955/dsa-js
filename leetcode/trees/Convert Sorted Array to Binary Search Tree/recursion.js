/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const constructBST = (nums, left, right) => {
  if (left > right) return null;
  const mid = Math.round(left + (right - left) / 2);
  const node = new TreeNode(nums[mid]);
  node.left = constructBST(nums, left, mid - 1);
  node.right = constructBST(nums, mid + 1, right);
  return node;
};

const sortedArrayToBST = nums => {
  if (nums.length === 0) return null;
  return constructBST(nums, 0, nums.length - 1);
};
