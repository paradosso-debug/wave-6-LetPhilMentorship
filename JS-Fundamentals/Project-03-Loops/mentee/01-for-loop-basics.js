// 🌱 Project 03 — Loops
// 🎯 Topic: For Loop — Basics

// ------------------------------------------------------------
// EX1: Count from 1 to 5 and log each number.
// EX2: Count from 5 down to 1 and log each number.
// EX3: Count even numbers from 0 to 10 (hint: i += 2).
// EX4: Sum numbers from 1 to 5 into a variable total; log total at the end.
// EX5: Loop 5 times and build a string like "*****"; log the final string.

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let n = 5; n >= 1; n--) {
  console.log(n);
}

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

let total = 0;
for (let k = 1; k <= 5; k++) {
  total += k;
}
console.log(total);

let word = "";
for (let i = 0; i < 10; i++) {
  word += "*";
}
console.log(word);

// i = 0
// is 0 < 5 yes
// word = word + "*"
// word = "" + "*" = "*"
// i++ i becomes 1

// i = 1
// is 1<5 yes
// word = "*" + "*" = "**"
// i++ i becomes 2

// let total = 0;
// let prices = [25, 68, 29];
// for (let i = 0; i < prices.length; i++) {
//   total += prices[i];
// }

// for (start; condition; step){

// }

// let total = 0
// add 1 + total = 1
// add 2 + total = 3
// add 3 + total = 6
// add 4 + total = 10
// add 5 + total = 15
