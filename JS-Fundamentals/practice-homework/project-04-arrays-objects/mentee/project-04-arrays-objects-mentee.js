// Project-04 — Study Resource Library (MENTEE VERSION)
// --------------------------------------------------------------
// In this file, you will practice working with:
// - ARRAYS (lists)
// - OBJECTS (grouped info)
// - LOOPS (to go through the array)
// - VARIABLES, OPERATORS, CONDITIONALS (all together)
// - DOM (writing text into the page)

// 🧠 STEP 1 — SELECT ELEMENTS FROM THE PAGE
// Use document.getElementById() to select:
//
//   1) The button with id "buildLibraryBtn"
//      - Save it in a constant, e.g. buildLibraryBtn
//
//   2) The <pre> element with id "libraryOutput"
//      - Save it in a constant, e.g. libraryOutput
//
// Example shape (you must write the actual code):
//   const buildLibraryBtn = document.getElementById("buildLibraryBtn");
//   const libraryOutput = document.getElementById("libraryOutput");

// 🧠 STEP 2 — CREATE THE ARRAY OF RESOURCE OBJECTS
// Create a constant named resources.
// Set it equal to an ARRAY of OBJECTS.
//
//   const resources = [ { ... }, { ... }, { ... } ];
//
// Each object should represent 1 study resource and include at LEAST:
//
//   - title: string   (e.g. "Arrays Deep Dive")
//   - type: string    (e.g. "video", "article", "exercise")
//   - minutes: number (e.g. 25)
//   - difficulty: string (e.g. "beginner", "intermediate", "advanced")
//
// Example idea for ONE object (do not just copy, think about the values):
//   {
//     title: "Arrays Deep Dive",
//     type: "video",
//     minutes: 25,
//     difficulty: "intermediate"
//   }
//
// Create at least 4–5 resources in the array.
// This uses:
//   • strings + numbers (data types)
//   • objects with key/value pairs
//   • an array that holds all objects

// 🧠 STEP 3 — PREPARE THE MAIN FUNCTION (functions + loops + operators)
// Create a function named buildLibrarySummary with NO parameters:
//
//   function buildLibrarySummary() {
//     // you will fill it in STEP 4 and STEP 5
//   }
//
// This function will:
//   - loop over the resources array,
//   - build one line of text per resource,
//   - calculate totals (minutes, counts),
//   - create final summary text,
//   - and write it into libraryOutput.textContent.

// 🧠 STEP 4 — LOOP THROUGH THE ARRAY INSIDE THE FUNCTION
// Inside buildLibrarySummary, do the following:
//
//   4A) Create a variable for the running summary text:
//         let summaryText = "";
//
//   4B) Create variables for totals:
//         let totalMinutes = 0;
//         let advancedCount = 0;
//         let exerciseCount = 0;
//
//   4C) Use a for loop (or for...of loop) to go through each resource object:
//         for (let index = 0; index < resources.length; index++) {
//            const resource = resources[index];
//            // work with resource.title, resource.type, etc.
//         }
//
//       or:
//
//         for (const resource of resources) {
//            // work with resource.title, resource.type, etc.
//         }
//
//   4D) Inside the loop:
//       - Add the minutes to totalMinutes using +=.
//       - If the difficulty is "advanced", increase advancedCount by 1.
//       - If the type is "exercise", increase exerciseCount by 1.
//       - Build ONE LINE of text for this resource using a template literal.
//         Suggested shape:
//
//         const line = `${position}. [${resource.type}] ${resource.title} — ${resource.minutes} min — difficulty: ${resource.difficulty}`;
//
//         where position can be index + 1 (1-based counting).
//
//       - Add a "\n" newline at the end so each resource is on its own line.
//       - Append that line to summaryText using +=.

// 🧠 STEP 5 — ADD FEEDBACK WITH CONDITIONALS + TEMPLATE LITERAL
// After the loop finishes, outside of it:
//
//   5A) Create a variable feedbackMessage (let or const).
//
//   5B) Use if / else if / else to set feedbackMessage based on totalMinutes:
//         - If totalMinutes < 60:
//             "This is a light study plan. Great for a quick review."
//         - Else if totalMinutes < 180:
//             "Solid plan. You will cover a good amount of material."
//         - Else:
//             "Intense plan! Make sure to take breaks while you study."
//
//   5C) Create ONE final string that combines:
//         - the summaryText (all lines for each resource)
//         - a blank line
//         - a final block that shows:
//             • total number of resources (resources.length)
//             • totalMinutes
//             • advancedCount
//             • exerciseCount
//             • feedbackMessage
//
//       Use a TEMPLATE LITERAL for this final text.
//       Example shape:
//
//       const finalSummary = `${summaryText}
// Total resources: ...
// Total minutes: ...
// Advanced items: ...
// Exercises: ...
//
// Feedback: ${feedbackMessage}`;

//   5D) Set libraryOutput.textContent = finalSummary;
//        This will update the <pre> on the page.

//   5E) (Optional but recommended)
//       Use console.log and typeof for a few values to remember data types:
//         console.log(typeof totalMinutes);
//         console.log(typeof resources);
//         console.log(typeof resources[0]);

// 🧠 STEP 6 — CONNECT THE BUTTON (EVENTS)
// - Use addEventListener on the button from STEP 1.
// - Listen for the "click" event.
// - Inside the listener, call buildLibrarySummary().
//
// Example SHAPE (you must type the real code):
//   buildLibraryBtn.addEventListener("click", buildLibrarySummary);

// After you finish:
// - Open the HTML file in the browser.
// - Click the button.
// - Check that:
//   • each resource prints on its own line,
//   • the totals at the bottom are correct,
//   • the feedback changes when you adjust the data in the array.
