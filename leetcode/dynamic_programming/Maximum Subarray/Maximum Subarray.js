/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
  let globalSum = -Infinity;
  let local = 0;
  for (let i = 0; i < nums.length; i++) {
    local = nums[i] > nums[i] + local ? nums[i] : nums[i] + local;
    if (local > globalSum) globalSum = local;
  }
  return globalSum;
};
