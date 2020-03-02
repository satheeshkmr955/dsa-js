const num = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
}

selectionSort(num);

console.log(JSON.stringify(num, null, 0));
// console.dir(num, { depth: null });
