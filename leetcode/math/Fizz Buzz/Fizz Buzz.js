/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = n => {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    let by3 = i % 3 === 0;
    let by5 = i % 5 === 0;
    if (by3 && by5) arr.push("FizzBuzz");
    else if (by3) arr.push("Fizz");
    else if (by5) arr.push("Buzz");
    else arr.push(`${i}`);
  }
  return arr;
};
