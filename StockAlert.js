// The Problem: The Stock Alert
// You have an array of stock numbers. Your boss wants to know the total sum of all the stocks
// that are running low (less than 10). If no stocks are low, the total should be 0.

function sumLowStock(stockLevels) {
    let total=0;
    for(let i=0;i<stockLevels.length;i++){
        if (stockLevels[i]<10){
            total=total+stockLevels[i];
        }
    }
    return total;
}

// Should print: 12  (Because 5 + 2 + 5 = 12)
console.log(sumLowStock([50, 5, 20, 2, 100, 5])); 

// Should print: 0   (Because nothing is under 10)
console.log(sumLowStock([10, 20, 30])); 

// Should print: 9   (Because 4 + 5 = 9)
console.log(sumLowStock([4, 15, 5]));