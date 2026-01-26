// Project-LocalStorage — Study Note Saver
// --------------------------------------------------------
// Goal: Learn how to use localStorage with:
// - variables & data types
// - arrays & objects
// - conditionals & loops
// - functions
// - DOM selection & events
//

//  STEP 1 — SELECT DOM ELEMENTS
//
// 1. Create const variables for:
//
//    - noteTitleInput      (id="noteTitleInput")
//    - categorySelect      (id="categorySelect")
//    - noteTextInput       (id="noteTextInput")
//
//    - saveNoteBtn         (id="saveNoteBtn")
//    - clearFormBtn        (id="clearFormBtn")
//
//    - searchInput         (id="searchInput")
//    - showAllBtn          (id="showAllBtn")
//    - showPinnedBtn       (id="showPinnedBtn")
//    - clearAllBtn         (id="clearAllBtn")
//
//    - totalNotesChip      (id="totalNotesChip")
//    - pinnedNotesChip     (id="pinnedNotesChip")
//    - categorySummaryChip (id="categorySummaryChip")
//
//    - noteList            (id="noteList")
//
const noteTitleInput = document.getElementById("noteTitleInput");
const categorySelect = document.getElementById("categorySelect");
const noteTextInput = document.getElementById("noteTextInput");
const saveNoteBtn = document.getElementById("saveNoteBtn");
const clearFormBtn = document.getElementById("clearFormBtn");
const searchInput = document.getElementById("searchInput");
const showAllBtn = document.getElementById("showAllBtn");
const showPinnedBtn = document.getElementById("showPinnedBtn ");
const clearAllBtn = document.getElementById("clearAllBtn");
const pinnedNotesChip = document.getElementById("pinnedNotesChip");
const categorySummaryChip = document.getElementById("categorySummaryChip");
const noteList = document.getElementById("noteList");

// 2. Use document.getElementById("...") for each one.

//  STEP 2 — STATE + STORAGE KEY
//
// 1. Create a const named STORAGE_KEY and set it to:
//      "study_note_saver_notes"

const STORAGE_KEY = "study_note_saver_notes";

//
// 2. Create a let array named notes and set it to an empty array [].
//    This will hold all note objects in memory.

let notes = [];
let showPinnedOnly = false;
let editingNoteId = null;
// 3. Create a let boolean named showPinnedOnly and set it to false.
// 4. Create a let variable named editingNoteId and set it to null.
//    - null means "we are creating a new note"
//    - a number id means "we are editing an existing note"

//  STEP 3 — LOCALSTORAGE HELPERS
//
// 1. Define a function named loadNotesFromStorage (no parameters).
//    Inside:
//
//    - Use localStorage.getItem(STORAGE_KEY) and store it in a variable (e.g. raw).
//    - If raw is null or undefined:
//        • set notes = [] and return.
//    - If there is a value:
//        • Use JSON.parse(raw) inside a try...catch:
//          - If parsing works and the result is an array, assign it to notes.
//          - If something goes wrong, log an error in console and set notes = [].
//

function loadNotesFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    notes = [];
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      notes = parsed;
    } else {
      notes = [];
    }
  } catch (error) {
    console.error("unsuccsessful parsing", error);
    notes = [];
  }
}

// 2. Define a function named saveNotesToStorage (no parameters).
//    Inside:
//      - Convert notes into a JSON string using JSON.stringify(notes).
//      - Save it using localStorage.setItem(STORAGE_KEY, jsonString).

function saveNotesToStorage() {
  const jsonString = JSON.stringify(notes);
  localStorage.setItem(STORAGE_KEY, jsonString);
}

//  STEP 4 — NOTE OBJECT & VALIDATION
//
// 1. Define a function named createNoteObject with 3 parameters:
//      title, category, text
//
//    Inside:
//      - Create a note object with properties:
//          id: a unique number (you can use Date.now()),
//          title: title,
//          category: category,
//          text: text,
//          pinned: false,
//          createdAt: new Date().toISOString()
//      - Return this object.

function createNoteObject(title, category, text) {
  const noteObject = Date.now();
  return {
    id: noteObject,
    title: title,
    category: category,
    text: text,
    pinned: false,
    createdAt: new Date().toISOSring(),
  };
}

//
// 2. Define a function named validateNoteInputs with 2 parameters:
//      title, text
//
//    Inside:
//      - If title.trim() === "", return "Please enter a title."
//      - Else if text.trim() === "", return "Please write some text for your note."
//      - Otherwise, return "" (empty string).

function validateNoteInputs(title, text) {
  if (title.trim() === "") {
    return "Please enter a title.";
  } else if (text.trim() === "") {
    return "Please write some text for your note.";
  } else {
    return "";
  }
}

