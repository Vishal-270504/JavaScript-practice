// 1. Merge User Orders by UserId
// You are given orders where each entry has userId and items(array).Merge all items per user into a single array.

//     Task:
// Loop through orders
// Group by userId
// Merge arrays of items
// Return object

function mergeOrders(orders) {
    let result = {};
    for (let i = 0; i < orders.length; i++) {
        let getUserId = orders[i].userId;
        let getItems = orders[i].items;

        if (!result[getUserId]) {
            result[getUserId] = [];
        } 
        for(let j=0;j<getItems.length;j++){
            result[getUserId].push(getItems[j]);
        }
    }
    return result;
}

console.log(mergeOrders([
    { userId: "u1", items: ["a", "b"] },
    { userId: "u1", items: ["c"] },
    { userId: "u2", items: ["d"] }
]));
// Expected:
// {
//   u1: ["a", "b", "c"],
//   u2: ["d"]
// }