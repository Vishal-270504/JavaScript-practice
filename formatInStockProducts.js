// Title: The Product Stock Formatter
// Your backend returns product data, but the frontend only needs products that are in stock, along with a formatted label.You must filter and transform the data for UI display.

// The Task:
// Loop through the array of product objects.Only keep products where inStock is true.Return a new array with strings in this format: "ProductName - Rs.Price".
//     Hint: Use + to concatenate strings.

function formatInStockProducts(products) {
    let newArray=[];
    for(let i=0;i<products.length;i++){
        if(products[i].inStock===true){
            let concat=products[i].name + "-" + products[i].price;
            newArray.push(concat);
        }
    }
    return newArray;
}

console.log(formatInStockProducts([
    { name: "Laptop", price: 50000, inStock: true },
    { name: "Mouse", price: 500, inStock: false },
    { name: "Keyboard", price: 1500, inStock: true }
]));
// Expected Output: ["Laptop - Rs.50000", "Keyboard - Rs.1500"]

console.log(formatInStockProducts([
    { name: "Pen", price: 20, inStock: false },
    { name: "Book", price: 200, inStock: true }
]));
// Expected Output: ["Book - Rs.200"]