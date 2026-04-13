// Validate and Clean Product List
// You receive products, but some have invalid data(empty name, negative price).Return only valid products with cleaned names(trimmed).

//     Task:
// Loop through products
// Check if name exists and price >= 0
// Trim name
// Store valid products in new array

// Hint: Use trim() before storing.

function cleanProducts(products) {
    let newArr=[];
    for(let i=0;i<products.length;i++){
        let getProducts=products[i];
        if(getProducts.name && getProducts.price>=0){
           let cleanName= getProducts.name.trim();
            let obj = {};
            obj[cleanName] = getProducts.price;
            newArr.push(obj);
        }
       
    }
    return newArr;
}

console.log(cleanProducts([
    { name: "  Phone  ", price: 100 },
    { name: "", price: 50 },
    { name: "Laptop", price: -10 }
]));
// Expected:
// [
//   { name: "Phone", price: 100 }
// ]