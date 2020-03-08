// 0 1 1 2 3 5 8 13 21 34 55
// 0 1 2 3 4 5 6  7  8  9 10

function memoized() {
  const cache = {};
  return n => {
    if (cache[n]) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fib = memoized();

console.log("5", fib(5), "\n");
console.log("6", fib(6), "\n");
console.log("7", fib(7), "\n");
console.log("8", fib(8), "\n");
console.log("9", fib(9), "\n");
console.log("10", fib(10), "\n");
console.log("54", fib(54), "\n");
console.log("100", fib(100), "\n");
