// 🌱 Project 03 — Loops
// 🎯 Topic: for...of Loop — Arrays
// EX1: Create an array of 4 fruits; loop and log each fruit.
// EX2: Create an array of prices; loop and log each price with "USD".
// EX3: Create an array of names; build a greeting string for each and log it.
// EX4: Create an array of booleans; log only the true ones (use if inside loop).
// EX5: Create an array of numbers; sum them and log the result.

const fruits = ["Grape", "Dragon Fruit", "Lychee", "Mango"];
for (const fruit of fruits) {
  console.log(fruit);
}

const prices = ["10", "15", "20", "30"];

for (const price of prices) {
  console.log(`${price} USD`);
}

const names = ["Jocelin", "Asher", "Riley", "Phil"];
for (const name of names) {
  console.log(`Welcome, ${name}`);
}
