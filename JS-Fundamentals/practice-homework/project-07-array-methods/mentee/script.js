// Project-Array-Methods — Budget Flow 
// --------------------------------------------
// GOAL: Build an expense tracker where a SAVED starting budget (income number)
// shows in the overview, and expenses subtract from it.
//
// ✅ MUST PRACTICE: map, filter, reduce, find, findIndex, some, every


// STEP 1: Select and store the following elements in variables using getElementById():
//         - startingBudgetInput (id "startingBudgetInput")
//         - saveBudgetBtn (id "saveBudgetBtn")
//         - textInput (id "textInput")
//         - amountInput (id "amountInput")
//         - categorySelect (id "categorySelect")
//         - addBtn (id "addBtn")
//         - searchInput (id "searchInput")
//         - categoryFilterSelect (id "categoryFilterSelect")
//         - sortNewestBtn (id "sortNewestBtn")
//         - sortAmountBtn (id "sortAmountBtn")
//         - incomeChip (id "incomeChip")
//         - expenseChip (id "expenseChip")
//         - balanceChip (id "balanceChip")
//         - categorySummaryChip (id "categorySummaryChip")
//         - insightsChip (id "insightsChip")
//         - txList (id "txList")


// STEP 2: Create your data + saved budget variables:
//         - Create an array named expenses and start it empty:
//             let expenses = [];
//
//         - Create a string key for localStorage (same as mentor):
//             const BUDGET_KEY = "budgetFlowStartingBudget";
//
//         - Create the saved budget variable:
//             let startingBudget = 0;
//
//         Note:
//         - Your expense objects WILL be created later in the addExpense() function.
//         - Each expense object WILL contain:
//             { id, text, amount, category, createdAt }


// STEP 3: When the script loads (page start):
//         - Read localStorage.getItem(BUDGET_KEY)
//         - If a value exists (not null):
//             * Convert it to a Number
//             * If it’s valid (not NaN and >= 0), store it in startingBudget
//         - If nothing exists, keep startingBudget = 0


// STEP 4: Create helper functions:
//         - toNumber(value)
//             * Convert value to Number
//             * If it is NaN, return 0
//
//         - formatMoney(n)
//             * Round to 2 decimals
//             * Return a string like "$12.5"
//
//         - getStartingBudget()
//             * Return startingBudget
//             * (Do NOT read directly from the input in your stats)


// STEP 5: Create your UI state variable for sorting:
//         - let currentSort = "newest";
//           (valid values: "newest" or "amount")


// STEP 6: Create saveBudget():
//         When saveBudgetBtn is clicked:
//         - Read the number from startingBudgetInput.value using toNumber()
//         - If the number is <= 0:
//             * alert the user and stop
//         - Otherwise:
//             * set startingBudget = that number
//             * localStorage.setItem(BUDGET_KEY, String(startingBudget))
//             * clear the input field: startingBudgetInput.value = ""
//             * call render()


// STEP 7: Create getDisplayedExpenses():
//         This function returns the array you will SHOW on screen.
//         - Read search term from searchInput (lowercase + trim)
//         - Read category filter from categoryFilterSelect
//         - Start with expenses, then filter() it by:
//             * search match: expense.text includes search term
//             * category match: "all" OR expense.category matches
//         - Then sort() based on currentSort:
//             * if "amount": highest amount first
//             * else "newest": newest createdAt first
//         - Return the final array


// STEP 8: Create calculateStats(displayed):
//         This function calculates the numbers for the overview chips.
//         - totalExpense = reduce() the displayed array (sum of amount)
//         - balance = startingBudget - totalExpense
//         - categoryTotals = reduce() into an object like:
//             { food: 120, bills: 300, ... }
//
//         Array-method practice:
//         - amounts = map() displayed to [amount, amount, amount]
//         - negativeBalance = some() / or just check balance < 0 (mentor uses balance < 0)
//         - every() check: confirm all displayed amounts are > 0
//
//         find() + findIndex() practice (logical + consistent):
//         - Compute avgExpense using reduce on amounts
//         - firstAboveAvg = find() first expense where amount > avgExpense
//         - firstAboveAvgIndex = findIndex() for that first above-average expense
//
//         Return an object containing everything renderStats needs.


// STEP 9: Create renderStats(displayed):
//         - Call calculateStats(displayed) to get stats
//         - Update:
//             * incomeChip => startingBudget
//             * expenseChip => totalExpense
//             * balanceChip => balance
//             * categorySummaryChip => build a readable summary from categoryTotals
//             * insightsChip => build a sentence using:
//                 - negative balance result
//                 - every() result (all amounts positive?)
//                 - find/findIndex result (first above average + index)


// STEP 10: Create renderList(displayed):
//         - Clear txList.innerHTML
//         - If displayed is empty:
//             * Create a <li> with class "empty-state"
//             * Add it to the list
//             * return
//         - Otherwise forEach() over displayed and create <li> items:
//             * Show description text
//             * Show badges for: "expense", category, amount
//             * Add a Delete button
//                 - On click: remove using filter() and call render()


// STEP 11: Create addExpense():
//         When addBtn is clicked:
//         - Read text, amount, category from inputs
//         - Validate text is not empty
//         - Validate amount is a positive number
//         - Create a new expense object with:
//             * id (use map() + Math.max() + 1)
//             * createdAt: Date.now()
//         - Push it into expenses
//         - Clear inputs
//         - Call render()


// STEP 12: Create setSort(mode):
//         - Set currentSort = mode
//         - Update the active button style:
//             * add/remove "active" on sortNewestBtn and sortAmountBtn
//         - Call render()


// STEP 13: Add event listeners + initial render:
//         - saveBudgetBtn click => saveBudget
//         - addBtn click => addExpense
//         - searchInput input => render
//         - categoryFilterSelect change => render
//         - sortNewestBtn click => setSort("newest")
//         - sortAmountBtn click => setSort("amount")
//         - Finally: call render() once when the script loads
