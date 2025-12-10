// 🌱 Project 04 — Arrays & Objects
// 🎯 Topic: Objects — Basics
// ------------------------------------------------------------

// EX1: Create an object user with { name, age, email } and log it.
// EX2: Read a single property with dot notation and log it.
// EX3: Add a new property (user.city) and log the updated object.
// EX4: Update an existing property (user.age) and log the result.
// EX5: Delete a property with delete user.email and log the object.

const user = {
  name: "austin",
  age: 26,
  email: "austin@gmail.com",
};
console.log(user);

console.log(user.name);

user.city = "Dallas";

console.log(user);

user.age = 27;
console.log(user);

delete user.email;

console.log(user);
