// 🌱 Project 07 — Array Methods
// 🎯 Topic: some & every — Quick checks
// ------------------------------------------------------------

// EX1: some — Are any numbers > 100 in [20,50,150]?
// EX2: every — Are all numbers positive in [2,3,0,5]?
// EX3: some — Does any email end with '@gmail.com'?
// EX4: every — Are all words length >= 3?
// EX5: Chain: filter numbers > 10, then check if every remaining is even.

const nums1 = [20, 50, 150];
const thing = nums1.some((n) => n > 100);
console.log(thing);

const nums2 = [2, 3, 0, 5];
const every = nums2.every((num) => num >= 0);
console.log(every);

const emails = ["ausitn@outlook.com", "aust@hotmail.com", "au@yahoo.com"];
const gmailCheck = emails.some((c) => c.includes("@gmail.com"));
console.log(gmailCheck);

const words1 = ["words", "alkdf", "çojgwç"];
const wor = words1.every((w) => w.length >= 3);
console.log(wor);

const numbs1 = [1, 5, 17, 27, 83, 67];
const res = numbs1.filter((n) => n > 10);
const result = res.every((n) => n % 2 === 0);
console.log(result);
