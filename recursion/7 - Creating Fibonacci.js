const num = 10;
function fibonacciIterative(n) {
  let prev = 0;
  let next = 1;
  let counter = 1;
  while (counter < n) {
    if (counter % 2 === 1) {
      prev = prev + next;
    } else {
      next = prev + next;
    }
    counter++;
  }
  return n % 2 === 0 ? prev : next;
}

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciIterative(num));

console.log(fibonacciRecursive(num));