//  STEP 5 — SAVE CURRENT NOTE
//
// 1. Define a function named saveCurrentNote (no parameters).
// 2. Inside:
//
//    - Read current values from the form:
//        const title = noteTitleInput.value;
//        const category = categorySelect.value;
//        const text = noteTextInput.value;

function saveCurrentNote() {
  const title = noteTitleInput.value;
  const category = categorySelect.value;
  const text = noteTextInput.value;

  const alertMessage = validateNoteInputs(title, text);
  if (alertMessage !== "") {
    alert(alertMessage);
    return;
  }

  if ((editingNoteId = null)) {
    const createNewNoteObject = createNoteObject(title, category, text);
    notes.push(createNewNoteObject);
  } else {
    notes = notes.map((note) => {
      if (note.id === editingNoteId) {
        return {
          ...note,
          title: title,
          category: category,
          text: text,
        };
      }

      return note;
    });
  }
  saveNotesToStorage();
  clearFormBtn();
  renderNoteList();
}

//
//    - Call validateNoteInputs(title, text) and store the result.
//    - If the result is NOT an empty string:
//        • Show it in an alert and return.
//
//    - If editingNoteId is null:
//        • Create a new note object using createNoteObject(title, category, text).
//        • Push it into the notes array.
//
//      Else (we are editing an existing note):
//        • Use .map() on notes to create a new array:
//            - If note.id matches editingNoteId, return a new object
//              with updated title, category, text (and keep other properties).
//            - Otherwise, return the note unchanged.
//        • Assign that new array back into notes.
//
//    - Call saveNotesToStorage().
//    - Call clearForm() (you will create this function).
//    - Call renderNoteList().

//  STEP 6 — PIN / DELETE / EDIT
//
// 1. Define a function named togglePinned with 1 parameter: noteId.
//    - Use .map() on notes:
//        • If note.id === noteId, return a new object where
//          pinned is flipped (true → false, false → true).
//        • Otherwise return note unchanged.
//    - Assign the result back into notes.
//    - Call saveNotesToStorage() and renderNoteList().

function togglePinned(noteId) {
  notes = notes.map((note) => {
    if (note.id === noteId) {
      return {
        ...note,
        pinned: !note.pinned,
      };
    }
    return note;
  });

  saveNotesToStorage();
  renderNoteList();
}

function deleteNote(noteId) {
  const confirmDelete = confirm("Delete this note permanently?");
  if (!confirmDelete) {
    return;
  }
  notes = notes.filter((note) => note.id !== noteId);
  saveNotesToStorage();
  renderNoteList();
}

//
// 2. Define a function named deleteNote with 1 parameter: noteId.
//    - Ask the user to confirm using confirm("Delete this note permanently?").
//    - If they cancel (result === false), just return.
//    - If they confirm: /// LEFT OFF
//        • Use .filter() on notes to keep only notes whose id !== noteId.
//        • Assign the result back into notes.
//        • Call saveNotesToStorage() and renderNoteList().
//
// 3. Define a function named startEditing with 1 parameter: noteId.
//    - Find the note in notes whose id === noteId (you can use .find()).
//    - If not found, return.
//    - Set editingNoteId = noteId.
//    - Fill the form fields with that note’s values:
//        noteTitleInput.value = note.title;
//        categorySelect.value = note.category;
//        noteTextInput.value = note.text;
//    - Optionally call noteTitleInput.focus().

function startEditing(noteId) {
  const note = notes.find((note) => note.id === noteId);
  if (!note) {
    return;
  } else {
    editingNoteId = noteId;
    noteTitleInput.value = note.title;
    categorySelect.value = note.category;
    noteTextInput.value = note.text;
    noteTitleInput.focus();
  }
}

//  STEP 7 — CLEAR FORM & CLEAR ALL
//
// 1. Define a function named clearForm (no parameters).
//    - Set editingNoteId = null.
//    - Reset form fields:
//        noteTitleInput.value = ""
//        noteTextInput.value = ""
//        categorySelect.value = "javascript"   (or any default)
//    - Optionally focus the title input.

function clearForm() {
  editingNoteId = null;

  noteTitleInput.value = "";
  noteTextInput.value = "";
  categorySelect.value = "javascript";
}

//
// 2. Define a function named clearAllNotes (no parameters).
//    - Ask for confirmation with confirm("This will remove all saved notes from localStorage. Continue?").
//    - If the user cancels, return.
//    - Otherwise:
//        • Set notes = [].
//        • Call saveNotesToStorage().
//        • Call renderNoteList().

function clearAllNotes() {
  const clearAll = confirm(
    "This will remove all saved notes from localStorage. Continue?",
  );

  if (!clearAll) return;
  notes = [];
  saveNotesToStorage();
  renderNoteList();
}

