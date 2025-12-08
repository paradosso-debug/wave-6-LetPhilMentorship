// 🌱 Project 04 — Arrays & Objects
// 🎯 Topic: Arrays — Common Methods
// ------------------------------------------------------------
// EX1: Start with [1,2,3]; use push(4) then log the array.
// EX2: Use pop() to remove the last item and log the array.
// EX3: Use unshift("start") to add to the beginning; log the array.
// EX4: Use shift() to remove the first item; log the array.
// EX5: Use includes(2) and indexOf(2) on an array; log results.

let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift("start");
console.log(numbers);

numbers.shift();
console.log(numbers);

let randomNumbers = [5, 4, 2, 6];

// let includes = randomNumbers.includes(2);
// let indexOf = randomNumbers.indexOf(2);

// console.log(includes);
// console.log(indexOf);

console.log(randomNumbers.indexOf(2), randomNumbers.includes(2));
