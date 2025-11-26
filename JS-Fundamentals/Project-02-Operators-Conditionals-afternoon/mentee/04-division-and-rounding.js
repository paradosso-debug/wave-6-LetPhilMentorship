// 🌱 Project 02 — Operators & Conditionals
// 🎯 Topic: Division (/) & Rounding
// ------------------------------------------------------------
// Each file contains FIVE mini-examples (EX1–EX5).
// For mentees: follow the steps (comments only).

// ------------------------------------------------------------
// EX1: total / people = share each.
// EX2: minutes / 60 = hours (consider decimals).
// EX3: Use Math.round() to round 7.5.
// EX4: Use Math.floor() on 7.9 and Math.ceil() on 7.1.
// EX5: Think: what happens if divisor is 0? Write a comment.

const total = 50;
const people = 2;
const division = total / people;
console.log(division);

const minutes = 180;
const hour = 60;
console.log(minutes / hour);

const number = 7.5;
const round = Math.round(number);
console.log(round);

const floor = 7.9;
const ceil = 7.1;
const flooring = Math.floor(floor);
const ceiling = Math.ceil(ceil);
console.log(flooring, ceiling);
