// Problem 1: The Even Number Filter
// Write a function named getEvenNumbers that takes an array of numbers and returns a new array 
// containing only the even numbers.
// (Hint: Use the modulo operator %. If a number % 2 === 0, it is even).

function getEvenNumbers(numbers) {
    let newArr=[];
    for(let i=0;i<numbers.length;i++){
        if (numbers[i]%2===0){
            newArr.push(numbers[i]);
        }
    }
    return newArr;
}

// --- Test Cases ---
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Should print: [2, 4, 6]
console.log(getEvenNumbers([7, 9, 11]));         // Should print: []