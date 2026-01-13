// Project-01-LocalStorage — Bookmark Dock
// --------------------------------------------------------
// Goal: Practice localStorage together with:
// - variables & data types
// - operators, conditionals
// - loops
// - arrays & objects
// - array methods
// - functions
// - DOM selection & events
//
// This file contains instructions only. Your job is to turn each
// block of comments into working JavaScript code.

// 🧠 STEP 1 — SELECT DOM ELEMENTS
//
// 1. Create const variables for:
//
//    - titleInput            (id="titleInput")
//    - urlInput              (id="urlInput")
//    - categorySelect        (id="categorySelect")
//    - ratingInput           (id="ratingInput")
//
//    - saveBookmarkBtn       (id="saveBookmarkBtn")
//    - clearFormBtn          (id="clearFormBtn")
//
//    - searchInput           (id="searchInput")
//    - categoryFilterSelect  (id="categoryFilterSelect")
//    - showAllBtn            (id="showAllBtn")
//    - showFavoritesBtn      (id="showFavoritesBtn")
//
//    - sortDefaultBtn        (id="sortDefaultBtn")
//    - sortByTitleBtn        (id="sortByTitleBtn")
//    - sortByRatingBtn       (id="sortByRatingBtn")
//
//    - clearAllBtn           (id="clearAllBtn")
//
//    - totalBookmarksChip    (id="totalBookmarksChip")
//    - favoriteBookmarksChip (id="favoriteBookmarksChip")
//    - categorySummaryChip   (id="categorySummaryChip")
//
//    - bookmarkList          (id="bookmarkList")
//
// 2. Use document.getElementById("...") for each one.

// 🧠 STEP 2 — STATE + CONSTANTS
//
// 1. Create a const named STORAGE_KEY and set it to:
//      "bookmark_dock_items"
//
// 2. Create a let array named bookmarks and set it to [].
// 3. Create a let boolean named showFavoritesOnly and set it to false.
// 4. Create a let variable named currentSort and set it to "default".
//    - Allowed values: "default", "title", "rating".
// 5. Create a let variable named editingId and set it to null.
//    - null means "creating a new bookmark".
//    - a number id means "editing an existing bookmark".

// 🧠 STEP 3 — LOCALSTORAGE HELPERS
//
// 1. Define a function named loadBookmarksFromStorage (no parameters).
//    Inside:
//
//    - Use localStorage.getItem(STORAGE_KEY) and store the result in a variable.
//    - If the result is null or undefined:
//        • Set bookmarks = [] and return.
//    - Otherwise:
//        • Use JSON.parse() inside a try...catch:
//            - If parsing works and the value is an array, assign it to bookmarks.
//            - If anything goes wrong, log an error in console and set bookmarks = [].
//
// 2. Define a function named saveBookmarksToStorage (no parameters).
//    Inside:
//      - Convert bookmarks into a string with JSON.stringify(bookmarks).
//      - Save it with localStorage.setItem(STORAGE_KEY, thatString).

// 🧠 STEP 4 — BOOKMARK OBJECT & VALIDATION
//
// 1. Define a function named createBookmarkObject with 4 parameters:
//      title, url, category, rating
//
//    Inside:
//      - Return an object with properties:
//          id: Date.now(), // a unique timestamp id
//          title: title,
//          url: url,
//          category: category,
//          rating: rating,
//          favorite: false,
//          createdAt: new Date().toISOString()
//
// 2. Define a function named isValidUrl with 1 parameter: url.
//    - For this project, do a simple check:
//        * Return true if url starts with "http://" or "https://".
//        * Otherwise return false.
//
// 3. Define a function named validateBookmarkInputs with 3 parameters:
//      title, url, rating
//
//    Inside:
//      - If title.trim() is an empty string → return "Please enter a title for your bookmark."
//      - Else if url.trim() is empty → return "Please enter a URL."
//      - Else if isValidUrl(url.trim()) is false →
//          return "Please enter a full URL starting with http:// or https://"
//      - Else if rating is not an empty string AND (rating < 1 OR rating > 5) →
//          return "Rating must be between 1 and 5."
//      - Otherwise → return "" (an empty string, meaning "no error").

