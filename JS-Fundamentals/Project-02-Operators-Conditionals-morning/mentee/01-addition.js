// 🌱 Project 02 — Operators & Conditionals
// 🎯 Topic: Addition (+)
// ------------------------------------------------------------
// Each file contains FIVE mini-examples (EX1–EX5).
// For mentees: follow the steps (comments only).
// For mentors: same steps + working code for each EX.
// ------------------------------------------------------------
// EX1: Add two numbers and log the sum.
// EX2: Add price + tax and log total.
// EX3: Add minutes + extraMinutes, log final.
// EX4: Add two strings that look like numbers—explain why it's concatenation.
// EX5: Convert "5" to a number with Number() and add to 7, log result.

let num = 1;
let num2 = 2;
console.log(num + num2);

const price = 1;
const tax = 1;
console.log(price + tax);

let minutes = 30;
let extraMinutes = 10;
console.log(minutes + extraMinutes);

let num3 = "5";
let num4 = "1";

console.log(num3 + num4);

console.log("'2' + '4' =", "5" + "5");

const num5 = "5";
console.log(num5 + 7);

let string = "5";
let convertedString = Number(string);
let result = convertedString + 7;
console.log(result);

let convertedNumber = String(5);
console.log(convertedNumber);

let ex = (5).toString();
console.log(ex, typeof ex);
