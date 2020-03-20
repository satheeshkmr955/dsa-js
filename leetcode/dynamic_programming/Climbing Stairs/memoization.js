/**
 * @param {number} n
 * @return {number}
 */

/* Time complexity : O(n)
Space complexity : O(n) */

const helper = (i, n, memo) => {
  if (i > n) return 0;
  if (i == n) return 1;
  if (memo[i] !== undefined) return memo[i];
  memo[i] = helper(i + 1, n, memo) + helper(i + 2, n, memo);
  return memo[i];
};

const climbStairs = n => {
  const memo = {};
  return helper(0, n, memo);
};
