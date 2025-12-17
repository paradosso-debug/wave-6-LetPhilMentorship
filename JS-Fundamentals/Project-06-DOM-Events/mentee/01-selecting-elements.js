// 🌱 Project 06 — DOM & Events
// 🎯 Topic: Selecting Elements — querySelector / querySelectorAll
// ------------------------------------------------------------

// EX1: Select a heading  and log it.
// EX2: Select all items with class .item using querySelectorAll and log the NodeList length.
// EX3: Select the first button on the page and log its text.
// EX4: Select a link with attribute selector a[href] and log its href.
// EX5: In a comment, explain the difference between querySelector and querySelectorAll.

// const title = document.querySelector("h1");
// console.log(title);

const title = document.createElement("h1");
title.id = "title";
title.textContent = "Welcome!";
document.body.appendChild(title);

const nodeList = document.createElement("ul");
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.className = "item";
  li.textContent = "Item" + (i + 1);
  document.body.appendChild(li);
}
document.body.appendChild(nodeList);
const items = document.querySelectorAll(".item");
console.log(items.length);
