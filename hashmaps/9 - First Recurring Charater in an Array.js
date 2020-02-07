const arr = [2, 5, 1, 2, 3, 5, 1, 2, 4];

const firstRecurringChar = arr => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      return arr[i];
    }
    obj[arr[i]] = arr[i];
  }
  return undefined;
};

console.log(firstRecurringChar(arr));
