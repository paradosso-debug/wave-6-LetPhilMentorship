// 🌱 Project 07 — Array Methods
// 🎯 Topic: filter — Keep only what passes
// ------------------------------------------------------------

// EX1: Keep even numbers from [1,2,3,4,5,6].
// EX2: Keep prices under 100 from [50,120,80,200].
// EX3: Keep words with length >= 4 from ["js","code","array","map"].
// EX4: Keep objects with inStock true from [{name:"A",inStock:true},...].
// EX5: Keep emails that include "@gmail.com".



const num = [1,2,3,4,5,6]

const wat = num.filter((n)=>n%2 ===0)
console.log(wat)

const prices2 = [50,120,80,200];
const lowPrices = prices2.filter((price) => price < 100);
console.log(lowPrices);
