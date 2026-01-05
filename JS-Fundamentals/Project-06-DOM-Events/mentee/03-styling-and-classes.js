// 🌱 Project 06 — DOM & Events
// 🎯 Topic: Styling & Classes — style, classList.add/remove/toggle
// ------------------------------------------------------------

// EX1: Select a <p> and change its style.color to 'purple'.
// EX2: Add a class 'highlight' to #title using classList.add.
// EX3: Remove the class 'highlight' using classList.remove.
// EX4: Toggle a class 'active' on a button using classList.toggle.
// EX5: In a comment, explain why classes are preferred over direct style changes.

const paragraph = document.createElement("p");
paragraph.id = "paragraph";
paragraph.textContent = "qweerrty";
document.body.appendChild(paragraph);
paragraph.style.color = "purple";
console.log(paragraph);

const ttitle = document.createElement("h1");
ttitle.id = "title";
ttitle.textContent = "text here";
document.body.appendChild(ttitle);

ttitle.classList.add("highlight");
console.log(ttitle.className);

ttitle.classList.remove("highlight");
console.log(ttitle);

const butt = document.createElement("button");
butt.textContent = "click here";
document.body.appendChild(butt);
butt.classList.toggle("active");
console.log(butt.className);
