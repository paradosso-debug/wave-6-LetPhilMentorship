# Project-01-LocalStorage — Bookmark Dock

## 🌱 Overview

In this project, you’ll build a **Bookmark Dock** that remembers your favorite learning links using `localStorage`.

You will:

- Add bookmarks with:
  - title
  - URL
  - category (JavaScript, HTML, CSS, Tools, Fun)
  - rating (1–5, optional)
- Mark bookmarks as **favourites**.
- Filter by:
  - search text
  - category
  - favourites only
- Sort by:
  - default order
  - title
  - rating
- Keep everything saved even when you refresh the page.

This project uses everything you’ve been practicing:

- Variables & data types
- Operators & conditionals
- Loops
- Arrays & objects
- Array methods
- Functions
- DOM selection & events
- **localStorage**

---

## 🧠 What is localStorage?

- A simple **key–value storage** built into the browser.
- It stores only **strings**.
- Data stays even after you refresh or close the tab.

We use:

- `localStorage.setItem(key, valueString)`
- `localStorage.getItem(key)`
- `JSON.stringify(...)` → object/array → string
- `JSON.parse(...)` → string → object/array

In this project:

- Key: `"bookmark_dock_items"`
- Value: JSON string of an array of bookmark objects.

---

## 🧩 Files

- `index.html`  
  Contains only **comments** with HTML instructions.

- `styles.css`  
  Fully styled light theme with:

  - soft gradient background
  - white cards
  - pill buttons and badges

- `script.js`  
  Contains only instructions (no code).  
  You will write the full logic following the steps.

---

## 🪜 Suggested Steps

1. **Build the HTML layout (`index.html`)**

   - Follow steps 1–20 in the comments.
   - Make sure all `id` values match the ones referenced in `script.js`.

2. **Connect JavaScript**

   - Add `<script src="script.js"></script>` at the bottom of `index.html`.
   - Open DevTools console to see any errors while you code.

3. **Implement localStorage helpers**

   - Start with `loadBookmarksFromStorage()` and `saveBookmarksToStorage()`.
   - Log `bookmarks` to confirm it loads/saves properly.

4. **Create & edit bookmarks**

   - Implement `createBookmarkObject()`, `validateBookmarkInputs()`, and `saveCurrentBookmark()`.
   - Test adding bookmarks and editing them.

5. **Favourite, delete, and clear**

   - Implement `toggleFavorite()`, `deleteBookmark()`, and `clearAllBookmarks()`.

6. **Filtering, sorting, and rendering**

   - Implement `getVisibleBookmarks()` using `.filter()` and `.sort()`.
   - Implement `renderBookmarkList()` using `.forEach()` and DOM methods.

7. **Stats**

   - Implement `calculateStats()` and `renderStats()` using `.reduce()` and `.filter()`.

8. **Hook up events**
   - Add event listeners for buttons, selects, and inputs.
   - Make sure UI updates when you type, click, or clear.

---

## ✅ Checklist

You’re done when:

- [ ] Bookmarks stay in the list after refreshing the page.
- [ ] You can mark/unmark favourites and filter to favourites only.
- [ ] Search and category filter work together.
- [ ] Sort buttons change the order (default, title, rating).
- [ ] Stats (total, favourites, categories) match the visible bookmarks.

---

## 💬 Final Reminder

This project is a mini version of how real apps store user data.

Take it step by step, use `console.log()` generously, and don’t worry if you need to debug a lot — that’s where the real learning happens 💪✨
