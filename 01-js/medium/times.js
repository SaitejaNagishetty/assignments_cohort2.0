/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  const startTime = Date.now();
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  const endTime = Date.now();

  return (endTime - startTime) / 1000;
}

// NOTE: YOU NEED TO COME TO "MEDIUM/" FOLDER and then run this command "node times.js". Otherwise it won't run

console.log("Time for sum from 1 to 100:", calculateTime(100), "milliseconds");
console.log(
  "Time for sum from 1 to 100000:",
  calculateTime(100000),
  "milliseconds"
);
console.log(
  "Time for sum from 1 to 1000000000:",
  calculateTime(1000000000),
  "milliseconds"
);
// we simply consoled the function by mentioning the value of N as mentioned in the question.
