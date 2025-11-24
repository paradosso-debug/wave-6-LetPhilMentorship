// 🌱 Project 02 — Operators & Conditionals
// 🎯 Topic: Logical AND (&&) / OR (||)
// ------------------------------------------------------------
// Each file contains FIVE mini-examples (EX1–EX5).
// For mentees: follow the steps (comments only).
// For mentors: same steps + working code for each EX.
// ------------------------------------------------------------
// EX1: hasTicket && isVIP → canEnterVIP.
// EX2: hasTicket || isVIP → canEnterEvent.
// EX3: isLoggedIn && hasSubscription → canWatch.
// EX4: isAdmin || isEditor → canEdit.
// EX5: !isBanned && isMember → canJoin.

let hasTicket = true;
let isVIP = true;

console.log(hasTicket && isVIP);

let canEnterEvent = hasTicket || isVIP;
console.log(canEnterEvent);

console.log(hasTicket || isVIP);

let isLoggedIn = true;
let hasSubscription = false;
console.log(isLoggedIn && hasSubscription);

let canWatch = isLoggedIn && hasSubscription;
console.log(canWatch);

let isAdmin = true;
let isEditor = false;
console.log(isAdmin || isEditor);

let isBanned = false;
let isMember = true;
console.log(!isBanned && isMember);
