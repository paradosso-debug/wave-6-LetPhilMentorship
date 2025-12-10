// 🌱 Project 05 — Functions
// 🎯 Topic: Function Declarations — Basics
// ------------------------------------------------------------

// EX1: Declare a function named greet that logs "Hello!". Then call it.
// EX2: Declare sayName that logs your name. Call it twice.
// EX3: Declare showTime that logs a made-up time like "10:30". Call once.
// EX4: Explain in a comment where the function body starts and ends (curly braces).
// EX5: Explain in a comment what happens if you call a function before it's declared (hoisting for declarations).

function greet(color) {
  console.log("My fav color is" + " " + color);
}
greet("Blue");
greet("Green");
greet("Yellow");

function name() {
  console.log("austin");
}

name();
name();

function showTime() {
  console.log("12:35");
}
showTime();
