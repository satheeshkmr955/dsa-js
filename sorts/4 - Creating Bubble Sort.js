const num = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j + 1, j);
      }
    }
  }
}

bubbleSort(num);

console.log(JSON.stringify(num, null, 0));
// console.dir(num, { depth: null });
