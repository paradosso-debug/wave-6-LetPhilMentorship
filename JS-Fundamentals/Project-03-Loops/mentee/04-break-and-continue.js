// 🌱 Project 03 — Loops
// 🎯 Topic: Break & Continue — Control Flow
// ------------------------------------------------------------
// EX1: Loop numbers 1–10; stop (break) when you reach 6.
// EX2: Loop numbers 1–10; skip (continue) odd numbers.
// EX3: Given an array of items, stop when you find "target"; log its index.
// EX4: Given an array of numbers, skip negatives; log only non-negative values.
// EX5: Explain when to use break vs continue in a comment.

for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

const arr = ["not target", "fake target", "random item", "target", "lalala"];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "target") {
    console.log(i);
    break;
  }
}
