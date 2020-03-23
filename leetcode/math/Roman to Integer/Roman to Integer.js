/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
  const romanChar = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanChar[s[i]] < romanChar[s[i + 1]]) total -= romanChar[s[i]];
    else total += romanChar[s[i]];
  }
  return total;
};
