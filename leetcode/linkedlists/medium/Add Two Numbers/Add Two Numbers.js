/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
const addTwoNumbers = (l1, l2) => {
  let p = l1;
  let q = l2;
  let carry = 0;
  const dummyNode = new ListNode(0);
  let curr = dummyNode;
  while (p || q) {
    let x = p ? p.val : 0;
    let y = q ? q.val : 0;
    const sum = x + y + carry;
    carry = parseInt(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (p) p = p.next;
    if (q) q = q.next;
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummyNode.next;
};
