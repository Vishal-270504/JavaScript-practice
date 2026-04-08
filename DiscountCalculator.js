// The Problem: The Discount Calculator
// You have an array of prices. Your task is to apply a 20% discount to every item, round the result to 2 decimal places, and return the new array of discounted prices.

// (To apply a 20% discount, you multiply the price by 0.8. To round to 2 decimals, use the built-in tool: .toFixed(2)).

function applyDiscount(prices) {
   let newArray=[];
   for (let i=0;i<prices.length;i++){
     let discount= prices[i]*0.80;
       discount= discount.toFixed(2);
        newArray.push(discount);
   }
   return newArray;
}

// Should print: ["8.00", "16.00", "40.00"]
console.log(applyDiscount([10, 20, 50])); 

// Should print: ["3.20"]
console.log(applyDiscount([4])); 