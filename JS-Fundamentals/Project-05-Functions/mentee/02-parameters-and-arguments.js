// 🌱 Project 05 — Functions
// 🎯 Topic: Parameters & Arguments
// ------------------------------------------------------------

// EX1: Declare greet(name) that logs "Hello, <name>!". Call with your name.
// EX2: Declare add(a, b) that logs a + b. Call with 5 and 7.
// EX3: Declare makeLabel(text, tag) that logs "[tag] text". Call with two strings.
// EX4: Declare area(width, height) that logs width * height. Call with numbers.
// EX5: In a comment, explain the difference between parameters (placeholders) and arguments (actual values).

function greet(name) {
  console.log(`Hello, ${name}`);
}
greet("austin");

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(5, 7);

function makeLabel(tag, text) {
  console.log(`[${tag}] ${text}`);
}

makeLabel("workout", "Pull");

function area(width, height) {
  console.log(width * height);
}

area(2, 4);
