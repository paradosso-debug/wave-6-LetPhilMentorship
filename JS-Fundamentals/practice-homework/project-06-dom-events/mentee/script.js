// Project-06 — Focus Task Board
// ----------------------------------------------------------
// Goal: Practice DOM selection and events, while reusing everything
// you've learned so far:
// - variables, data types, operators
// - conditionals, loops
// - arrays, objects, functions
// - DOM + click events

// IMPORTANT:
// This file contains only INSTRUCTIONS as comments.
// Your job is to turn these steps into real JavaScript code.

// 🧠 STEP 1 — SELECT DOM ELEMENTS
// 1. Create variables using const for each key HTML element:
//    - taskTitleInput       → the text input for the task title
//    - difficultySelect     → the <select> for difficulty
//    - minutesInput         → the number input for minutes
//    - addTaskBtn           → the "Add Task" button
//    - clearCompletedBtn    → the "Clear Completed" button
//    - filterAllBtn         → the "All" filter button
//    - filterActiveBtn      → the "Active" filter button
//    - filterCompletedBtn   → the "Completed" filter button
//    - taskList             → the <ul> for all tasks
//    - emptyState           → the <li> used for the initial empty message
//    - totalTasksChip       → the "Total: 0" span
//    - completedTasksChip   → the "Completed: 0" span
//    - remainingTasksChip   → the "Remaining: 0" span
//
// 2. Use document.getElementById("...") for each one.

// 🧠 STEP 2 — DATA STRUCTURE: tasks array
// 1. Create a variable called nextTaskId and set it to 1.
// 2. Create an empty array called tasks.
//    This will hold task objects.
//
// A task object should look like this:
// {
//   id: 1,
//   title: "Review functions",
//   difficulty: "medium",
//   minutes: 25,
//   isCompleted: false
// }
//
// - id          → unique number
// - title       → string (text)
// - difficulty  → string ("easy", "medium", "hard")
// - minutes     → number
// - isCompleted → boolean (true/false)

// 🧠 STEP 3 — HELPER FUNCTION: createTaskObject
// 1. Define a function named createTaskObject that takes 3 parameters:
//    - title
//    - difficulty
//    - minutes
//
// 2. Inside the function:
//    - Create a new task object using the structure described above.
//    - Use nextTaskId for id, and then increase nextTaskId by 1.
//      (For example, nextTaskId++ or nextTaskId = nextTaskId + 1).
//    - Return the new task object.

// 🧠 STEP 4 — HELPER FUNCTION: validateTaskInputs
// 1. Define a function named validateTaskInputs with 2 parameters:
//    - title
//    - minutes
//
// 2. Inside the function, use conditionals to check:
//    - If title.trim() === "", return the string:
//      "Please enter a task title."
//    - If minutes is NOT a valid number or minutes < 5, return:
//      "Please enter at least 5 minutes."
//
// 3. If both checks pass, return an empty string: ""
//
// You will use this to decide whether to show an alert or proceed.

// 🧠 STEP 5 — ACTION FUNCTION: addTask
// 1. Define a function named addTask with 3 parameters:
//    - title
//    - difficulty
//    - minutes
//
// 2. Inside the function:
//    - Call validateTaskInputs(title, minutes) and store the result
//      in a variable named errorMessage.
//    - If errorMessage is not "", show it using alert(errorMessage)
//      and return (stop the function).
//    - If everything is OK:
//      * Create a new task object with createTaskObject(...).
//      * Push it into the tasks array.
//      * Call a helper function (you will create it later) to clear the form.
//      * Call renderTasks() (another function you will create) to update the UI.

// 🧠 STEP 6 — ACTION FUNCTION: toggleTaskCompleted
// 1. Define a function named toggleTaskCompleted with 1 parameter: taskId.
// 2. Inside the function, use a loop (for...of or traditional for) to:
//    - Find the task object in the tasks array whose id matches taskId.
//    - Flip its isCompleted value:
//      If it was true → set to false, if false → set to true.
// 3. After updating the task, call renderTasks() again.

// 🧠 STEP 7 — ACTION FUNCTION: clearCompletedTasks
// 1. Define a function named clearCompletedTasks (no parameters).
// 2. Use the array method .filter() to create a new array with only
//    tasks where isCompleted is false.
// 3. Replace the contents of tasks with that new array.
//    - Hint: you can clear the array with tasks.length = 0,
//      then use a loop to push each remaining task back in.
// 4. Call renderTasks() at the end.

// 🧠 STEP 8 — STATS FUNCTIONS: calculateStats and renderStats
// 1. Define a function named calculateStats (no parameters).
// 2. Inside it:
//    - Use a loop over the tasks array.
//    - Count how many tasks there are in total.
//    - Count how many have isCompleted === true.
//    - Calculate remaining = total - completed.
//    - Return an object like:
//      { total: total, completed: completed, remaining: remaining }
//
// 3. Define another function named renderStats (no parameters).
// 4. Inside renderStats:
//    - Call calculateStats() and save the result in a variable.
//    - Update the textContent of:
//      * totalTasksChip    → "Total: X"
//      * completedTasksChip → "Completed: Y"
//      * remainingTasksChip → "Remaining: Z"