//  STEP 8 — STATS
//
// 1. Define a function named calculateStats with 1 parameter: visibleNotes.
//    - total = visibleNotes.length
//    - pinnedCount = number of notes with pinned === true (use .filter().length)
//
//    - categoryCounts:
//        • Use .reduce() with initial object { js: 0, html: 0, css: 0, mindset: 0 }
//        • For each note, check note.category and increase the correct counter.
//
//    - Return an object with:
//        { total, pinnedCount, categoryCounts }
//
// 2. Define a function named renderStats with 1 parameter: visibleNotes.
//    - Call calculateStats(visibleNotes) and store the result.
//    - Update the chips:
//        totalNotesChip.textContent    = "Total notes: X"
//        pinnedNotesChip.textContent   = "Pinned: Y"
//        categorySummaryChip.textContent =
//          "Categories: JS X • HTML Y • CSS Z • Mindset W"

function calculateStats(visibleNotes) {
  const total = visibleNotes.length;
  const pinnedCount = visibleNotes.filter((note) => {
    note.pinned === true;
  }).length;

  const categoryCounts = visibleNotes.reduce(
    (acc, note) => {
      if (note.category === "javascript") acc.js += 1;
      else if (note.category === "html") acc.html += 1;
      else if (note.category === "css") acc.css += 1;
      else acc.mindset += 1;
      return acc;
    },
    { js: 0, html: 0, css: 0, mindset: 0 },
  );

  return { total, pinnedCount, categoryCounts };
}

//  STEP 9 — FILTER VISIBLE NOTES + RENDER LIST
//
// 1. Define a function named getVisibleNotes (no parameters).
//    - Read searchInput.value, make it lowercased and trimmed.
//    - Use .filter() on notes to keep notes that:
//
//        - match search:
//            * If searchTerm is empty → pass.
//            * Else, check if note.title or note.text (lowercased) includes searchTerm.
//
//        - match pinned filter:
//            * If showPinnedOnly is false → everything passes.
//            * If showPinnedOnly is true → only notes where note.pinned === true.
//
//    - Return the filtered array.
//
// 2. Define a function named renderNoteList (no parameters).
//    - Call getVisibleNotes() and store the result as visibleNotes.
//    - Clear the list: noteList.innerHTML = "".
//    - If visibleNotes.length === 0:
//        • Create a <li> with class "empty-state".
//        • Set its text to something like:
//          "No notes match your current filters. Try adding a note or clearing the search ✨"
//        • Append it to noteList.
//        • Call renderStats(visibleNotes) and return.
//
//    - Otherwise, use .forEach() on visibleNotes.
//      For each note:
//        * Create a <li> with class "note-item".
//        * Create leftDiv (class "note-left").
//        * Create titleDiv (class "note-title"), set textContent = note.title.
//        * Create metaDiv (class "note-meta").
//        * Create categorySpan (class "badge badge-category") with label text like "JavaScript", "HTML", etc.
//        * Create pinnedSpan (class "badge badge-pinned") with text "Pinned" or "Not pinned".
//        * Append categorySpan and pinnedSpan to metaDiv.
//        * Create textDiv for the note text:
//            - Set a smaller font and lighter color if you want (via style).
//        * Append titleDiv, metaDiv, textDiv to leftDiv.
//        * Create a button column (a <div>) for the action buttons:
//            - Pin / Unpin
//            - Edit
//            - Delete
//        * For each button, add a "click" listener that calls
//          the correct function with note.id.
//        * Append leftDiv and button column to li.
//        * Append li to noteList.
//
//    - At the very end, call renderStats(visibleNotes).

//  STEP 10 — VIEW TOGGLE FUNCTION
//
// 1. Define a function named setShowPinnedOnly with 1 parameter: value.
//    - Set showPinnedOnly = value.
//    - Remove "active" class from both showAllBtn and showPinnedBtn.
//    - If value is true → add "active" class only to showPinnedBtn.
//      Else → add "active" class only to showAllBtn.
//    - Call renderNoteList().

//  STEP 11 — EVENT LISTENERS
//
// 1. For saveNoteBtn, add a "click" event listener that calls saveCurrentNote.
// 2. For clearFormBtn, add a "click" listener that calls clearForm.
// 3. For clearAllBtn, add a "click" listener that calls clearAllNotes.
// 4. For searchInput, add an "input" listener that calls renderNoteList.
// 5. For showAllBtn, add a "click" listener that calls setShowPinnedOnly(false).
// 6. For showPinnedBtn, add a "click" listener that calls setShowPinnedOnly(true).
// 7. (Optional) For noteTextInput, add a "keydown" listener:
//      - If (event.ctrlKey || event.metaKey) AND event.key === "Enter",
//        call saveCurrentNote().

//  STEP 12 — INITIALIZE
//
// At the bottom of this file:
//
// 1. Call loadNotesFromStorage() so notes are loaded from localStorage.
// 2. Call renderNoteList() so the UI shows the current notes (or empty state).
