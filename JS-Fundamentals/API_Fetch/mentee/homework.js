// API HOMEWORK – SIMPLE COUNTRY INFO
// -------------------------------------------------
// GOAL: Let the user type a country name, fetch info from restcountries API,
//       and show the result in the card.
//
// API endpoint (no key needed):
// https://restcountries.com/v3.1/name/COUNTRY_NAME?fields=name,capital,region,population
//
// The API returns an array. We will use the first item (index 0).
//
// ==============================================
// STEP 1 – SELECT ELEMENTS
// ==============================================
//
// STEP 1: Select and store the following elements in variables:
//         - countryInput (id "countryInput")
//         - searchCountryBtn (id "searchCountryBtn")
//         - countryNameDisplay (id "countryNameDisplay")
//         - countryCapitalDisplay (id "countryCapitalDisplay")
//         - countryRegionDisplay (id "countryRegionDisplay")
//         - countryPopulationDisplay (id "countryPopulationDisplay")
//         - countryStatusMessage (id "countryStatusMessage")

// ==============================================
// STEP 2 – ADD CLICK EVENT
// ==============================================
//
// STEP 2: Add a "click" event listener to searchCountryBtn.
//         Inside the listener:
//         - Read the trimmed value from countryInput.
//         - If it's an empty string:
//             * Set countryStatusMessage.textContent to something like
//               "Please type a country name." and return (stop the function).
//         - Otherwise, build the URL string:
//             const url =
//               "https://restcountries.com/v3.1/name/" +
//               encodeURIComponent(countryName) +
//               "?fields=name,capital,region,population";
//
//         - Set countryStatusMessage.textContent to "Loading...".
//         - (Optional) You can also reset the info texts to placeholders.

// ==============================================
// STEP 3 – CALL FETCH
// ==============================================
//
// STEP 3: Call fetch(url).
//         - In the first .then, check if response.ok is false.
//           If not ok, throw an error:
//             if (!response.ok) {
//               throw new Error("Country not found");
//             }
//           Then return response.json().
//         - In the next .then, you will receive data (the JSON).

// ==============================================
// STEP 4 – HANDLE DATA
// ==============================================
//
// STEP 4: In the .then(data => { ... }):
//         - data will be an array. Take the first item: data[0].
//         - From that object, read:
//             * name.common
//             * capital (array, use capital[0] if it exists)
//             * region
//             * population
//         - Update the textContent of the display elements, e.g.:
//             countryNameDisplay.textContent = "Country: " + name;
//         - Set countryStatusMessage.textContent to
//             "Country information loaded successfully.".

// ==============================================
// STEP 5 – HANDLE ERRORS
// ==============================================
//
// STEP 5: Add a .catch(...) at the end of the fetch chain.
//         Inside the catch:
//         - Set countryStatusMessage.textContent to a friendly message like
//           "Could not load country info. Please check the name and try again.".
//         - (Optional) You can also log the error to the console.
