// 🌱 Project 03 — Loops
// 🎯 Topic: Nested Loops — 2D Patterns
// ------------------------------------------------------------
// EX1: Print a 3×3 grid of coordinates like (row, col).
// EX2: Build a right triangle of stars 1–5 rows (line i has i stars).
// EX3: Multiply table 1–3 by 1–3; log "i × j = result".
// EX4: Given a 2D array [[1,2],[3,4]], log every value.
// EX5: Build a 2D array (3 rows × 2 cols) filled with 0 and log it.

for (let print = 1; print <= 3; print++) {
  for (let x = 1; x <= 3; x++) console.log(`${print}, ${x}`);
}

const stars = "*";
for (let i = 1; i <= 5; i++) {
  console.log(stars.repeat(i));
  //   console.log("triangle \n" + stars);
}

// const star = "";
// for (let i = 1; i <= 5; i++) {
//   star += "*".repeat(i);
// }
// console.log(star);
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
