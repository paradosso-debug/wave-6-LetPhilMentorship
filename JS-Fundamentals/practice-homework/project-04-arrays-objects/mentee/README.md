# Project 04 — Study Resource Library (Arrays & Objects)

## 🎯 Goal

Build a small **Study Resource Library** page where JavaScript:

- Uses an **array of objects** to store study resources.
- Loops over that array to build a text summary.
- Calculates totals (how many resources, total minutes).
- Uses **conditionals** to give feedback about the study plan.
- Writes the result into the page using the **DOM**.

This project **adds Arrays & Objects** on top of everything learned so far:

- ✅ Variables (`let`, `const`)
- ✅ Data types (strings, numbers, booleans)
- ✅ Operators (`+ - * /`, comparison operators)
- ✅ Conditionals (`if / else if / else`)
- ✅ Loops (`for`, `for...of`)
- ⭐ Arrays (lists of values, e.g. `[1, 2, 3]`)
- ⭐ Objects (grouped info, e.g. `{ title: "Loops", minutes: 30 }`)
- ⭐ Arrays of objects (a list of many resource objects)

---

## 🧩 What the page does

When the user clicks a button:

1. Your JavaScript creates an **array** called something like `resources`.
2. Each element in `resources` is an **object** with properties, for example:
   - `title` (string)
   - `type` (string, e.g. `"video"`, `"article"`, `"exercise"`)
   - `minutes` (number)
   - `difficulty` (string, e.g. `"beginner"`, `"intermediate"`, `"advanced"`)
3. A **loop** goes through the array and builds one line of text per resource:
   - Example: `"1. [video] Arrays Deep Dive — 25 min — difficulty: intermediate"`
4. The loop also:
   - adds up total minutes studied,
   - counts how many advanced resources there are,
   - counts how many exercises there are.
5. After the loop, a **conditional** decides a feedback message:
   - short plan vs. solid vs. intense.
6. The final multi-line summary is written to `<pre id="libraryOutput">`
   using `.textContent`.

---

## 📂 Folder structure

### `mentee/` — For students

You get **only instructional comments**, no solutions:

- `index-mentee.html`
  - Comments tell you exactly which tags and ids to create:
    - `<h1>`, short `<p>`, `<button id="buildLibraryBtn">`,
      `<h2>`, `<pre id="libraryOutput">`.
- `project-04-arrays-objects-mentee.js`
  - Step-by-step guidance to:
    - create an array of resource objects,
    - loop over them to build lines and totals,
    - use conditionals for feedback,
    - update the DOM.

### `mentor/` — For you as instructor

Same structure, but with **working code**:

- `index-mentor.html`
  - Complete HTML that follows the mentee instructions.
- `project-04-arrays-objects-mentor.js`
  - Full implementation that:
    - defines an array of objects,
    - uses a loop, operators, and conditionals,
    - builds a template literal summary,
    - writes to the DOM,
    - logs a couple of `typeof` checks to revisit data types.

---

## ✅ Completion checklist for mentees

- [ ] I created the HTML structure and used the correct ids.
- [ ] I defined an **array of objects** for the study resources.
- [ ] I used a **loop** to go through every item in the array.
- [ ] I used **operators** to add up total minutes and counts.
- [ ] I used **if / else** to decide a feedback message.
- [ ] I built the final summary using a **template literal**.
- [ ] I updated the page with `.textContent` on the `<pre>` element.
