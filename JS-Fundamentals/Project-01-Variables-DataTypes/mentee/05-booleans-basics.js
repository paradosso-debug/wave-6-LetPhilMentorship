// 🌱 Project 01 — Variables & Data Types
// 🎯 Topic: Booleans — Basics
// ------------------------------------------------------------

// EX1: Create `isLoggedIn = true`, log a welcome message if true.
// EX2: Create `hasSubscription = false`, log different message if false.
// EX3: Use `!` (not) to invert a boolean and log the result.
// EX4: Combine two booleans with && and log the result.
// EX5: Combine with || and log the result.

let isLoggedIn = true;

if (isLoggedIn === true) {
  console.log("Hello");
}

let isLoggedIn2 = true;
if (isLoggedIn2) console.log("Hi");

let hasSubscription = false;

if (hasSubscription === false) {
  console.log("not logged bro");
}

let hasSubscription2 = false;
if (!hasSubscription2) console.log("Not Logged in again");

let mode = false;
console.log(!mode);

let lightMode = true;

console.log(lightMode && !mode);

let mode2 = true,
  lightMode2 = true;
console.log(mode2 && lightMode2);

let v1 = true,
  v2 = false;
console.log(v1 || v2);
