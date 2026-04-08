// The Problem: The Stock Checker
// Imagine you are writing software for a store. You have an array (a list) that holds the current inventory of a specific product.

// Your Task:
// Write a function named countLowStock that takes one argument (an array of numbers).
//  It should look through the array and count how many items have a stock of less than 5. Finally, it should return that total count.

function countLowStock(inventoryArray) {
    // You will need a variable to keep track of the count
    let count=0;
    for (let i=0;i<=inventoryArray.length;i++){
        if (inventoryArray[i]<5){
            count++;
        }
    }
return count;
}

// Should print: 2  (Because 2 and 4 are less than 5)
console.log(countLowStock([10, 2, 8, 4, 20])); 

// Should print: 0  (Because nothing is less than 5)
console.log(countLowStock([5, 10, 15])); 

// Should print: 4
console.log(countLowStock([0, 1, 2, 3, 10]));