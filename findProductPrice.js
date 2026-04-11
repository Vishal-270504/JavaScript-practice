//  The Inventory Search (Array of Objects)
// Write a function named findProductPrice that takes an array of product objects and a product name.
// It should loop through the array and return the price of that product. If the product isn't found,
// return null.

function findProductPrice(products, nameToFind) {
    for(let i=0;i<products.length;i++){
        if(products[i].name === nameToFind ){
            return products[i].price;
        }
    }
    return null;
}

// --- Test Cases ---
console.log(findProductPrice([
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.5 }
], "Banana")); // Should print: 0.5

console.log(findProductPrice([
    { name: "Apple", price: 1.5 }
], "Orange")); // Should print: null