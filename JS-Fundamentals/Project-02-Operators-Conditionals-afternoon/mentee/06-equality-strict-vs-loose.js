// 🌱 Project 02 — Operators & Conditionals
// 🎯 Topic: Equality (== vs ===)
// ------------------------------------------------------------
// Each file contains FIVE mini-examples (EX1–EX5).
// For mentees: follow the steps (comments only).
// For mentors: same steps + working code for each EX.
// ------------------------------------------------------------
// EX1: Compare 5 == "5" (loose).
// EX2: Compare 5 === "5" (strict).
// EX3: Compare true == 1 and true === 1.
// EX4: Explain why === is safer in real apps.
// EX5: Use Number("5") === 5 and log result.

console.log(5 == "5");

const number = 5;
const string = "5";

console.log(number === string);

const boolean = true;
const numero = 1;
console.log(boolean == numero, boolean === numero);

const num = "5";

const conversion = Number(num);
console.log(conversion === 5);
