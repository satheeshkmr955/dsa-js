function factorialRecursive(number) {
  if (number === 1) {
    return number;
  }
  return number * factorialRecursive(number - 1);
}

function factorialIterative(number) {
  let answer = 1;
  for (let i = number; i > 1; i--) {
    answer *= i;
  }
  return answer;
}

console.log(factorialRecursive(5));

console.log(factorialIterative(5));
