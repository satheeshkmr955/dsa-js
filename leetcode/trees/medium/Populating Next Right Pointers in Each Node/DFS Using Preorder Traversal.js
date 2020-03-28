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
  let parent = root;
  while (parent) {
    let curr = parent;
    while (curr) {
      if (curr.left) curr.left.next = curr.right;
      if (curr.right && curr.next) curr.right.next = curr.next.left;
      curr = curr.next;
    }
    parent = parent.left;
  }
  return root;
};
