/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      even += nums[i];
      even = Math.max(even, odd);
    } else {
      odd += nums[i];
      odd = Math.max(even, odd);
    }
  }
  return Math.max(odd, even);
};
