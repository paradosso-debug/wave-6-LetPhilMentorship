# Project-05 — Study Session Planner

## 🌱 Overview

In this project, you will practice **JavaScript functions** by building a small app called the **Study Session Planner**.

The idea:  
You choose a **subject**, how many **minutes** you have to study, and how **difficult** the subject feels. Then your JavaScript code will use **functions** to build a helpful study plan.

You already have the HTML and CSS ready. Your job is to finish the **JavaScript functions** in `script.js`.

---

## 🧠 What You Will Practice

- Creating functions with the `function` keyword.
- Using **parameters** (inputs) and **return values** (outputs).
- Calling one function **inside another function**.
- Using `if`, `else if`, and `else` for decision-making.
- Using `Math.floor()` to calculate whole blocks of time.
- Reading values from form inputs and updating the page (DOM).

---

## 🧩 Real-Life Relevance

These skills are useful for many real apps:

- **Study apps** → plan sessions, track focus time, set breaks.
- **Productivity tools** → timers, task estimators, daily plans.
- **Fitness apps** → calculate sets, rest times, and workout blocks.
- **Finance tools** → estimate savings, split payments, calculate totals.

Any time you need to **take input, process it, and show a result**, you’ll use the same function patterns you practice here.

---

## 📁 Files in This Project

- `index.html`  
  The structure of the page: inputs for subject, minutes, difficulty, a button, and an output area.

- `styles.css`  
  Basic styles so the page looks clean and readable.

- `script.js`  
  **Your main playground.** It currently contains **instructions as comments**.  
  You will turn those instructions into real code.

---

## 🪜 Suggested Steps to Complete the Project

You don’t have to do everything at once. You can go step by step:

1. **Open `index.html` in your browser.**  
   Make sure you see the Study Session Planner UI.

2. **Open `script.js` in your code editor.**  
   Read all the comments slowly. They guide you step by step.

3. **Implement the functions in this order:**

   1. DOM selection (STEP 1)
   2. `validateInputs(subject, minutes)`
   3. `calculatePomodoroBlocks(minutes)`
   4. `getBreakLengthByDifficulty(difficulty)`
   5. `getFocusMessage(difficulty)`
   6. `buildStudyPlanText(subject, minutes, difficulty)`
   7. `handleBuildPlan()`
   8. `addEventListener("click", handleBuildPlan)`

4. **Test as you go.**

   - Use `console.log()` to check what your functions return.
   - Try calling your functions with fake values in the browser console.

5. **Use the UI.**  
   Once everything is connected, type a subject, minutes, and difficulty, then click **Build My Study Plan** and see the result.

---

## 💡 Study Tips While You Code

- Think of each function as a **small worker** with a clear job.
- Don’t jump straight to the big function. Build and test each small helper first.
- If something breaks, check:
  - Function **names** (they must match exactly).
  - Parameter **order** (subject vs minutes vs difficulty).
  - Return values (are you returning the final string or just logging it?).

---

## ✅ Completion Checklist

You can mark these as you go:

- [ ] I selected all DOM elements in STEP 1 using `document.getElementById`.
- [ ] I created `validateInputs(subject, minutes)` and it returns helpful messages.
- [ ] I created `calculatePomodoroBlocks(minutes)` using `Math.floor`.
- [ ] I created `getBreakLengthByDifficulty(difficulty)` with `if / else if / else`.
- [ ] I created `getFocusMessage(difficulty)` that returns different motivational texts.
- [ ] I created `buildStudyPlanText(subject, minutes, difficulty)` that combines all helpers.
- [ ] I created `handleBuildPlan()` and connected it to the button click with `addEventListener`.
- [ ] When I use the app in the browser, it builds a clear study plan based on my inputs.

---

## 🎯 End Goal

By the time you finish this project, you should feel more comfortable with:

- Writing your own functions from scratch.
- Deciding what should be a **parameter** and what should be a **return value**.
- Breaking a bigger feature (study planner) into **small, manageable functions**.

Take your time, experiment, and don’t be afraid to test things in the console.  
Every line you write is one more rep for your JavaScript muscle 💪
