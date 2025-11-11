// 🌱 Project 02 — Variables & Data Types
// 🎯 Topic: Variable Reassignment
// ------------------------------------------------------------

// EX1: Create `let mood = "calm"` then reassign to "focused", log both states.
// EX2: Start `let score = 10`, add 5, log final.
// EX3: Start `let temp = 20`, subtract 3, log final.
// EX4: Start `let steps = 0`, increase by 1 three times, log each update.
// EX5: Explain in a comment why `const` cannot be reassigned.

let mood = "calm";
console.log(mood);
mood = "focused";
console.log(mood);

let score = 10;
console.log(score + 5);

// let score = 10;
// score = score + 5;
// console.log(score)

let temp = 20;
final = temp - 3;
console.log(final);

// let temp = 20;
// temp = temp - 3;
// console.log(temp);

let steps = 0;
console.log((steps += 1));
console.log((steps += 1));
console.log((steps += 1));

// const is constantly binding and let lets us reassign

string = "string";
string = "not string";
console.log(string);
