const mergeSortedArrays = (s1, s2) => {
  if (s1.length === 0) {
    return s2;
  }
  if (s2.length === 0) {
    return s1;
  }
  let mergedArr = [];
  let i = 0;
  let j = 0;
  while (s1[i] || s2[j]) {
    if (s1[i] < s2[j] || !s2[j]) {
      mergedArr.push(s1[i++]);
    } else {
      mergedArr.push(s2[j++]);
    }
  }
  return mergedArr;
};
const mergedStr = mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);
console.log(mergedStr);
