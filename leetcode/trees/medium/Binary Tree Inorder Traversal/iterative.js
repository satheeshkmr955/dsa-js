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
const inorderTraversal = root => {
  if (!root) return [];
  const stack = [];
  const nums = [];
  let curr = root;
  while (stack.length !== 0 || curr !== null) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    nums.push(curr.val);
    curr = curr.right;
  }
  return nums;
};
