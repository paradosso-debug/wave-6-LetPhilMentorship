// 🌱 Project 05 — Functions
// 🎯 Topic: Arrow Functions — Syntax & When to Use
// ------------------------------------------------------------

// EX1: Convert sum(a, b) into an arrow function assigned to const sum2.
// EX2: Create const square = (n) => n * n; log square(5).
// EX3: Create const shout = (text) => `${text}!`; log shout("hello").
// EX4: Create const isEven = (n) => n % 2 === 0; log checks for 2 and 3.
// EX5: Explain when arrow functions are handy (short callbacks, 1-liners).

const sum2 = (a, b) => a + b;
console.log(sum2(5, 5));

const square = (n) => n * n;
console.log(square(5));

const shout = (text) => `${text.toUpperCase()}!`;
console.log(shout("Hello"));

const isEven = (n) => n % 2 === 0;
console.log(isEven(2), isEven(3));

function greet() {
  console.log("Welcome");
}

greet();
