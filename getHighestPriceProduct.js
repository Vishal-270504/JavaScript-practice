// Title: The Highest Price Finder
// Your backend service needs to quickly identify the most expensive product from a list before sending it to the frontend.

// The Task:
// Loop through the array of product objects.Track the highest price.Return the product object with the highest price.
//     Hint: Use a variable to store the current highest product and compare inside the loop.

function getHighestPriceProduct(products) {
    let highestProduct=products[0];
    for(let i=1;i<products.length;i++){
      let currentOrders=products[i];
        if(currentOrders.price>highestProduct.price)
            highestProduct=currentOrders;
    }
    return highestProduct;
}

console.log(getHighestPriceProduct([
    { name: "Phone", price: 10000 },
    { name: "Laptop", price: 50000 },
    { name: "Tablet", price: 20000 }
]));
// Expected Output: { name: "Laptop", price: 50000 }

console.log(getHighestPriceProduct([
    { name: "Pen", price: 20 },
    { name: "Book", price: 200 }
]));
// Expected Output: { name: "Book", price: 200 }