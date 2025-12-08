// 🌱 Project 04 — Arrays & Objects
// 🎯 Topic: Arrays — Iteration Patterns
// ------------------------------------------------------------

// EX1: With a for loop, log each element of ["A","B","C"].
// EX2: With for...of, log each price in [99,149,399].
// EX3: With forEach, log each city in ["CDMX","Seoul","London"].
// EX4: Sum numbers in [2,4,6,8] using a loop; log the sum.
// EX5: Build a new array doubled from [1,2,3] using a loop (no map yet); log it.

let array = [1, 2, 3, 4];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

const prices = [99, 149, 399];

for (price of prices) {
  console.log(price);
}

let cities = ["CDMX", "Seoul", "London"];

cities.forEach((city) => {
  console.log(city);
});

const numbersArray = [1, 2, 3, 4];
let total = 0;
for (let i = 0; i < numbersArray.length; i++) {
  total += numbersArray[i];
}

console.log(total);

let orig = [1, 2, 3];

let double = [];
for (let i = 0; i < orig.length; i++) {
  double.push(orig[i] * 2);
}
console.log(double);
