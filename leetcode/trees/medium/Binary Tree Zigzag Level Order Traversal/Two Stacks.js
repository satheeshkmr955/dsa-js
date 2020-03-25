/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = root => {
  if (!root) return [];
  const nums = [];
  const stack1 = [];
  const stack2 = [];
  stack1.push(root);
  while (stack1.length !== 0 || stack2.length !== 0) {
    const s1 = [];
    const s2 = [];
    while (stack1.length !== 0) {
      let curr = stack1.pop();
      s1.push(curr.val);
      if (curr.left) stack2.push(curr.left);
      if (curr.right) stack2.push(curr.right);
    }
    while (stack2.length !== 0) {
      let curr = stack2.pop();
      s2.push(curr.val);
      if (curr.right) stack1.push(curr.right);
      if (curr.left) stack1.push(curr.left);
    }
    if (s1.length > 0) nums.push(s1);
    if (s2.length > 0) nums.push(s2);
  }
  return nums;
};
