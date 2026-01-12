// 🌱 Project 07 — Array Methods
// 🎯 Topic: map — Transform each item
// ------------------------------------------------------------

// EX1: Given [1,2,3], map to [2,4,6] (double each).
// EX2: Given names ["jocelin","aimee"], map to capitalized versions.
// EX3: Given prices [99,149], map to strings like "$99".
// EX4: Given words ["hi","there"], map to word lengths.
// EX5: Given objects [{n:2},{n:3}], map to squares [4,9] using the n property.


const oddNumbers = [1,2,3];
const evenNumbers = oddNumbers.map((number) => {
    return number * 2
});
console.log(oddNumbers);
console.log(evenNumbers);

const names = ["jocelin","aimee"];
const caps = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})

console.log(caps);

const prices = [99.124, 320.232]

const convPrices = prices.map((price)=>{
    return `$${(price)}`
})

console.log(convPrices)

// console.log(prices.map(p => `${p}`))

const words = ["hi","there"];
const wordsLength = words.map((word) => word.length);
console.log(wordsLength);


const object = [{n:2},{n:3}];
// const objsqr = object.map((obj) => {
//     return obj.n * obj.n
// });

// console.log(objsqr);

// obj.n.Mathpow()

const objsqr = object.map((obj)=>{
    return Math.pow(obj.n,2)
})
console.log(objsqr)