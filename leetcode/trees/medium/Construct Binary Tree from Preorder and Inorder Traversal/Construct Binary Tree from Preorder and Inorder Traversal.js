/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const helper = (preorder, inorder, preStart, preEnd, inStart, inEnd) => {
  if (preStart > preEnd || inStart > inEnd) return null;

  const root = new TreeNode(preorder[preStart]);

  let k = 0;
  for (let i = inStart; i <= inEnd; i++) {
    if (inorder[i] === root.val) {
      k = i;
      break;
    }
  }

  root.left = helper(
    preorder,
    inorder,
    preStart + 1,
    preStart + (k - inStart),
    inStart,
    k - 1
  );

  root.right = helper(
    preorder,
    inorder,
    preStart + (k - inStart) + 1,
    preEnd,
    k + 1,
    inEnd
  );

  return root;
};

const buildTree = (preorder, inorder) => {
  return helper(
    preorder,
    inorder,
    0,
    preorder.length - 1,
    0,
    inorder.length - 1
  );
};

console.dir(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]), { depth: null });
