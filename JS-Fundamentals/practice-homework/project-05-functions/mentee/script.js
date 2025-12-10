// Project-05 — Study Session Planner
// --------------------------------------------------------------
// 🔑 Goal of this project:
// Practice working with FUNCTIONS in JavaScript by building a small
// "Study Session Planner". The user chooses a subject, minutes,
// and difficulty level, and your functions build a helpful plan.
//
// You will:
// - Select elements from the page (DOM)
// - Create small reusable functions
// - Use parameters (input to a function)
// - Use return values (output from a function)
// - Call functions from inside other functions

// 🧠 STEP 1 — SELECT DOM ELEMENTS
// 1. Create variables for each HTML element:
//    - subjectInput  → the text input for the subject
//    - minutesInput  → the number input for total minutes
//    - difficultySelect → the <select> for difficulty
//    - buildPlanBtn  → the button
//    - planOutput    → the <pre> where the plan text will be shown
//
// 2. Use document.getElementById("idHere") to connect each variable
//    with its matching HTML element.
//
// Example (DO NOT just copy this, write your own):
// const example = document.getElementById("exampleId");

// 🧠 STEP 2 — HELPER FUNCTION: validateInputs(subject, minutes)
// This function will check if the inputs are valid.
//
// 1. Define a function named validateInputs that takes two parameters:
//    - subject  (string / text)
//    - minutes  (number)
//
// 2. Inside the function, check the following:
//    - If subject is empty (subject.trim() === ""), return a message like:
//      "Please enter a subject to study."
//    - If minutes is NOT a number or is less than 10, return a message like:
//      "Please enter at least 10 minutes for your study time."
//
// 3. If everything is OK (subject is not empty and minutes >= 10),
//    return an empty string: ""
//
// 👉 This pattern is common:
//    - Return a string with an error message when something is wrong.
//    - Return "" (no message) when everything is fine.

// 🧠 STEP 3 — FUNCTION: calculatePomodoroBlocks(minutes)
// We will split the total minutes into 25-minute focus blocks.
// Example: 50 minutes → 2 blocks, 40 minutes → 1 block.
//
// 1. Define a function named calculatePomodoroBlocks with 1 parameter: minutes.
// 2. Inside the function:
//    - Create a constant called BLOCK_LENGTH and set it to 25.
//    - Use Math.floor(minutes / BLOCK_LENGTH) to calculate how many
//      full blocks fit into the total minutes.
//    - Return that value.
//
// 👉 Math.floor(...) means "round down" to the nearest whole number.

// 🧠 STEP 4 — FUNCTION: getBreakLengthByDifficulty(difficulty)
// We will choose break length depending on how hard the subject feels.
//
// 1. Define a function named getBreakLengthByDifficulty with 1 parameter: difficulty.
// 2. Use if / else if / else to do this:
//    - If difficulty is "easy", return 3  (3-minute breaks)
//    - If difficulty is "medium", return 5
//    - If difficulty is "hard", return 8
//    - Otherwise (if nothing matches), return 5 as a default.

// 🧠 STEP 5 — FUNCTION: getFocusMessage(difficulty)
// This function returns a motivational message (a string) depending on difficulty.
//
// 1. Define a function named getFocusMessage with 1 parameter: difficulty.
// 2. Use if / else if / else to return different strings, for example:
//    - "You got this! Stay consistent and don't rush." for "easy"
//    - "Great challenge level. Stay focused and take smart breaks." for "medium"
//    - "Deep work time. Be kind to yourself, one block at a time." for "hard"
//    - A default message if none of those match.

// 🧠 STEP 6 — FUNCTION: buildStudyPlanText(subject, minutes, difficulty)
// This is the MAIN function that builds the final text shown to the user.
//
// 1. Define a function named buildStudyPlanText with 3 parameters:
//    - subject
//    - minutes
//    - difficulty
//
// 2. At the top of the function, call validateInputs(subject, minutes)
//    and store the result in a variable named errorMessage.
//
// 3. If errorMessage is NOT an empty string (""), immediately return
//    errorMessage. (This stops the function and sends back the problem
//    message to be shown in the <pre>.)
//
// 4. If there is no error, call your other helper functions:
//    - blocks      = calculatePomodoroBlocks(minutes)
//    - breakLength = getBreakLengthByDifficulty(difficulty)
//    - focusMessage = getFocusMessage(difficulty)
//
// 5. Handle the case where blocks is 0 (not enough time for a full 25-min block):
//    - If blocks === 0, return a short message suggesting a quick review session.
//      (For example: flashcards or reading key notes.)
//
// 6. If blocks is at least 1, calculate:
//    - totalFocusTime = blocks * 25
//    - totalBreakTime = (blocks - 1) * breakLength  (no break after last block)
//    - estimatedTotalUsed = totalFocusTime + totalBreakTime
//
// 7. Build several text sections using template literals with backticks (`):
//    - A header with subject, difficulty, and total minutes
//    - A summary line saying how many blocks and break length
//    - A timing line showing estimatedTotalUsed vs original minutes
//    - A small list of "Plan" steps (bullets starting with "- ")
//    - A final line with the focusMessage
//
// 8. Combine all these pieces into 1 big string called finalText
//    and return finalText.

// 🧠 STEP 7 — MAIN HANDLER: handleBuildPlan()
// This function connects the DOM (HTML elements) with your planner logic.
//
// 1. Define a function named handleBuildPlan (no parameters).
// 2. Inside the function:
//    - Read the current values from the inputs:
//      * subject   = subjectInput.value
//      * minutes   = Number(minutesInput.value)
//      * difficulty = difficultySelect.value
//    - Call buildStudyPlanText(subject, minutes, difficulty)
//      and store the result in a variable called planText.
//    - Set planOutput.textContent = planText so the user sees the text.
// 3. (Optional but recommended) Add console.log lines to check values and types:
//    - console.log("subject:", subject, "typeof:", typeof subject);
//    - console.log("minutes:", minutes, "typeof:", typeof minutes);
//    - console.log("difficulty:", difficulty, "typeof:", typeof difficulty);

// 🧠 STEP 8 — EVENT LISTENER
// Finally, we make sure the button actually triggers our function.
//
// 1. Use buildPlanBtn.addEventListener("click", handleBuildPlan);
// 2. This means: when the user clicks the button, your main handler runs,
//    and the whole chain of functions builds the study plan text.
//
// 🧪 TIP: You can test each helper function in the console as you build them:
//    - After you write validateInputs, try calling it manually with fake values.
//    - Same with calculatePomodoroBlocks and getBreakLengthByDifficulty.
//    - This helps you debug before connecting everything together.
