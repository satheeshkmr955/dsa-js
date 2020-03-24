/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
  let xor = x ^ y;
  let count = 0;
  while (xor > 0) {
    count += xor & 1;
    xor >>= 1;
  }
  return count;
};
console.log(hammingDistance(1, 4));
