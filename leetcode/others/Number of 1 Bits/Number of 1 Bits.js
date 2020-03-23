/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = n => {
  return n.toString(2).replace(/0/g, "").length;
};
