// https://www.youtube.com/watch?v=PgBzjlCcFvc
const num = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function partition(arr, left, right) {
  let partitionIndex = left;
  let pivot = right;
  for (let i = left; i < right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, pivot, partitionIndex);
  return partitionIndex;
}

function quickSort(arr, left, right) {
  let partitionIndex;
  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

quickSort(num, 0, num.length - 1);

console.log(JSON.stringify(num, null, 0));
// console.dir(num, { depth: null });
