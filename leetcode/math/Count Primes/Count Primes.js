/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = n => {
  const isPrime = [];
  let result = 0;
  for (let i = 2; i < n; i++) {
    if (!isPrime[i]) {
      result++;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = true;
      }
    }
  }
  return result;
};
