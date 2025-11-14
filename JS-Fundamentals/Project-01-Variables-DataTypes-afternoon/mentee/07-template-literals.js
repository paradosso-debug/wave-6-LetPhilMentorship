// 🌱 Project 01 — Variables & Data Types
// 🎯 Topic: Template Literals
// ------------------------------------------------------------

// EX1: Create `name` and log `Hello, ${name}!` using backticks.
// EX2: Create `product` and `price`, log a receipt line with ${}.
// EX3: Create multi-line message using backticks.
// EX4: Combine variables and text without using +, only ${} inside backticks.
// EX5: Build a URL string: `https://site.com/user/${userId}` and log it.

let name = "Brian";
console.log(`Hello, ${name}!`);

const product = "hoodie";
const price = 20;
console.log(`${product} + ${price}`);

// console.log(`The ${product} is worth ${price}`);

console.log(`This is a multi line message
    `);

let greeting = "Hello there ";
let name2 = "John";
console.log(`${greeting},
    nice to meet you ${name2}!
    Glad to have you here!`);

let userId = "whatever";
console.log(`https://site.com/user/${userId}`);
