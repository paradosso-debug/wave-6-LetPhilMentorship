// 🌱 Project 03 — Loops
// 🎯 Topic: While Loop — Basics
// EX1: Start at 0 and while less than 3, log the value then increase by 1.
// EX2: Start at 3 and while >= 0, log the value then decrease by 1.
// EX3: While total < 10, add 2 each time; log total each loop.
// EX4: Create a counter; stop the loop when counter reaches 5.
// EX5: Explain in a comment how to avoid infinite loops.

let start = 0;
while (start <= 3) {
  console.log(start);
  start++;
}

// for (let start = 0; start <= 3; start++) {
//   console.log(start);
// }

let number = 3;
while (number >= 0) {
  console.log(number);
  number--;
}

let n = 0;
while (n <= 10) {
  console.log(n);
  n += 2;
}
