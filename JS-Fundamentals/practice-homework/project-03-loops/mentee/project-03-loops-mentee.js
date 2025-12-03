/*
Project-03 — Study Session Loop Tracker 
---------------------------------------------------

Goal:
  Use a LOOP plus everything you learned before:
    - variables
    - data types
    - operators
    - conditionals

Idea:
  The user types:
    - how many study sessions they did (sessions)
    - how many minutes each session lasted (minutesPerSession)
  You:
    - loop from 1 up to sessions,
    - calculate total minutes,
    - build a multi-line text summary,
    - add a final line of feedback (light / solid / intense day).

HTML ids used:
  sessions          → <input> for number of sessions
  minutesPerSession → <input> for minutes per session
  buildSummaryBtn   → <button> to start the calculation
  summaryOutput     → <pre> where the summary will appear
*/

// 🧠 STEP 1 — SELECT ELEMENTS FROM THE PAGE
// 1A) Create a constant named sessionsInput for:
//       document.getElementById("sessions")
//
// 1B) Create a constant named minutesInput for:
//       document.getElementById("minutesPerSession")
//
// 1C) Create a constant named buildSummaryBtn for:
//       document.getElementById("buildSummaryBtn")
//
// 1D) Create a constant named summaryOutput for:
//       document.getElementById("summaryOutput")

// 🎯 STEP 2 — ADD A CLICK EVENT TO THE BUTTON
// 2A) Use addEventListener on buildSummaryBtn.
//     - Event type: "click"
//     - Callback function name: buildStudySummary
//
//   Example SHAPE (do not just copy blindly):
//     buildSummaryBtn.addEventListener("click", buildStudySummary);

// 🔁 STEP 3 — CREATE THE buildStudySummary FUNCTION
// 3A) Create a function named buildStudySummary with no parameters:
//
//       function buildStudySummary() {
//         // your code here
//       }
//
// 3B) Inside buildStudySummary, follow these mini-steps:

//   🔹 3B-1 — Read and convert input values
//       - Create a constant named sessionsCount = Number(sessionsInput.value)
//       - Create a constant named minutesPerSession = Number(minutesInput.value)
//
//   🔹 3B-2 — Validate the inputs with conditionals
//       - If sessionsCount is NOT a valid number, or sessionsCount <= 0,
//         set summaryOutput.textContent to a friendly error message and return.
//       - If minutesPerSession is NOT a valid number, or minutesPerSession <= 0,
//         do the same: show an error and return.
//
//   🔹 3B-3 — Prepare variables for the loop
//       - Create a variable totalMinutes using let, start at 0.
//       - Create a variable summaryText using let, start as an empty string: "".

//   🔹 3B-4 — Use a for loop
//       - Write a for loop that starts at 1 and ends at sessionsCount (inclusive).
//           for (let sessionNumber = 1; sessionNumber <= sessionsCount; sessionNumber++) {
//             // inside the loop...
//           }
//
//       - Inside the loop:
//           * Add minutesPerSession to totalMinutes using +=
//           * Build one line of text for each session:
//               "Session X: Y minutes (running total: Z minutes)"
//             where:
//               X = sessionNumber
//               Y = minutesPerSession
//               Z = totalMinutes
//           * Add a "\n" newline at the end of each line so that each shows on a new line.
//           * Append each new line to summaryText using +=

//   🔹 3B-5 — Create feedback text using conditionals
//       - After the loop finishes, use if / else if / else with totalMinutes:
//           * If totalMinutes < 60        → light study day
//           * Else if totalMinutes < 180  → solid study day
//           * Else                        → intense study day
//
//       - Store this message in a variable named feedbackMessage.
//
//   🔹 3B-6 — Build final multi-line summary using a template literal
//       - Combine summaryText + a blank line + feedbackMessage into one string.
//       - Example shape:
//           const finalSummary = summaryText + "\n" + "Summary: " + feedbackMessage;
//         or use a backtick template (`...`) with \n inside.
//
//   🔹 3B-7 — Write the summary into the <pre>
//       - Set: summaryOutput.textContent = finalSummary;

//   🔹 3B-8 — typeof checks (optional but recommended)
//       - console.log(typeof sessionsCount);
//       - console.log(typeof minutesPerSession);
//       - console.log(typeof totalMinutes);

// 🧩 STEP 4 — TEST YOUR LOOP
// 4A) Try sessions = 3 and minutesPerSession = 25.
// 4B) Check the loop lines and total minutes.
// 4C) Make sure the feedback message changes when you increase totalMinutes.
