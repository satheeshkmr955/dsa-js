const num = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function merge(left, right) {
  const sortedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sortedArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      sortedArr.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return [...sortedArr, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

const sortedArr = mergeSort(num);

console.log(JSON.stringify(sortedArr, null, 0));
// console.dir(sortedArr, { depth: null });
