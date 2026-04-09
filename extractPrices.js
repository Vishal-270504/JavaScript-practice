// Title: The Product Price Extractor
// You are working on a Node.js backend that receives product data from an API.Each product is an object containing multiple fields,
// but the frontend only needs a list of prices.You must extract this data cleanly.

// The Task:
// Loop through the array of product objects.Extract the price from each product. Return a new array containing only the prices.
// Hint: Use a for loop and access each object's property using array[i].price.

function extractPrices(products) {
    let newArray =[];
    for(let i=0;i<products.length;i++){
        let money=products[i].price
        newArray.push(money);
    }
    return newArray
}

console.log(extractPrices([
    { name: "Shirt", price: 500 },
    { name: "Shoes", price: 1500 },
    { name: "Hat", price: 300 }
]));
// Expected Output: [500, 1500, 300]

console.log(extractPrices([
    { name: "Book", price: 200 },
    { name: "Pen", price: 50 }
]));
// Expected Output: [200, 50]