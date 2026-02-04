// 13 – Props & Destructuring Lab
// ----------------------------------------------
//
// We will:
//  - treat function parameters as "props" (props-style object arguments)
//  - pass an object into a function to configure what it returns
//  - use destructuring to unpack properties from that object
//  - generate HTML cards from an array of objects
//
// ✅ Reminder for this lab:
// "Props" here means: "an object we pass into a function"
// (This is a vanilla JavaScript pattern that React also uses.)
//
// ==============================================
// STEP 1 – SELECT ELEMENTS
// ==============================================
//
// STEP 1: Select and store the following elements in variables using getElementById:
//         - showMessageBtn (id "showMessageBtn")
//         - messageDisplay (id "messageDisplay")
//         - generateCharsBtn (id "generateCharsBtn")
//         - characterContainer (id "characterContainer")

//
// CHECKPOINT:
// - Make sure none of your variables are null.
// - If a variable is null, the id in HTML does not match.

const showMessageBtn = document.getElementById("showMessageBtn");
const messageDisplay = document.getElementById("messageDisplay");
const generateCharsBtn = document.getElementById("generateCharsBtn");
const characterContainer = document.getElementById("characterContainer");

// ==============================================
// STEP 2 – SIMPLE PROPS FUNCTION (WELCOME MESSAGE)
// ==============================================
//
// GOAL:
// Create a function that builds a welcome message using a props object.
//
// STEP 2: Create a function named createWelcomeMessage that:
//         - receives ONE parameter that is an OBJECT (props-style argument)
//         - the object should contain a key named "text"
//         - returns a string like: "Welcome, " + (the text value)
//
// Example idea (non-destructuring version first):
//   function createWelcomeMessage(props) {
//     return "Welcome, " + props.text;
//   }
//
// STEP 3: Add a "click" event listener to showMessageBtn.
//         Inside the listener:
//         - create a props object like:
//             const messageProps = { text: "Hello Letphil mentee! 🎉" };
//         - (Optional learning step) console.log(messageProps) to see the object.
//         - call createWelcomeMessage(messageProps) and store the result.
//         - set messageDisplay.textContent to the returned string.
//
// CHECKPOINT:
// - If you see "Welcome, undefined", it means your object key is wrong.
//   The function expects a key named "text".

function createWelcomeMessage(props) {
  console.log(props);
  return "Welcome," + props.text;
}

createWelcomeMessage({ text: "first msg" });

showMessageBtn.addEventListener("click", () => {
  const messageProps = { text: "Hello Letphil Mentee" };
  const message = createWelcomeMessage(messageProps);
  messageDisplay.textContent = message;
});

// ==============================================
// STEP 3 – ADD DESTRUCTURING TO THE WELCOME FUNCTION
// ==============================================
//
// GOAL:
// Update the function so it destructures the "text" property directly.
//
// STEP 4: Update createWelcomeMessage so that it uses object destructuring
//         in the parameter list, like:
//
//           function createWelcomeMessage({ text }) {
//             return "Welcome, " + text;
//           }
//
// IMPORTANT DETAILS:
// - The curly braces { text } mean: "pull the text property out of the object"
// - Now you can use "text" directly instead of props.text
// - The object you pass in MUST still have a key named "text".

function createNewMessage({ text }) {
  console.log("New Message,", text);
  return "Welcome," + text;
}
createNewMessage({ text: "my text lol" });
// ==============================================
// STEP 4 – CHARACTER ARRAY (PROPS LIST)
// ==============================================
//
// GOAL:
// Create a list of props objects for multiple characters.
//
// STEP 5: Create an array named characters with at least 3 objects.
//         Each object should have EXACT keys:
//           - name
//           - element
//           - power
//
// Example shape:
//   {
//     name: "Luna",
//     element: "Moonlight",
//     power: 95
//   }
//
// CHECKPOINT:
// - The keys must match because we will destructure these exact names later.

const characters = [
  {
    name: "Austin",
    element: "Water",
    power: 99,
  },
  {
    name: "Jocelin",
    element: "Fire",
    power: 100,
  },
  {
    name: "Riley",
    element: "Dirt",
    power: 2,
  },
];

// ==============================================
// STEP 5 – CHARACTER CARD FUNCTION (DESTRUCTURING)
// ==============================================
//
// GOAL:
// Create a function that takes ONE character object and returns an HTML card.
//
// STEP 6: Create a function named createCharacterCard that:
//         - receives ONE parameter (a character props object)
//         - uses destructuring in the parameter list:
//             function createCharacterCard({ name, element, power }) { ... }
//         - returns a template string (backticks) containing HTML.
//         - uses ${name}, ${element}, and ${power} to insert values.
//
// Example template structure:
//
//   `
//     <article class="char-card">
//       <h2 class="char-name">${name}</h2>
//       <p class="char-detail">Element: <span>${element}</span></p>
//       <p class="char-detail">Power: <span>${power}</span></p>
//     </article>
//   `
//
// IMPORTANT DETAILS:
// - Destructuring only works if the object passed in has those keys.
// - If a key is missing, that variable will become undefined.

function createCharacterCard({ name, element, power }) {
  return `
    <article class="char-card">
       <h2 class="char-name">${name}</h2>
       <p class="char-detail">Element: <span>${element}</span></p>
       <p class="char-detail">Power: <span>${power}</span></p>
    </article>
    `;
}

// File 1

const obj = { name: "Riley", age: 22 };
export default obj;

// File 2

import obj from "./File 1";
function greet({ name, age }) {
  return `Hello ${name}, you are ${age} years old`;
}
greet(obj);

// ==============================================
// STEP 6 – LOOP THROUGH CHARACTERS AND RENDER
// ==============================================
//
// GOAL:
// When the button is clicked, generate ALL cards and display them.
//
// STEP 7: Add a "click" event listener to generateCharsBtn.
//         Inside the listener:
//
//         7.1) Create an empty string accumulator:
//              let cardsHTML = "";
//
//         7.2) Loop through the characters array (use forEach):
//              characters.forEach(function (character) {
//                // character is one object from the array
//              });
//
//         7.3) Inside the loop:
//              - call createCharacterCard(character)
//              - store the returned HTML string
//              - concatenate it into cardsHTML
//
//         7.4) After the loop finishes:
//              - set characterContainer.innerHTML = cardsHTML
//
// WHY WE DO IT THIS WAY:
// - We build one big HTML string first
// - Then inject into the DOM once
// - This keeps rendering simple and predictable
//
// CHECKPOINTS:
// - If nothing shows, console.log(cardsHTML) before setting innerHTML.
// - If values show as undefined, check that character objects have correct keys.

generateCharsBtn.addEventListener("click", () => {
  let cardsHTML = "";
  characters.forEach(function (character) {
    const characterCard = createCharacterCard(character);
    cardsHTML += characterCard;
  });

  characterContainer.innerHTML += cardsHTML;
});
