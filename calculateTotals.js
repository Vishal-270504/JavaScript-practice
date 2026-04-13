// Order Price Calculator(Cart Processing)
// You are given a cart with items containing price and qty.Calculate total price per item and return a new array with { productId, total }.

//     Task:
// Loop through cart
// Calculate total = price * qty
// Build new objects
// Store in result array

// Hint: Do not modify original cart.

function calculateTotals(cart) {
    let result=[];
    for(let i=0;i<cart.length;i++){
        let currentItem=cart[i];
        let product = currentItem.productId;
        let money = currentItem.price;
        let quantity = currentItem.qty;
        let total=money*quantity;
        obj = { productId: product, total: total };
        result.push(obj);
    }
    return result;
}

console.log(calculateTotals([
    { productId: "p1", price: 100, qty: 2 },
    { productId: "p2", price: 50, qty: 3 }
]));
// Expected:
// [
//   { productId: "p1", total: 200 },
//   { productId: "p2", total: 150 }
// ]