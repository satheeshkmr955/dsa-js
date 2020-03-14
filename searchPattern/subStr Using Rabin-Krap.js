// https://www.youtube.com/watch?v=H4VrKHVG5qI
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const prime = 101;
const checkStr = (str1, start1, end1, str2, start2, end2) => {
  if (end1 - start1 != end2 - start2) {
    return false;
  }
  while (start1 <= end1 && start2 <= end2) {
    if (str1[start1] != str2[start2]) {
      return false;
    }
    start1++;
    start2++;
  }
  return true;
};
const createHash = (str, end) => {
  let hash = 0;
  for (let i = 0; i <= end; i++) {
    hash += str.charCodeAt(i) * Math.pow(prime, i);
  }
  return hash;
};
const reCalcHash = (str, oldIndex, newIndex, oldHash, m) => {
  let newHash = oldHash - str.charCodeAt(oldIndex);
  newHash /= prime;
  newHash += str.charCodeAt(newIndex) * Math.pow(prime, m - 1);
  return newHash;
};
const strStr = (haystack, needle) => {
  if (needle.length === 0) {
    return 0;
  }
  if (haystack.length < needle.length) {
    return -1;
  }
  const m = needle.length;
  const n = haystack.length;
  const patternHash = createHash(needle, m - 1);
  let textHash = createHash(haystack, m - 1);
  for (let i = 1; i <= n - m + 1; i++) {
    if (
      patternHash === textHash &&
      checkStr(haystack, i - 1, i + m - 2, needle, 0, m - 1)
    ) {
      return i - 1;
    }
    if (i < n - m + 1) {
      textHash = reCalcHash(haystack, i - 1, i + m - 1, textHash, m);
    }
  }
  return -1;
};

// const haystack = "ababc";
// const needle = "abc";
// console.log(strStr(haystack, needle));
