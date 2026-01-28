// AXIOS HOMEWORK – COUNTRY INFO
// ---------------------------------------------
// GOAL: Use Axios + async/await to fetch country info
//       and display it in the card.
//
// API endpoint (no key needed):
// https://restcountries.com/v3.1/name/COUNTRY_NAME?fields=name,capital,region,population
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
// STEP 2 – ADD CLICK EVENT (ASYNC FUNCTION)
// ==============================================
//
// STEP 2: Add a "click" event listener to searchCountryBtn.
//         Make the listener function async OR call an async function inside.
//
// STEP 3: Inside the async code:
//         - Read the trimmed value from countryInput.
//         - If it's an empty string:
//             * Set countryStatusMessage.textContent to something like
//               "Please type a country name." and return.
//         - Otherwise, build the URL string using encodeURIComponent:
//             const url =
//               "https://restcountries.com/v3.1/name/" +
//               encodeURIComponent(countryName) +
//               "?fields=name,capital,region,population";
//
//         - Set countryStatusMessage.textContent to "Loading...".
//         - Optionally reset the display fields to placeholders.

// ==============================================
// STEP 3 – AXIOS CALL + DATA HANDLING
// ==============================================
//
// STEP 4: Use a try/catch block.
//
//         Inside try:
//           - Call: const response = await axios.get(url);
//           - The JSON data will be in response.data.
//           - response.data should be an array → take response.data[0].
//           - From that object, read:
//               * name.common
//               * capital (array, use capital[0] if it exists)
//               * region
//               * population
//           - Update the display elements, for example:
//               countryNameDisplay.textContent = "Country: " + name;
//               countryPopulationDisplay.textContent =
//                 "Population: " + population.toLocaleString();
//           - Set countryStatusMessage.textContent to
//             "Country information loaded successfully.".
//
//         Inside catch(error):
//           - Log the error to the console.
//           - Set countryStatusMessage.textContent to something like:
//             "Could not load country info. Please check the name and try again.".
