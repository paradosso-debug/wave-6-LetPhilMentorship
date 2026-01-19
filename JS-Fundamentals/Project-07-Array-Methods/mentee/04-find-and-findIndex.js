// 🌱 Project 07 — Array Methods
// 🎯 Topic: find & findIndex — Locate a single item
// ------------------------------------------------------------

// EX1: Find first even number in [1,3,4,6].
// EX2: Find the index of "mango" in ["apple","mango","cherry"].
// EX3: Find first product with price > 100 in [{name:"A",price:80},{name:"B",price:120}].
// EX4: If not found, find returns undefined — demonstrate with "kiwi" in the fruit list.
// EX5: Use findIndex to get position of value 7 in [2,4,7,9].

const numbers = [1, 2, 3, 4, 6];

const even = numbers.find((n) => n % 2 === 0);

console.log(even);

const fruits = ["apple", "mango", "cherry"];
const fruit = fruits.findIndex((f) => f === "mango");
console.log(fruit);

const obj = [
  { name: "A", price: 80 },
  { name: "B", price: 120 },
];

const product = obj.find((item) => item.price > 100);

console.log(product);

const kiwi = fruits.find((k) => k === "kiwi");

console.log(kiwi);

const moreNumbs = [2, 4, 7, 9];

const ne = moreNumbs.findIndex((n) => n === 7);

console.log(ne);
