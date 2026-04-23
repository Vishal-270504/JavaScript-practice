// 2. Orders → User Summary with Top Product(Group + Count + Compare)
// Each order contains a userId and a product.Find, for each user, the most frequently ordered product.

//     Task:
// Group by userId
// Count products per user
// Find max count product
// Return { userId, topProduct }

function getTopProducts(orders) {

}

console.log(getTopProducts([
    { userId: 1, product: "A" },
    { userId: 1, product: "B" },
    { userId: 1, product: "A" },
    { userId: 2, product: "C" },
    { userId: 2, product: "C" }
]));

// Expected:
// [
//   { userId: 1, topProduct: "A" },
//   { userId: 2, topProduct: "C" }
// ]