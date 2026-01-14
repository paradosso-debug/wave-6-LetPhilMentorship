// 🌱 Project 07 — Array Methods
// 🎯 Topic: reduce — Combine into one value
// ------------------------------------------------------------

// EX1: Sum [2,4,6] → 12 using reduce starting at 0.
// EX2: Multiply [2,3,4] → 24 using reduce starting at 1.
// EX3: Find max in [3,9,1,7] using reduce.
// EX4: Build a string "A-B-C" from ["A","B","C"] using reduce.
// EX5: Sum property 'price' in [{price:50},{price:70}] using reduce.



// array.reduce((accumulator, currentValue)=> {
//     return updatedValue;

// }, startingValue)

// const num1 = [1,8,5];

// const total = num1.reduce((sum, num1)=>{
//     return sum + num1;
// }, 

// console.log(total);


const num2 = [2,4,6];
const total2 = num2.reduce((a,c) => {
    return a + c
} ,0);
console.log(total2);


const num3 = [2,3,4];
const total3 = num3.reduce((aac, a) => {
    return aac * a
} ,1);
console.log(total3);

const num4 = [3,9,1,7];
const maxNum = num4.reduce((max,currentnum) => {
    return max > currentnum ? currentnum : max;
}, num4[0]);
console.log(maxNum);

const letters = ["a", "b", "c"];
// const output = letters.reduce((ada, c) =>{
//     return ada === "" ? c : ada + "-" + c;
// }, " " );

// console.log(output2);/ 

const output2 = letters.reduce((dash,letter) => {
    return `${dash}-${letter}`;
});

console.log(output2);