# Project-06 — Focus Task Board

## 🌱 Overview

In this project, you will build a **Focus Task Board** using:

- DOM selection (`document.getElementById`)
- Click events (`addEventListener("click", ...)`)
- Keyboard events (`keydown`)
- Everything you've already practiced:
  - Variables & data types
  - Operators
  - Conditionals
  - Loops
  - Arrays & objects
  - Functions

You’ll create a small app where you can:

- Add tasks with a title, difficulty, and estimated minutes.
- Mark tasks as done or active.
- Filter tasks: **All**, **Active**, **Completed**.
- See updated stats: total, completed, remaining.

---

## 🧩 Files You Will Work With

- `index.html`  
  Contains only **instructions as comments**.  
  You will write all the HTML structure yourself.

- `styles.css`  
  Already completed for you so the app looks nice.  
  You just use the class names mentioned in the comments.

- `script.js`  
  Contains **step-by-step instructions as comments**.  
  You will turn them into real JavaScript code.

---

## 🧠 What You’ll Practice

- Selecting elements from the page (DOM).
- Storing tasks in an **array of objects**.
- Using **functions** to organize logic:
  - validation
  - adding tasks
  - toggling completion
  - clearing completed tasks
  - calculating stats
  - rendering tasks into the DOM
- Using **loops** and **conditionals** to decide what to display.
- Using **events** to react to user actions (clicks and key presses).

---

## 🪜 Suggested Steps

1. **Build the HTML structure**

   - Open `index.html`.
   - Follow each STEP comment one by one.
   - Don’t rush to the JavaScript yet — get the layout and ids correct first.

2. **Look at `styles.css`**

   - Get familiar with class names like:
     - `app`, `card`, `layout`, `field`, `button-row`, `task-list`, `task-item`, etc.
   - Make sure your HTML uses those class names so the styles apply.

3. **Work through `script.js` step-by-step**

   - Start at **STEP 1** and move down in order.
   - After each small section, test in the console or by clicking in the UI.
   - Example: after you finish `addTask`, try calling it manually in the console.

4. **Test the flow**
   - Add a couple of tasks.
   - Mark them complete/in progress.
   - Switch between filters.
   - Check if stats update correctly.

---

## ✅ Checklist

You’re done when:

- [ ] The page shows the Focus Task Board layout with form, filters, stats, and an empty state.
- [ ] Clicking **Add Task** adds a task to the list.
- [ ] Clicking the task button toggles between **Done** and **In progress**.
- [ ] Clicking **Clear Completed** removes all tasks that are done.
- [ ] The filter buttons:
  - [ ] **All** shows every task.
  - [ ] **Active** shows only tasks that are not completed.
  - [ ] **Completed** shows only finished tasks.
- [ ] The stats (Total, Completed, Remaining) always match what you see in the list.

---

## 💬 Final Reminder

This project brings together **many skills at once**.  
It’s normal if it feels bigger or more challenging than previous ones.

Take it in small steps, use `console.log` often, and don’t be afraid to experiment.  
Every bug you fix is another level-up in your JavaScript journey 💪
