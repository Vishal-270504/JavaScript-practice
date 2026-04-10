// Title: The API Response Grouper
// Your backend receives a list of orders, each with a category.The frontend dashboard needs grouped data so it can show orders by category.

// The Task:
// Loop through the array of orders.Group orders by their category.Return an object where each key is a category and the value is an array of orders in that category.
//     Hint: If the category key does not exist, initialize it with an empty array.

function groupByCategory(orders) {
    let obj = {};
    for (let i = 0; i < orders.length; i++) {
        let currentOrders = orders[i];
        let category=currentOrders.category;
        if (obj[category]) {
          obj[category].push(currentOrders);
        }else{
            obj[category]=[currentOrders];
        }
    }
    return obj;
}

console.log(groupByCategory([
    { id: 1, category: "electronics" },
    { id: 2, category: "clothing" },
    { id: 3, category: "electronics" }
]));
// Expected Output:
// {
//   electronics: [{ id: 1, category: "electronics" }, { id: 3, category: "electronics" }],
//   clothing: [{ id: 2, category: "clothing" }]
// }

console.log(groupByCategory([
    { id: 1, category: "books" },
    { id: 2, category: "books" }
]));
// Expected Output:
// {
//   books: [{ id: 1, category: "books" }, { id: 2, category: "books" }]
// }