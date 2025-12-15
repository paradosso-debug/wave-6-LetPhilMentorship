// 🌱 Project 05 — Functions
// 🎯 Topic: Return Values
// ------------------------------------------------------------

// EX1: Declare sum(a, b) that RETURNS a + b (not console.log).
// EX2: Store the return of sum(3,4) in a variable result; log result.
// EX3: Declare isAdult(age) that RETURNS true if age >= 18, else false.
// EX4: Declare fullName(fn, ln) that RETURNS `${fn} ${ln}`; log the returned value.
// EX5: Explain in a comment why returning is different from logging (you can reuse returned values).

function addition(a, b) {
  return a + b;
}
// console.log(addition(2, 2));

let result = addition(100, 200);

console.log(result);

function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isAdult(13));

function fullName(fn, ln) {
  return `${fn} ${ln}`;
}

console.log(fullName("Toby", "Dix"));
