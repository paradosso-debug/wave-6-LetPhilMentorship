# Props → Destructuring → React (A Smooth Bridge Lesson)

This lesson is designed for **absolute beginners**.  
We start in **vanilla JavaScript** (no React), then smoothly “rename” the same ideas into **React vocabulary**.

---

## Learning Goals ✅

By the end, you will be able to explain:

- What “props” _really_ means (without React first)
- What **destructuring** is and why it helps
- How the **same exact idea** shows up in React components
- How to read React code like:  
  `function Card({ title, price }) { ... }`

---

## Big Idea (One Sentence)

**Props are just data you pass into a function, and destructuring is a shortcut for pulling values out of an object.**

React didn’t invent the concept — React just **uses** it.

---

# Part 1 — Vanilla JS: “Props” Without React

## 1) Functions are machines 🧠

A function is like a machine.

- You **put data in** → the machine does something → you get output.

### Vanilla Example (Passing Data In)

```js
function greet(name) {
  console.log("Hello " + name);
}

greet("Alex");
```

**What’s happening?**

- `name` is a **parameter** (the placeholder)
- `"Alex"` is an **argument** (the real value you pass in)

✅ In React, the “data you pass in” is called **props**.

So this is the same idea as props, just not named that yet.

---

## 2) Passing multiple values (the “props object” idea)

When you have multiple values, you commonly pass an **object**:

```js
function showUser(user) {
  console.log(user.name);
  console.log(user.age);
}

showUser({ name: "Alex", age: 25 });
```

Here:

- `user` is an object
- `user.name` and `user.age` are properties

✅ In React, `user` would feel like “props”.

---

# Part 2 — Destructuring in Vanilla JS

## 3) The problem destructuring solves

Without destructuring, you often write this:

```js
function showUser(user) {
  const name = user.name;
  const age = user.age;

  console.log(name);
  console.log(age);
}
```

This repeats `user.` a lot.

---

## 4) Destructuring = “pull values out of an object”

Destructuring lets you do this in one line:

```js
const user = {
  name: "John",
  age: 25,
  height: 6,4
  weight: 300
}

function showUser(user) {
  const { height, weight } = user;

  console.log(height);
  console.log(weight);
}

showUser(user) {

}
```

**Translation in plain English:**

> “From the `user` object, take out `name` and `age` and store them in variables named `name` and `age`.”

---

## 5) Destructuring directly inside the function parameter

Instead of:

```js
function showUser(user) {
  const { name, age } = user;
  console.log(name, age);
}
```

You can do:

```js
function showUser({ name, age }) {
  console.log(name, age);
}
```

**This is the same thing**, just shorter.

---

# Part 3 — The Bridge: Vanilla → React Vocabulary

Here’s the **bridge**:

| Vanilla JavaScript                | React Vocabulary               |
| --------------------------------- | ------------------------------ |
| function parameter                | props (usually an object)      |
| passing an object into a function | passing props into a component |
| destructuring an object           | destructuring props            |

React components are just functions that return UI.

---

# Part 4 — React: Props (Same Idea, New Environment)

## 6) React component with props (no destructuring yet)

```jsx
function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Price: {props.price}</p>
    </div>
  );
}
```

React “calls” your component function like this (conceptually):

```js
Card({ title: "Protein Pancakes", price: 9.99 });
```

So:

- `props` is just an object
- `props.title` is how you read it

---

## 7) React component with destructuring (common style)

```jsx
function Card({ title, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Price: {price}</p>
    </div>
  );
}
```

**What changed?**

- Nothing about the data changed.
- We simply destructured the props object automatically.

This line:

```jsx
function Card({ title, price }) { ... }
```

is the React version of vanilla:

```js
function Card(props) {
  const { title, price } = props;
}
```

---

# Part 5 — Mini Visual: “What React is doing”

When you write:

```jsx
<Card title="Milk" price={2.5} />
```

React turns it into an object like:

```js
{ title: "Milk", price: 2.5 }
```

Then it calls:

```js
Card({ title: "Milk", price: 2.5 });
```

That object is `props`.

---

# Part 6 — Beginner-Friendly Exercises (With Answers)

## Exercise 1 — Vanilla “props” (object argument)

**Task:** Make a function called `printProduct` that takes a `product` object and logs:

- product name
- product price

Starter:

```js
function printProduct(product) {
  // your code
}

printProduct({ name: "Apple", price: 1.25 });
```

✅ Answer:

```js
function printProduct(product) {
  console.log(product.name);
  console.log(product.price);
}

printProduct({ name: "Apple", price: 1.25 });
```

---

## Exercise 2 — Vanilla destructuring

**Task:** Rewrite `printProduct` using destructuring.

✅ Answer:

```js
function printProduct(product) {
  const { name, price } = product;
  console.log(name);
  console.log(price);
}
```

---

## Exercise 3 — Destructure inside the parameter

✅ Answer:

```js
function printProduct({ name, price }) {
  console.log(name);
  console.log(price);
}
```

---

## Exercise 4 — React: same idea

**Task:** Read this code and explain what `title` and `price` are.

```jsx
function Card({ title, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
}
```

✅ Explanation:

- `title` and `price` are variables created by destructuring the `props` object.

---

# Part 7 — Common Beginner Mistakes (and fixes)

## Mistake 1: Forgetting the object shape

If you destructure like this:

```js
function showUser({ name }) { ... }
```

You must pass an object with `name`:

```js
showUser({ name: "Alex" });
```

Not:

```js
showUser("Alex"); // ❌ wrong shape
```

---

## Mistake 2: Property name mismatch

If the object has `firstName`, you must destructure `firstName`:

```js
const { firstName } = user;
```

Not:

```js
const { name } = user; // ❌ undefined
```

---

# Quick Recap 🧩

- **Props** = the object of values React passes into your component function
- **Destructuring** = the shortcut for pulling values out of that object
- React uses **normal JavaScript functions + objects** under the hood

---

**“Props are just an object React hands to your component, and destructuring is how we quickly grab the values we need from that object.”**