// 🧠 STEP 9 — FILTER STATE + setFilter
// 1. Create a variable named currentFilter and set it to "all".
//    Allowed values will be: "all", "active", "completed".
//
// 2. Define a function named setFilter with 1 parameter: newFilter.
// 3. Inside setFilter:
//    - Set currentFilter = newFilter.
//    - Remove the "active" class from all three filter buttons.
//    - Add the "active" class to the button that matches newFilter.
//    - Call renderTasks() to refresh the list.

// 🧠 STEP 10 — RENDER FUNCTION: renderTasks
// This is the main function that rebuilds the <ul> list based on:
//   - tasks array
//   - currentFilter
//
// 1. Define a function named renderTasks (no parameters).
// 2. At the top, clear the current contents of taskList:
//      taskList.innerHTML = "";
//
// 3. Decide which tasks to show:
//    - If currentFilter === "all" → use all tasks.
//    - If currentFilter === "active" → use only tasks where isCompleted is false.
//    - If currentFilter === "completed" → use only tasks where isCompleted is true.
//    - You can use .filter() or a loop with conditionals.
//
// 4. If there are no tasksToShow (length === 0):
//    - Create a <li> element.
//    - Give it class "empty-state".
//    - Set its textContent to:
//      "No tasks match this filter. Try adding or changing tasks ✨"
//    - Append it to taskList.
//    - Call renderStats() and then return.
//
// 5. If there ARE tasksToShow:
//    - Loop through tasksToShow.
//    - For each task, create DOM elements:
//      * li            → class "task-item" (and if task.isCompleted, also add "completed")
//      * leftDiv       → class "task-left"
//      * titleDiv      → class "task-title"      (textContent = task.title)
//      * metaDiv       → class "task-meta"
//      * difficultySpan → class "badge" + difficulty-specific class
//         - If "easy"   → add class "badge-easy"
//         - If "medium" → add class "badge-medium"
//         - If "hard"   → add class "badge-hard"
//      * minutesSpan   → class "badge", textContent like "25 min"
//      * statusSpan    → class "badge badge-done", text "Done" or "In progress"
//      * completeBtn   → button with class "button-secondary",
//                        text "Mark Done" or "Mark Active" depending on isCompleted.
//
//    - Append children in the correct order:
//      * metaDiv gets difficultySpan, minutesSpan, statusSpan
//      * leftDiv gets titleDiv and metaDiv
//      * li gets leftDiv and completeBtn
//      * taskList gets li
//
//    - For each completeBtn, add a "click" event listener that calls
//      toggleTaskCompleted(task.id).
//
// 6. At the end of renderTasks(), call renderStats().

// 🧠 STEP 11 — SMALL HELPERS: clearTaskForm
// 1. Define a function named clearTaskForm (no parameters).
// 2. Inside it:
//    - Reset the inputs:
//      * taskTitleInput.value = ""
//      * minutesInput.value = ""
//      * difficultySelect.value = "easy"
//    - Optionally call taskTitleInput.focus() to move the cursor back.

// 🧠 STEP 12 — HANDLER FUNCTIONS: handleAddTaskClick, handleClearCompletedClick, handleFilterClick
// 1. Define a function named handleAddTaskClick (no parameters).
//    - Read the current values from the inputs:
//        title      = taskTitleInput.value
//        difficulty = difficultySelect.value
//        minutes    = Number(minutesInput.value)
//    - Call addTask(title, difficulty, minutes).
//
// 2. Define a function named handleClearCompletedClick (no parameters).
//    - Call clearCompletedTasks().
//
// 3. Define a function named handleFilterClick with 1 parameter: filterType.
//    - Call setFilter(filterType).

// 🧠 STEP 13 — EVENT LISTENERS
// 1. Add a "click" event listener to addTaskBtn that calls handleAddTaskClick.
// 2. Add a "click" event listener to clearCompletedBtn that calls handleClearCompletedClick.
// 3. Add "click" listeners to each filter button:
//      filterAllBtn       → on click, call handleFilterClick("all")
//      filterActiveBtn    → on click, call handleFilterClick("active")
//      filterCompletedBtn → on click, call handleFilterClick("completed")
//
// 4. Add a "keydown" event listener to taskTitleInput so that
//    if the key pressed is "Enter", you call handleAddTaskClick().
//
// 5. Finally, call renderTasks() once at the bottom of the file so that
//    the stats and empty state are set up the first time the page loads.

// 🧪 TIP:
// Work step by step. After you finish a small function, test it in the console.
// Then wire it into the bigger flow. Small steps = easier debugging.
