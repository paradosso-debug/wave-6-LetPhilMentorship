// 🌱 Project 01 — Variables & Data Types
// 🎯 Topic: Template Literals
// ------------------------------------------------------------

// EX1: Create `name` and log `Hello, ${name}!` using backticks.
// EX2: Create `product` and `price`, log a receipt line with ${}.
// EX3: Create multi-line message using backticks.
// EX4: Combine variables and text without using +, only ${} inside backticks.
// EX5: Build a URL string: `https://site.com/user/${userId}` and log it.

let name1 = "Jocelin";
console.log(`Welcome, ${name1}`);

let product = "ps5";
let price = 10;

console.log(`the ${product} is just ${price}!`);

const med = "panadol";
const price1 = 20;

console.log(`Product: ${med}
    Price: ${price1}`);

let country = "japan";
let country2 = "brazil";

console.log(`${country} is really far from ${country2}`);

let userId = 12345;
console.log(`https://site.com/user/${userId}`);
