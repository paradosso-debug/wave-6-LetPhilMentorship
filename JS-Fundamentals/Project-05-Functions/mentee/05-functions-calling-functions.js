// 🌱 Project 05 — Functions
// 🎯 Topic: Function Composition — Calling Functions
// ------------------------------------------------------------

// EX1: Make basePrice() return 100; make addTax(amount) return amount * 1.16; log addTax(basePrice())
// EX2: Make greet(name) and exclaim(text) → log exclaim(greet(name)) (hint: greet can return a string).
// EX3: Make toCelsius(f) and prettyTemp(c) → log prettyTemp(toCelsius(86)).
// EX4: Make sanitize(text) that trims spaces and lowercases; make isEmpty(text) that returns true if length===0; log both steps in sequence.
// EX5: Explain how small single-purpose functions can be combined to solve bigger tasks.

function basePrice() {
  return 100;
}

function addTax(amount) {
  return amount * 1.16;
}

console.log(addTax(basePrice()));

function greet(name) {
  return `Welcome, ${name}`;
}

function exclaim(text) {
  return `${text}!`;
}

console.log(exclaim(greet("Asher")));

function toCelsius(f) {
  return (f - 32) / 1.8;
}

function prettyTemp(c) {
  return `${c}C°`;
}

console.log(prettyTemp(toCelsius(30)));

function sanitize(text) {
  return text.trim().toLowerCase();
}

function toEmpty(text) {
  return text.length === 0;
}

let dirty = "    Random      ";
let sanitized = sanitize(dirty);
console.log(sanitized, toEmpty(sanitized));
