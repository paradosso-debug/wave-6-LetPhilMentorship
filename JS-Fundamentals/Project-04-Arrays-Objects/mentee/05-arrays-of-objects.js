// 🌱 Project 04 — Arrays & Objects
// 🎯 Topic: Arrays of Objects — Practical Patterns
// ------------------------------------------------------------

// EX1: Create products array with 3 objects: { name, price } and log it.
// EX2: Loop through products and log `${name} — $${price}`.
// EX3: Find the first product with price > 100 (either loop or .find) and log it.
// EX4: Filter products priced >= 50 into a new array (loop or .filter) and log.
// EX5: Compute the total price of all products and log it.

const products = [
  { name: "Iphone", price: 899.99 },
  { name: "Airpods", price: 299.99 },
  { name: "Coffee machine", price: 39.99 },
];
console.log(products);

for (const product of products) {
  console.log(`${product.name} - ${product.price}`);
}

let pricey = null;
for (const product of products) {
  if (product.price > 100) {
    pricey = product;
    break;
  }
}
console.log(pricey);

const priced = products.filter((expensive) => expensive.price >= 50);
console.log(priced);

(pricey) => pricey.price >= 50;
