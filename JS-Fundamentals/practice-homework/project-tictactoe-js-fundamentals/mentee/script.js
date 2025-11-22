// =====================================================
// Tic-Tac-Toe Logic
// =====================================================

// 1) Get references to the elements we need from the HTML
// -------------------------------------------------------
// TODO:
//   - Create a variable that holds all 9 cell buttons.
//     Hint: use document.querySelectorAll(".cell")
//   - Create a variable for the status text paragraph (id="statusText").
//     Hint: use document.getElementById("statusText")
//   - Create a variable for the reset button (id="resetBtn").
//     Hint: use document.getElementById("resetBtn")

// 2) Variables to represent the game state
// ----------------------------------------
// TODO:
//   - Create a variable named currentPlayer and set the initial value to "X".
//   - Create a variable named gameActive and set it to true.
//   - Create 9 variables (cell1 ... cell9) to store the current value
//     of each cell. Start each one as an empty string "".

// 3) Helper function: updateStatusText
// ------------------------------------
// TODO:
//   - Create a function named updateStatusText.
//   - Inside it, check if gameActive is true.
//       - If it is true, update the status text content so it says:
//         "Player X turn" or "Player O turn" depending on currentPlayer.

// 4) Function to handle a cell click
// ----------------------------------
// TODO:
//   - Create a function named handleCellClick that receives "event".
//   - Inside the function:
//       1) Get the clicked cell: const clickedCell = event.target;
//       2) Read the "data-cell" attribute to know the cell number:
//            const cellNumber = clickedCell.getAttribute("data-cell");
//       3) If gameActive is false, immediately return.
//       4) Check if this specific cell is already filled.
//          Use conditionals, for example:
//            if (cellNumber === "1" && cell1 !== "") return;
//          Repeat this idea for all 9 cells.
//       5) Put the currentPlayer letter in the clicked cell visually.
//       6) Update the correct cell variable (cell1 ... cell9) using
//          if / else if checks based on cellNumber.
//       7) Call a function that checks for winner or draw.

// 5) Function to check if someone won or if it is a draw
// ------------------------------------------------------
// TODO:
//   - Create a function named checkForWinnerOrDraw.
//   - Inside the function:
//       1) Create a variable named winner and set it to "".
//       2) Use if / else if blocks to check each winning combination.
//       3) If winner is not "", update the status text to
//          "Player X wins! 🎉" or "Player O wins! 🎉", set gameActive to false,
//          and return.
//       4) If there is no winner, check for a draw.
//       5) If there is no winner and no draw, switch currentPlayer
//          from "X" to "O" or "O" to "X" and call updateStatusText().

// 6) Reset function
// -----------------
// TODO:
//   - Create a function named resetGame.
//   - Inside it:
//       1) Set all cell1 ... cell9 variables back to "".
//       2) Set currentPlayer back to "X".
//       3) Set gameActive back to true.
//       4) Clear the textContent of all 9 cells so the board is blank.
//       5) Set statusText.textContent back to "Player X turn".

// 7) Attach event listeners
// -------------------------
// TODO:
//   - For each cell, add a "click" listener that calls handleCellClick.
//   - Add a "click" listener to resetBtn that calls resetGame.
//   - Call updateStatusText() once so the starting message appears.