// 🧠 STEP 5 — SAVE / UPDATE CURRENT BOOKMARK
//
// 1. Define a function named saveCurrentBookmark (no parameters).
// 2. Inside:
//
//    - Read values from the form:
//        const title = titleInput.value;
//        const url = urlInput.value;
//        const category = categorySelect.value;
//        const ratingString = ratingInput.value;
//
//      Convert ratingString to a number **if** it is not empty:
//        const rating = ratingString === "" ? "" : Number(ratingString);
//
//    - Call validateBookmarkInputs(title, url, rating).
//      If it returns a non-empty string:
//         • Show it in an alert and return.
//
//    - If editingId is null:
//         • Create a new bookmark with createBookmarkObject(title, url, category, rating).
//         • Push it into bookmarks.
//
//      Else (we are editing):
//         • Use .map() on bookmarks to create a new array.
//           In the callback:
//             - If bookmark.id equals editingId, return a new object
//               with updated title, url, category, rating.
//             - Otherwise return the bookmark unchanged.
//         • Assign the new array back to bookmarks.
//
//    - After this:
//         • Call saveBookmarksToStorage().
//         • Call clearForm().
//         • Call renderBookmarkList().

// 🧠 STEP 6 — EDIT / FAVORITE / DELETE
//
// 1. Define a function named startEditing with 1 parameter: bookmarkId.
//    - Use .find() on bookmarks to get the bookmark with that id.
//    - If none is found, return.
//    - Set editingId = bookmarkId.
//    - Fill the form inputs:
//        titleInput.value = bookmark.title;
//        urlInput.value = bookmark.url;
//        categorySelect.value = bookmark.category;
//        ratingInput.value = bookmark.rating === "" ? "" : bookmark.rating;
//    - Optionally call titleInput.focus().
//
// 2. Define a function named toggleFavorite with 1 parameter: bookmarkId.
//    - Use .map() on bookmarks:
//        * If bookmark.id === bookmarkId, return a new object with
//          favorite flipped (true → false, false → true).
//        * Otherwise return bookmark.
//    - Assign the result back to bookmarks.
//    - Call saveBookmarksToStorage() and renderBookmarkList().
//
// 3. Define a function named deleteBookmark with 1 parameter: bookmarkId.
//    - Ask for confirmation with:
//          const confirmDelete = confirm("Delete this bookmark?");
//      If confirmDelete is false, return.
//    - If true, use .filter() on bookmarks to keep only those whose id !== bookmarkId.
//    - Assign the filtered array back to bookmarks.
//    - Call saveBookmarksToStorage() and renderBookmarkList().

// 🧠 STEP 7 — CLEAR FORM & CLEAR ALL
//
// 1. Define a function named clearForm (no parameters).
//    - Set editingId = null.
//    - Reset:
//        titleInput.value = "";
//        urlInput.value = "";
//        ratingInput.value = "";
//        categorySelect.value = "javascript";   // default
//
// 2. Define a function named clearAllBookmarks (no parameters).
//    - Ask for confirmation with confirm("This will remove all bookmarks stored in your browser. Continue?").
//    - If the user cancels, return.
//    - Otherwise:
//        bookmarks = [];
//        saveBookmarksToStorage();
//        renderBookmarkList();

// 🧠 STEP 8 — STATS
//
// 1. Define a function named calculateStats with 1 parameter: visibleBookmarks.
//    - total = visibleBookmarks.length
//    - favoriteCount = visibleBookmarks.filter(b => b.favorite).length
//
//    - categoryCounts:
//        • Use .reduce() with initial value:
//            { js: 0, html: 0, css: 0, tools: 0, fun: 0 }
//        • For each bookmark, increase the correct property
//          based on bookmark.category.
//
//    - Return an object:
//        { total, favoriteCount, categoryCounts }
//
// 2. Define a function named renderStats with 1 parameter: visibleBookmarks.
//    - Call calculateStats(visibleBookmarks) and store result.
//    - Update textContent of:
//        totalBookmarksChip → "Total: X"
//        favoriteBookmarksChip → "Favorites: Y"
//        categorySummaryChip →
//          "Categories: JS X • HTML Y • CSS Z • Tools T • Fun F"

