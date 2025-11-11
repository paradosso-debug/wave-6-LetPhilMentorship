// 🌱 Project 01 — Variables & Data Types
// 🎯 Topic: Strings & Concatenation
// ------------------------------------------------------------

// EX1: Make `greeting = "Hello"` and `target = "world"`, log "Hello world".
// EX2: Build a full name from first/last with a space in between.
// EX3: Create `title` and `author`, log "Title by Author".
// EX4: Create `city` and `country`, log "city, country".
// EX5: Explain in a comment the difference between concatenation (+) and template literals.

const greeting = "Hello";
const target = "world";
console.log(greeting + " " + target);

const first = "Brian";
const last = "Jefferson";
console.log(first + " " + last);

const title = "Meditations";
const author = "Marcus Aurelius";
console.log(`${title} by ${author}`);

const country = "Thailand";
const city = "Bangkok";
console.log(city + ", " + country);

// concatenation joins strings with a "+" sign, while template literals uses the back tick.
