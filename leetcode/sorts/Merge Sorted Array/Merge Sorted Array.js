/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  if (nums1.length === 0) return nums2;
  if (nums2.length === 0) return nums1;
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) i++;
    else {
      nums1.splice(i, nums1.pop(), nums2[j++]);
      m++;
    }
  }
  while (j < n) nums1[i++] = nums2[j++];
};
