// 🌱 Project 04 — Arrays & Objects
// 🎯 Topic: Arrays — Basics
// ------------------------------------------------------------
// ------------------------------------------------------------
// EX1: Create an array with 3 fruits. Log the whole array.
// EX2: Log the first item (index 0) and the last item (length - 1).
// EX3: Change the second item to a new value, then log the array.
// EX4: Check the array .length and log it.
// EX5: Create an empty array `tasks = []`, then push one item and log.

let fruits = ["grape", "mango", "dragon fruit"];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

fruits[1] = "bannana";
console.log(fruits);

console.log(fruits.length);

let tasks = [];
tasks.push("laundry");
console.log(tasks);

fruits.splice(1, 1);
console.log(fruits);
