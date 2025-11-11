# Project 01 — Variables & Data Types

## 🌱 Overview

Learn how to **store**, **change**, and **identify** information in JavaScript using variables and data types.

---

## 🧠 Learning Goals

- Use `let` (**changeable variable**) and `const` (**fixed variable**)
- Work with: **strings**, **numbers**, **booleans**, and **objects**
- Check what kind of data something is using `typeof`
- Build readable sentences using **template literals** (`` `like this ${example}` ``)

---

## 📘 What Each One Means

| Concept              | Explanation                                                        | Example                                                       | Console Output                        |
| -------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------- | ------------------------------------- |
| **Variable**         | A container that stores a value so you can use or change it later. | `let age = 25;`                                               | `undefined` (no output unless logged) |
| **`let`**            | Creates a variable that **can be changed** later.                  | `let score = 10; score = 15; console.log(score);`             | `15`                                  |
| **`const`**          | Creates a variable that **cannot be changed** once set.            | `const pi = 3.14; console.log(pi);`                           | `3.14`                                |
| **String**           | Text wrapped in quotes. Used for words, names, and sentences.      | `let greeting = "Hello"; console.log(greeting);`              | `Hello`                               |
| **Number**           | Any numeric value. Used for counting, prices, or scores.           | `let points = 100; console.log(points);`                      | `100`                                 |
| **Boolean**          | True or false value that helps make decisions.                     | `let isLoggedIn = true; console.log(isLoggedIn);`             | `true`                                |
| **Object**           | A structured group of key-value pairs (like a mini data box).      | `let user = { name: "Jocelin", age: 32 }; console.log(user);` | `{ name: 'Jocelin', age: 32 }`        |
| **`typeof`**         | Checks what type of data a value is.                               | `console.log(typeof "Hello");`                                | `string`                              |
| **Template Literal** | Combines text and variables easily using backticks (`` ` ``).      | `` let name = "Aimeé"; console.log(`Hello, ${name}!`); ``     | `Hello, Aimeé!`                       |

---

## 🌍 Real-Life Relevance

- **Variables:** store user input, form data, or settings
- **Strings:** names, emails, product descriptions
- **Numbers:** prices, scores, counts
- **Booleans:** feature toggles, login state
- **Objects:** group related info (e.g., a user profile)
- **Template Literals:** build UI text like receipts, alerts, and greetings

---

## ✅ Checklist

- [ ] I can choose between `let` and `const` correctly
- [ ] I can use strings, numbers, and booleans
- [ ] I can identify data types with `typeof`
- [ ] I can create an object and read its properties
- [ ] I can print readable messages with template literals
