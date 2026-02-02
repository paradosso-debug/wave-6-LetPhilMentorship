//  API MINI LAB WITH AXIOS
// ----------------------------------------------
//
// We are using Axios from a CDN + async/await:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
//
// APIs:
// - Advice API: https://api.adviceslip.com/advice
// - Cat Fact API: https://catfact.ninja/fact
// - NASA APOD API (Random): https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1
//
// IMPORTANT NOTE FOR NASA (for implementation):
// - This request returns an ARRAY because it uses "count=1".
// - That means response.data is like: [ { ...apodItem... } ]
// - So we must use response.data[0] to access the actual APOD item.
//
// ==============================================
// STEP 1 – SELECT ELEMENTS
// ==============================================
//
// STEP 1: Select and store the following elements in variables:
//         - adviceBtn (id "adviceBtn")
//         - adviceText (id "adviceText")
//         - catFactBtn (id "catFactBtn")
//         - catFactText (id "catFactText")
//         - spaceBtn (id "spaceBtn")
//         - spaceDisplay (id "spaceDisplay")

const adviceBtn = document.getElementById("adviceBtn");
const adviceText = document.getElementById("adviceText");
const catFactBtn = document.getElementById("catFactBtn");
const catFactText = document.getElementById("catFactText");
const spaceBtn = document.getElementById("spaceBtn");
const spaceDisplay = document.getElementById("spaceDisplay");

adviceBtn.addEventListener("click", async () => {
  adviceText.textContent = "Loading advice...";
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");

    console.log(response.data);
    const apiResponse = response.data.slip.advice;
    adviceText.textContent = apiResponse;
    console.log(apiResponse);
  } catch (error) {
    console.error(error);
    adviceText.textContent = "Error baby";
  }
});

// ==============================================
// TASK 1 – RANDOM ADVICE (AXIOS + ASYNC/AWAIT)
// ==============================================
//
// STEP 2: Add a "click" event listener to adviceBtn.
//         Mark the listener function as async so we can use await.
//
// STEP 3: Inside the async code:
//         - Set adviceText.textContent to "Loading advice...".
//         - Use a try/catch block.
//         - Inside try:
//             * Call:
//               const response = await axios.get("https://api.adviceslip.com/advice");
//             * (Optional) console.log(response.data) to inspect the JSON.
//             * Read the advice string from:
//               response.data.slip.advice
//             * Set adviceText.textContent to that advice string.
//         - Inside catch:
//             * Log the error to the console.
//             * Set adviceText.textContent to "Could not load advice. Try again.".

catFactBtn.addEventListener("click", async () => {
  catFactText.textContent = "Loading cat fact...";
  try {
    const reponse = await axios.get("https://catfact.ninja/fact");
    const catFactResponse = reponse.data.fact;
    catFactText.textContent = catFactResponse;
    console.log(reponse.data.fact);
  } catch (error) {
    console.log(error);
    catFactText.textContent = "Could not load cat fact. Try again.";
  }
});

// ==============================================
// TASK 2 – RANDOM CAT FACT (AXIOS + ASYNC/AWAIT)
// ==============================================
//
// STEP 4: Add a "click" event listener to catFactBtn.
//         Mark the listener function as async.
//
// STEP 5: Inside the async code:
//         - Set catFactText.textContent to "Loading cat fact...".
//         - Use try/catch.
//         - Inside try:
//             * Call:
//               const response = await axios.get("https://catfact.ninja/fact");
//             * (Optional) console.log(response.data) to inspect the JSON.
//             * Read the fact string from:
//               response.data.fact
//             * Set catFactText.textContent to that fact string.
//         - Inside catch:
//             * Log the error.
//             * Set catFactText.textContent to "Could not load cat fact. Try again.".

// ==============================================
// TASK 3 – RANDOM SPACE PHOTO (NASA APOD)
// ==============================================
//
// STEP 6: Add a "click" event listener to spaceBtn.
//         Mark the listener function as async.
//
// STEP 7: Inside the async code:
//         - Set spaceDisplay.innerHTML to "Loading space photo... 🚀".
//         - Use try/catch.
//         - Inside try:
//             * Call the NASA APOD endpoint with count=1:
//               const response = await axios.get(
//                 "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1"
//               );
//
//             * Store the FIRST item from the array in a variable:
//               const data = response.data[0];
//
//             * (Optional) console.log(data) to inspect the APOD item.
//
//             * Check data.media_type.
//                 - If it is "image":
//                     · Set spaceDisplay.innerHTML to include:
//                       - data.title inside an <h3>
//                       - an <img> with src=data.url and alt=data.title
//                       - data.explanation inside a <p>
//
//                 - Else (for example "video"):
//                     · Set spaceDisplay.innerHTML to include:
//                       - data.title inside an <h3>
//                       - data.explanation inside a <p>
//                       - a link (<a>) that points to data.url
//                         (use target="_blank" so it opens in a new tab)
//
//         - Inside catch:
//             * Log the error.
//             * Set spaceDisplay.textContent to:
//               "Could not load space photo. Try again later."

spaceBtn.addEventListener("click", async () => {
  spaceDisplay.textContent = "Loading space photo...";
  try {
    const response = await axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1",
    );
    const data = response.data[0];
    console.log(data);
    if (data.media_type === "image") {
      spaceDisplay.innerHTML = `<h3>${data.title}</h3> 
      <img src="${data.url}" alt="${data.title}" style="width:100%;border-radius:1rem;margin-top:0.6rem;"/> 
      <p>${data.explanation}</p>`;
    } else {
      spaceDisplay.innerHTML = `<h3>${data.title}</h3>
      <p>${data.explanation}</p>
      <a href="${data.url}" target="blank" style="color:#a7f3d0;">Link</a>`;
    }
  } catch (error) {
    console.log(error);
    spaceDisplay.textContent = "Could not load space photo. Try again later";
  }
});
