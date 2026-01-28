# 12 – API Mini Tasks

### Axios (CDN) + async / await

This folder introduces **Axios** while reinforcing **core API concepts** you already learned using `fetch`.

The goal of this lesson is not to replace `fetch`, but to help you understand:

- how APIs work in general
- why Axios exists
- how Axios simplifies common beginner pain points
- how to confidently read JSON
- how to handle APIs that return **objects vs arrays**

---

## What This Lesson Covers

- What Axios is and why developers use it
- How Axios is different from `fetch`
- How to load Axios using a CDN
- Using `async / await` with `axios.get(...)`
- Understanding JSON responses
- Displaying API results in the DOM (text + images)
- Handling errors with `try / catch`
- Working with the NASA APOD API (random results)

❌ No authentication  
❌ No interceptors  
❌ No advanced configuration  
❌ No pagination logic

Just **clear, practical API calls**.

---

## 1. Important Things About `fetch`

Before understanding Axios, it’s important to understand **what `fetch` requires you to do manually**.

---

### 1.1 Manual JSON parsing

With `fetch`, the response is **not JSON yet**.

You must explicitly convert it:

```js
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

If you forget response.json(), you will not get usable data.

1.2 fetch does NOT automatically throw errors
This is one of the most confusing parts for beginners.
With fetch:

A 404 response still goes to .then()
A 500 response still goes to .then()
fetch only throws errors for network failures

That means this code still runs on HTTP errors:

```js
fetch(url).then((response) => {
  console.log("This runs even on 404");
});
```

1.3 You must check response.ok yourself
To correctly handle HTTP errors with fetch, you must write extra logic:

```js
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Request failed");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

👉 This extra step is easy to forget when learning.

### 2. Why Axios Feels Easier for Beginners

Axios handles many of the above issues automatically.

Axios advantages
✅ Automatically parses JSON
(no response.json() needed)
✅ Automatically throws errors for non-2xx status codes
(404, 500 go directly to catch)
✅ Cleaner syntax
✅ try / catch works exactly as expected

Axios example

```js
try {
  const response = await axios.get(url);
  console.log(response.data);
} catch (error) {
  console.log("Request failed:", error);
}
```

- No manual JSON parsing
- No response.ok checks
- Errors behave predictably

Analogy 🪣
fetch is carrying water with your hands.
Axios is using a bucket with a handle.
Both work — Axios just reduces friction.

### 3. Fetch vs Axios — Side-by-Side Comparison

| Feature                | fetch                      | Axios     |
| ---------------------- | -------------------------- | --------- |
| JSON parsing           | Manual (`response.json()`) | Automatic |
| Error handling         | Manual `response.ok` check | Automatic |
| Syntax length          | Longer                     | Shorter   |
| Throws on 404/500      | ❌ No                      | ✅ Yes    |
| Works with async/await | ✅ Yes                     | ✅ Yes    |
| Beginner friendly      | ⚠️ Moderate                | ✅ High   |

### 4. Using Axios via CDN

We load Axios using a <script> tag:

```js
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

After this runs:
axios is available globally
No installation required
No build tools required

Perfect for learning and small projects.

### 5. async / await with Axios

Axios works perfectly with async / await.

Standard pattern

```js
async function getData() {
  try {
    const response = await axios.get("API_URL");
    console.log(response.data);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}
```

Key ideas
async allows await
await pauses execution until the request finishes
response.data is already parsed JSON
try / catch handles:
network issues
invalid URLs
HTTP errors

### 6. Practice Tasks Overview

We build three small widgets on one page.
Each task follows the same flow:

- User clicks a button
- Show a loading message
- Call an API using Axios
- Read response.data
  Update the DOM
- Handle errors if they occur

Task 1 — Random Advice
API

```js
https://api.adviceslip.com/advice
JSON structure
{
  "slip": {
    "advice": "..."
  }
}
```

Displayed value

```js
response.data.slip.advice;
```

Task 2 — Random Cat Fact
API

```js
https://catfact.ninja/fact
JSON structure
{
  "fact": "Cats sleep 70% of their lives.",
  "length": 33
}
```

Displayed value

```js
response.data.fact;
```

Task 3 — Random Space Photo (NASA APOD)
API

```js
"https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1"
Important response detail
This API returns an array, even when requesting one item:
[
  {
    "title": "...",
    "explanation": "...",
    "url": "...",
    "media_type": "image"
  }
]
```

So we must do:

```js
const data = response.data[0];
Display logic
if (data.media_type === "image") {
  // show image
} else {
  // show video link
}
```

This teaches:

- array handling
- conditional rendering
- defensive UI logic

### 7. Mini Homework — Simple Country Info Viewer (Axios)

This project combines user input + APIs.
API used

```js
"https://restcountries.com/v3.1/name/COUNTRY_NAME?fields=name,capital,region,population";
```

Important detail
This API also returns an array:

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

So we must use:

```js
const country = response.data[0];
```

Steps

- Read user input
- Encode input with encodeURIComponent
- Call axios.get(url)
- Use response.data[0]
- Display country info
- Handle errors:
- empty input
- not found
- network issues

### 8. Which One Should I Use?

Use fetch if:

- You want to learn lower-level browser APIs
- You are comfortable handling errors manually
- You want zero dependencies

Use Axios if:

- You want cleaner, simpler syntax
- You want predictable error handling
- You are learning APIs for the first time
- You want less boilerplate

Final Mindset 🧠
fetch and Axios do the same job.
Axios simply removes extra steps that confuse beginners.

If you understand:

- response.data
- arrays vs objects
- JSON inspection
- try / catch with async code

You understand APIs, regardless of the tool.
