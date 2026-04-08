// Problem 3: The Status Mapper(React / Node Prep)
// In real apps, databases often return numbers for status(e.g., 0, 1, 2), but your React frontend needs to show actual words.

// Write a function named mapStatus that takes an array of order objects.Look at the statusId and replace it with a new property called statusLabel based on this rule:

// 0 -> "Pending"
// 1 -> "Shipped"
// 2 -> "Delivered"
// Return the modified array.
// (Hint: You can add a new key to an object easily inside your loop: orders[i].statusLabel = "Some String").

function mapStatus(orders) {

}

// --- Test Cases ---
console.log(mapStatus([
    { orderId: 101, statusId: 0 },
    { orderId: 102, statusId: 2 }
]));
// Should print: [
//   { orderId: 101, statusId: 0, statusLabel: "Pending" },
//   { orderId: 102, statusId: 2, statusLabel: "Delivered" }
// ]