const num = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function swap(arr, i, j) {
  arr.splice(i, 0, arr.splice(j, 1)[0]);
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      swap(arr, 0, i);
    } else {
      for (let j = 1; j < i; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          swap(arr, j, i);
        }
      }
    }
  }
}

insertionSort(num);

console.log(JSON.stringify(num, null, 0));
// console.dir(num, { depth: null });
