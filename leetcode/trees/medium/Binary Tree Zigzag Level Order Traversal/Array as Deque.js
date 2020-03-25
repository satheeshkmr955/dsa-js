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
  const deque = ["separator"];
  deque.unshift(root);
  while (deque.length > 1) {
    const s1 = [];
    const s2 = [];
    while (deque[0] !== "separator") {
      let curr = deque.shift();
      s1.push(curr.val);
      if (curr.left) deque.push(curr.left);
      if (curr.right) deque.push(curr.right);
    }
    while (deque[deque.length - 1] !== "separator") {
      let curr = deque.pop();
      s2.push(curr.val);
      if (curr.right) deque.unshift(curr.right);
      if (curr.left) deque.unshift(curr.left);
    }
    if (s1.length > 0) nums.push(s1);
    if (s2.length > 0) nums.push(s2);
  }
  return nums;
};
