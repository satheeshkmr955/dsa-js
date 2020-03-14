// https://www.youtube.com/watch?v=GTJr8OvyEVQ
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const prefixTable = function(needle) {
  const lpsTable = [0];
  let i = 1;
  let j = 0;
  while (i < needle.length) {
    if (needle[i] === needle[j]) {
      lpsTable[i] = j + 1;
      j++;
      i++;
    } else if (j === 0) {
      lpsTable[i] = 0;
      i++;
    } else {
      j = lpsTable[j - 1];
    }
  }
  return lpsTable;
};
const strStr = function(haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
  if (haystack.length < needle.length) {
    return -1;
  }
  const lpsTable = prefixTable(needle);
  let i = 0;
  let j = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - needle.length + 1;
      }
      i++;
      j++;
    } else if (j === 0) {
      i++;
    } else {
      j = lpsTable[j - 1];
    }
  }
  return -1;
};

// const haystack = "ababc";
// const needle = "abc";
// console.log(strStr(haystack, needle));
