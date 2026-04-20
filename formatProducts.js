// 3. Format API Response for UI Cards
// You are given product data with title, price, and inStock.Convert it into UI - ready format with:
// { title, label, priceText }
// label → "Available" / "Out of Stock"
// priceText → "₹<price>"

// Task:
// Loop through products
// Extract fields
// Convert boolean to label
// Format price string
// Return new array

function formatProducts(products) {
    let result=[];
    for(let i=0;i<products.length;i++){
        let getProduct=products[i];
        let getTitle=getProduct.title;
        let getPrice=getProduct.price;
        let getInStock=getProduct.inStock;

        if(getInStock===true){
            getInStock="Available";
        }else{
            getInStock ="Out of Stock";
        }
        let priceText = "₹" + getPrice;
        let newObj={
            title:getTitle,
            label:getInStock,
            priceText: priceText,
        }
        result.push(newObj);
    }
    return result;
}

console.log(formatProducts([
    { title: "Phone", price: 1000, inStock: true },
    { title: "Laptop", price: 5000, inStock: false }
]));
// Expected:
// [
/*  { title: "Phone", label: "Available", priceText: "₹1000" },
    { title: "Laptop", label: "Out of Stock", priceText: "₹5000" } */
// ]