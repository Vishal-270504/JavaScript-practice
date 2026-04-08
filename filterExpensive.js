// The Problem: The Price Filter
// You have an array of products with their prices. Your boss wants a new list that only contains the prices of products that cost $20 or more.

// Your Task:
// Write a function named filterExpensive that takes an array of numbers. It should loop through the array, 
// pick out the numbers that are 20 or higher, put them into a new array, and return that new array.

function filterExpensive(prices) {
    let newList=[];
    for (let i=0;i<prices.length;i++){
        if(prices[i]>=20){
            newList.push(prices[i]);
        }
    }
    return newList;
}

// Should print: [25, 50, 20]  
console.log(filterExpensive([5, 25, 15, 50, 10, 20])); 

// Should print: [100]
console.log(filterExpensive([5, 10, 100])); 

// Should print: []  (An empty array, because nothing is 20 or more)
console.log(filterExpensive([5, 10, 15]));