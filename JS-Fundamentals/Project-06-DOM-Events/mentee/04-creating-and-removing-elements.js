// 🌱 Project 06 — DOM & Events
// 🎯 Topic: Creating & Removing Elements — createElement, append, remove
// ------------------------------------------------------------

// SETUP:
// Create a <ul> element and append it to the document body.
// This list will be used in EX1 to append <li> items.

// EX1: Create a new <li> with text 'New item' and append to the <ul>.
// EX2: Create an <img> with setAttribute('alt', 'avatar') and append to body.
// EX3: Create a <div> with class 'card' and text, then append to body.
// EX4: Remove the <img> from the page using element.remove().
// EX5: In a comment, explain the difference between appendChild and append.

const ul = document.createElement("ul");
document.body.appendChild(ul);
const li = document.createElement("li");
li.textContent = "New Item";
ul.appendChild(li);

const image = document.createElement("img");
image.src = "";
image.setAttribute("alt", "avatar");
document.body.appendChild(image);

const div1 = document.createElement("div");
div1.className = "card";
div1.textContent = "card";
document.body.appendChild(div1);

image.remove();
