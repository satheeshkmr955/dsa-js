/**
 * @param {number} n
 * @return {number}
 */

/* Time complexity : O(n)
Space complexity : O(n) */

const climbStairs = n => {
  if (n === 1) return 1;
  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
