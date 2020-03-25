/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
  nums = nums.sort((a, b) => a - b);
  let i = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }
  return i;
};
