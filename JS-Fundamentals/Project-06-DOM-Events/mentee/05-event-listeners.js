// 🌱 Project 06 — DOM & Events
// 🎯 Topic: Event Listeners — click, input, keydown
// ------------------------------------------------------------

// EX1: Add a 'click' listener to a button that logs "Clicked!".
// EX2: Add an 'input' listener to a text box that logs its current value.
// EX3: Add a 'keydown' listener on window that logs pressed key.
// EX4: Inside a click handler, toggle a class on an element to show/hide it.
// EX5: In a comment, explain why we use addEventListener instead of onclick= in HTML.

const button = document.createElement("button");
button.textContent = "click me";
button.className = "whatever";
button.addEventListener("click", () => {
  console.log("Click!!!!!");
});
document.body.appendChild(button);

const input = document.createElement("input");
input.placeholder = "type here";
document.body.appendChild(input);
input.addEventListener("input", (e) => {
  console.log(e.target.value);
});

window.addEventListener("keydown", (key) => {
  console.log(key.key);
});

const div = document.createElement("div");
div.textContent = "show / hide";
// div.className = "idk";
div.style.border = "1px solid black";
document.body.appendChild(div);

button.addEventListener("click", () => {
  div.classList.toggle("hidden");
  console.log(div.className);
});
