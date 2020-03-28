/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
const connect = root => {
  if (!root) return root;
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let size = queue.length;
    if (size === 0) break;
    let prev = null;
    for (let i = size - 1; i >= 0; i--) {
      queue[i].next = prev;
      prev = queue[i];
    }
    while (size > 0) {
      let curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      size--;
    }
  }
  return root;
};
