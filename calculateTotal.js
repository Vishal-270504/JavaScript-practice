// Title: The Order Total Calculator
// In an e - commerce backend, each order contains multiple items with prices.You need to calculate the total cost of all items in a single order.

// The Task:Loop through the array of item objects.Add each price to a running total.Return the final total.
//     Hint: Use a variable like total and keep adding inside the loop.

function calculateTotal(items) {
    let total=0;
    for(let i=0;i<items.length;i++){
        total=total+items[i].price;
    }
    return total;
}

console.log(calculateTotal([
    { name: "Phone", price: 10000 },
    { name: "Case", price: 500 }
]));
// Expected Output: 10500

console.log(calculateTotal([
    { name: "Book", price: 300 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 700 }
]));
// Expected Output: 1050