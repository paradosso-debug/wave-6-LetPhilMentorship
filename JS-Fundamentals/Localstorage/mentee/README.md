# Project-LocalStorage — Study Note Saver

## 🌱 Overview

In this project, you will learn how to use **localStorage** to keep data even after the page is refreshed.

You’ll build a **Study Note Saver** that lets you:

- Create notes with:
  - Title
  - Category (JavaScript, HTML, CSS, Mindset)
  - Text
- Save notes in `localStorage`.
- Pin, edit, and delete notes.
- Filter notes by search text and “pinned only”.
- See stats for total notes, pinned notes, and categories.

All of this uses skills you already know:

- Variables & data types
- Conditionals
- Loops
- Arrays & objects
- Functions
- DOM selection & events

---


## 🧠 What is localStorage?

- It’s the browser’s simple built-in **key–value storage**.
- It saves data **as strings**.
- The data stays even if you:
  - refresh the page
  - close the tab and open it again

Basic operations:

- Save: `localStorage.setItem("key", "value")`
- Read: `localStorage.getItem("key")`
- Remove: `localStorage.removeItem("key")`

To store arrays, objects or nested data, we use:

- `JSON.stringify(...)` → convert from JS value → string
- `JSON.parse(...)` → convert string → JS value again

Without this:
- Arrays would break
- Objects would be lost
- Your app couldn’t restore data correctly

In this project, you’ll save an **array of note objects** in localStorage.

---



## ✅ Checklist

You’re done when:

- [ ] You can add a note and see it in the list.
- [ ] Refreshing the page keeps your notes.
- [ ] Pinning a note works and updates the UI.
- [ ] “Pinned only” filter works.
- [ ] Deleting a note removes it from the list and from localStorage.
- [ ] “Clear all” removes everything from localStorage.
- [ ] Stats update correctly based on visible notes.

---

## 💬 Final Reminder

localStorage is one of the first steps toward **real app behavior**:
your app “remembers” things between visits.
