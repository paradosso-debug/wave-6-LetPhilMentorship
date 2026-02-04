// Props & Destructuring Homework
// ----------------------------------------------
// GOAL: Use a function that receives product "props" and uses
//       destructuring to create product cards.
//
// We will have an array of product objects, like:
//   { title: "Wireless Headphones", price: 59.99, stock: 12 }
//
// ==============================================
// STEP 1 – SELECT ELEMENTS
// ==============================================
//
// STEP 1: Select and store the following elements in variables:
//         - generateProductsBtn (id "generateProductsBtn")
//         - productContainer (id "productContainer")

// ==============================================
// STEP 2 – CREATE PRODUCTS ARRAY
// ==============================================
//
// STEP 2: Create an array named products with at least 3 objects.
//         Each object should have:
//           - title (string)
//           - price (number)
//           - stock (number)

// ==============================================
// STEP 3 – createProductCard FUNCTION (DESTRUCTURING)
// ==============================================
//
// STEP 3: Create a function named createProductCard that:
//         - receives ONE parameter (for example productProps)
//         - uses object destructuring in the parameter list, e.g.:
//             function createProductCard({ title, price, stock }) { ... }
//         - inside the function:
//             * format the price as a string with 2 decimals, e.g.:
//                 const priceText = "$" + price.toFixed(2);
//             * decide a stock message:
//                 - if stock === 0 → "Out of stock"
//                 - else → "In stock: X items"
//             * optionally add a CSS class name for stock:
//                 - "out" for out of stock
//                 - "in" for in stock
//             * return a template string with HTML, for example:
//
//                 `
//                   <article class="product-card">
//                     <h2 class="product-title">${title}</h2>
//                     <p class="product-price">${priceText}</p>
//                     <p class="product-stock ${stockClass}">${stockMessage}</p>
//                   </article>
//                 `

// ==============================================
// STEP 4 – LOOP & RENDER ON BUTTON CLICK
// ==============================================
//
// STEP 4: Add a "click" event listener to generateProductsBtn.
//         Inside the listener:
//         - create an empty string, for example cardsHTML = "".
//         - loop through the products array (for example with forEach).
//             * for each product object, call createProductCard(product)
//               and get the HTML string.
//             * add (concatenate) that HTML string to cardsHTML.
//         - after the loop, set:
//             productContainer.innerHTML = cardsHTML;
//
//         Now when you click the button, the product cards should appear.
