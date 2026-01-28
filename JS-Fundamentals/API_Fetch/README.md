# 11 – API Mini Tasks

### Using `fetch` + JSON

This folder introduces **APIs** in the simplest, most beginner-friendly way possible.

We are not building complex applications here.  
We are learning **how APIs actually work**, step by step.

This lesson focuses on:

- What an API is (in plain language)
- How `fetch()` sends a request
- What JSON is and how to read it
- How to extract data from API responses
- How to show API data in the DOM
- How to handle common API errors

❌ No pagination  
❌ No Axios  
❌ No authentication logic  
❌ No advanced query parameters

Just **small, real API calls** and careful thinking.

---

## 1. What is an API?

**API** stands for **Application Programming Interface**.

Ignore the long name for now.

### Friendly definition

> An API is a **public door** that a server opens so other programs  
> (like your website) can ask for information.

Your JavaScript app is one program.  
The API server is another program.  
They communicate over the internet.

---

### Real-life analogy 🍽️

Think of an API like a restaurant:

- The **menu** → what the API allows you to request
- The **waiter** → the API URL
- Your **order** → the request
- The **food** → the response (data)
- Your **table** → your JavaScript code

You don’t cook the food.  
You don’t enter the kitchen.  
You just ask, receive, and use.

---

### In code terms

```js
fetch("https://api.adviceslip.com/advice");
```

### This line means

“Hey server, please send me some advice.”

- Your JavaScript sends a request to the server
- The server receives the request
- The server responds with data
- Your code does not control what the server sends back.
- It can only ask and then read the response.

### What is JSON?

Most APIs respond with JSON.
JSON = JavaScript Object Notation

That means:

- It looks very similar to JavaScript objects
- It uses:
- {} for objects
- [] for arrays
- "key": value pairs

```js

{
  "slip": {
    "id": 42,
    "advice": "Be kind to yourself."
  }
}

```

Important things to understand:
JSON is data, not JavaScript code
You cannot run JSON
JavaScript can easily read JSON and turn it into objects and arrays

### The fetch → JSON → data flow (VERY IMPORTANT)

Every API call using fetch follows the same exact flow.
Understanding this flow is essential.

### STEP A — Make the request

```js
fetch("some-api-url");
```

This step means:
“Please send me data from this URL.”
Nothing else happens yet.

### STEP B — Convert the response to JSON

```js
.then(function (response) {
  return response.json();
})
```

Why this step exists:
The browser receives raw response data

- .json() converts that raw data into usable JavaScript objects or arrays

- Think of this as:
  “Translate this response into something JavaScript understands.”

### STEP C — Use the parsed data

```js
.then(function (data) {
  console.log(data);
})
```

Now data is the actual API response, converted into JavaScript form.
This is where API reading skills matter.

### STEP D — Handle errors

```js
.catch(function (error) {
  console.log(error);
});
```

This code runs if:

- The network fails
- The API server is down
- The URL is incorrect
- Without .catch(), your app would fail silently.

### How to READ an API response (Most important skill)

Rule #1

- Always console.log(data) first
- Never guess what the data looks like.
- Never assume.
- Always inspect.

Example: Advice API
API URL

```js
"https://api.adviceslip.com/advice";
```

```js
Response
{
  "slip": {
    "id": 3,
    "advice": "Do not compare yourself to others."
  }
}
```

Ask yourself, in this order:

- Is this an object or an array? → Object
- What keys exist? → slip
- What is inside slip? → another object
- What data do I actually want? → advice
- So the correct path becomes:

```js
data.slip.advice;
```

This is not guessing.
This is reading the JSON carefully.

### Mini Tasks Overview (One Page)

We build three small widgets on the same page.
Each widget follows the same pattern:

- User clicks a button
- A loading message is shown
- Data is fetched from an API
- JSON is read
- The DOM is updated

TASK 1 — Random Advice
API

```js
"https://api.adviceslip.com/advice"
JSON structure
{
  "slip": {
    "advice": "..."
  }
}
```

What we display
The advice text

Key path

```js
data.slip.advice;
```

TASK 2 — Random Cat Fact
API

```js
"https://catfact.ninja/fact";
```

JSON structure

```js
{
  "fact": "Cats sleep 70% of their lives.",
  "length": 33
}
```

What we display

- The cat fact
- Key path

```js
data.fact;
```

TASK 3 — Random Space Photo (NASA APOD)
We use:

```js
"https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1";
```

Why count=1?

- Without it → you always get today’s photo
- With it → you get a random photo
- When count is used → the API returns an ARRAY
- NASA JSON structure

```js
[
  {
    title: "...",
    explanation: "...",
    url: "...",
    media_type: "image",
  },
];
```

This means:

- data is an array
- data[0] is the first object in that array

```js
const apod = data[0];
```

- Then you can read:
- apod.title
- apod.explanation
- apod.url
- apod.media_type

### Why we check media_type

Some APOD entries are videos, not images.

```js
if (apod.media_type === "video") {
  // show link
} else {
  // show image
}
```

This prevents broken images and introduces conditional logic with APIs.

### Mini Homework — Simple Country Info Viewer

This project introduces user input + APIs.
API used

```js
"https://restcountries.com/v3.1/name/COUNTRY_NAME?fields=name,capital,region,population";
```

Important: This API returns an ARRAY
Even when only one country matches.
Example:

```js
[
  {
    name: { common: "Mexico" },
    capital: ["Mexico City"],
    region: "Americas",
    population: 126000000,
  },
];
```

So we must do:

```js
const countryData = data[0];
```

Reading nested JSON carefully
Ask questions:

- Is capital a string? ❌
- Is it an array? ✅

Correct access:

```js
countryData.capital[0];
```

This is observation, not guessing.
Error handling included

We handle:

- Empty input
- Country not found
- Network or API errors

Each case shows a clear message to the user.
Final mindset

- APIs do not magically plug into your app.
- They give you raw data.
- Your job is to inspect, understand, and extract that data.

If you can:

- console.log API responses
- Identify objects vs arrays
- Trace paths like data[0].name.common
- You understand APIs.
