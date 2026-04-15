// 3. Transform Orders into API Response Shape
// You are given orders with id, userId, and amount.Transform them into a new format:
// { orderId, user, isHighValue } where isHighValue is true if amount > 100.

// Task:
// Loop through orders
// Extract fields
// Create new object with renamed keys
// Add boolean flag
// Return new array

// Hint: Boolean comes from condition directly.

function transformOrders(orders) {
    let result=[];
    for(let i=0;i<orders.length;i++){
        let currentOrders=orders[i];
        let orderId =currentOrders.id;
        let user=currentOrders.userId;
        let isHighValue=currentOrders.amount>100;
        let newObj={
            orderId: orderId,
            user: user,
            isHighValue: isHighValue,
        };   
        result.push(newObj);
    }
    return result;
}

console.log(transformOrders([
    { id: "o1", userId: "u1", amount: 120 },
    { id: "o2", userId: "u2", amount: 80 }
]));
// Expected:
// [
/*   { orderId: "o1", user: "u1", isHighValue: true },
     { orderId: "o2", user: "u2", isHighValue: false } */
// ]