// 🧠 STEP 9 — FILTER + SORT VISIBLE BOOKMARKS
//
// 1. Define a function named getVisibleBookmarks (no parameters).
//    - Read:
//        const searchTerm = searchInput.value.toLowerCase().trim();
//        const categoryFilter = categoryFilterSelect.value;
//
//    - Use .filter() on bookmarks to keep only bookmarks where:
//        - matchesSearch:
//            * If searchTerm is empty → true.
//            * Else, true if title or url (both lowercased) include searchTerm.
//        - matchesCategory:
//            * If categoryFilter === "all" → true.
//            * Else, bookmark.category === categoryFilter.
//        - matchesFavorite:
//            * If showFavoritesOnly is false → true.
//            * Else, bookmark.favorite === true.
//
//    - Store this filtered array in a variable (e.g. result).
//
//    - Sorting:
//        * If currentSort === "title":
//            - Use result.slice().sort(...) and compare titles with .localeCompare().
//        * Else if currentSort === "rating":
//            - Use result.slice().sort(...) and order by rating from highest to lowest
//              (treat empty rating as 0).
//        * Else (default):
//            - Use result.slice().sort(...) and sort by id so oldest bookmarks come first.
//
//    - Return the sorted array.
//
// 2. Define a function named renderBookmarkList (no parameters).
//    - Call getVisibleBookmarks() and store in visibleBookmarks.
//    - Clear the list: bookmarkList.innerHTML = "";
//    - If visibleBookmarks.length === 0:
//        • Create a <li> with class "empty-state" and a friendly message.
//        • Append it to bookmarkList.
//        • Call renderStats(visibleBookmarks) and return.
//
//    - Otherwise, use .forEach() on visibleBookmarks.
//      For each bookmark:
//        * Create <li class="bookmark-item">.
//          - If bookmark.favorite is true, also add class "favorite".
//
//        * Create leftDiv (class "bookmark-left").
//        * Create titleRow (class "bookmark-title-row").
//        * Create titleDiv (class "bookmark-title") with bookmark.title.
//        * If bookmark.favorite is true, you can create a small "★" span,
//          style it, and append before the title.
//        * Append titleDiv (and optional star) to titleRow.
//
//        * Create urlLink (class "bookmark-url") as an <a>:
//            - href = bookmark.url
//            - target = "_blank"
//            - rel = "noopener noreferrer"
//            - textContent = bookmark.url
//
//        * Create metaDiv (class "bookmark-meta").
//          Inside metaDiv, create three spans:
//
//            - categorySpan (class "badge badge-category") with a label like
//              "JavaScript", "HTML", etc., based on bookmark.category.
//
//            - favoriteSpan (class "badge badge-favorite") with text
//              "Favorite" or "Not favorite".
//
//            - ratingSpan (class "badge badge-rating") with text like
//              "Rating: 4/5" or "No rating" if rating is empty.
//
//        * Append titleRow, urlLink, metaDiv into leftDiv.
//
//        * Create buttonColumn (class "button-column").
//          Inside it, create 4 buttons (class "action-btn" variants):
//            - Open  (class "action-btn primary")
//            - Favorite / Unfavorite
//            - Edit
//            - Delete (class "action-btn danger")
//
//          Add click event listeners for each button:
//            - Open → window.open(bookmark.url, "_blank", "noopener,noreferrer")
//            - Favorite/Unfavorite → toggleFavorite(bookmark.id)
//            - Edit → startEditing(bookmark.id)
//            - Delete → deleteBookmark(bookmark.id)
//
//        * Append leftDiv and buttonColumn to li.
//        * Append li to bookmarkList.
//
//    - At the end, call renderStats(visibleBookmarks).

// 🧠 STEP 10 — SORT / FAVORITE VIEW HELPERS
//
// 1. Define a function named setSortMode with 1 parameter: mode.
//    - Set currentSort = mode.
//    - Remove "active" class from all three sort buttons.
//    - Add "active" class only to the button that matches mode.
//    - Call renderBookmarkList().
//
// 2. Define a function named setShowFavoritesOnly with 1 parameter: value.
//    - Set showFavoritesOnly = value.
//    - Remove "active" class from showAllBtn and showFavoritesBtn.
//    - If value is true → add "active" only to showFavoritesBtn.
//      Else → add "active" only to showAllBtn.
//    - Call renderBookmarkList().

// 🧠 STEP 11 — EVENT LISTENERS
//
// 1. For saveBookmarkBtn, add a "click" listener that calls saveCurrentBookmark.
// 2. For clearFormBtn, add a "click" listener that calls clearForm.
// 3. For clearAllBtn, add a "click" listener that calls clearAllBookmarks.
// 4. For searchInput, add an "input" listener that calls renderBookmarkList.
// 5. For categoryFilterSelect, add a "change" listener that calls renderBookmarkList.
// 6. For showAllBtn, add a "click" listener that calls setShowFavoritesOnly(false).
// 7. For showFavoritesBtn, add a "click" listener that calls setShowFavoritesOnly(true).
// 8. For sortDefaultBtn, add a "click" listener that calls setSortMode("default").
// 9. For sortByTitleBtn, add a "click" listener that calls setSortMode("title").
// 10. For sortByRatingBtn, add a "click" listener that calls setSortMode("rating").
// 11. (Optional) For urlInput, add a "keydown" listener:
//       - If event.key === "Enter", call saveCurrentBookmark().

// 🧠 STEP 12 — INITIALIZE
//
// At the bottom of this file:
//
// 1. Call loadBookmarksFromStorage() so bookmarks are loaded from localStorage.
// 2. Call renderBookmarkList() so the list and stats show immediately.

// 🧪 TIP:
// Use console.log(bookmarks) and console.log(getVisibleBookmarks()) to see
// what is happening as you filter, sort, and save data.
