// 🌱 Project 01 — Variables & Data Types
// 🎯 Topic: Booleans — Basics
// ------------------------------------------------------------

// EX1: Create `isLoggedIn = true`, log a welcome message if true.
// EX2: Create `hasSubscription = false`, log different message if false.
// EX3: Use `!` (not) to invert a boolean and log the result.
// EX4: Combine two booleans with && and log the result.
// EX5: Combine with || and log the result.

const isLoggedIn = true;

if (isLoggedIn === true) {
  console.log("true");
}

const isLoggedIn2 = true;
if (isLoggedIn2) console.log("Yes it is true");

const hasSubscription = false;
if (hasSubscription === false) {
  console.log("false");
}

const mode = true;
console.log(!mode);

const boolean1 = true;
const boolean2 = true;
console.log(boolean1 && boolean2);

const on = true;
const off = false;
console.log(on || off);
