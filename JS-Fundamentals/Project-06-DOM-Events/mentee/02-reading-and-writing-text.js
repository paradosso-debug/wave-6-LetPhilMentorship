// 🌱 Project 06 — DOM & Events
// 🎯 Topic: Reading & Writing — textContent / innerText / attributes
// ------------------------------------------------------------

// EX1: Read textContent of #title and log it.
// EX2: Change textContent of #title to a new message.
// EX3: Read href of a link <a> using getAttribute('href') and log it.
// EX4: Set href to a new URL using setAttribute.
// EX5: In a comment, explain why textContent is safer than innerHTML for simple text.

const title = document.createElement("h2");
title.id = "title";
title.textContent = "hello";
document.body.appendChild(title);

console.log(title);

title.textContent = "spiderman";
console.log(title.textContent);

const newTitle = document.createElement("a");
newTitle.href = "https://google.com";
newTitle.textContent = "Google";
document.body.appendChild(newTitle);
console.log(newTitle.getAttribute("href"));

newTitle.setAttribute("href", "https://apple.com");
console.log(newTitle.getAttribute("href"));
newTitle.href = "https://apple.com/mac";
console.log(newTitle);
