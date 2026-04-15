// Problem 3: The Duplicate Remover
// Write a function named removeDuplicates that takes an array of numbers and returns a new array 
// with all duplicates removed, keeping only the first occurrence of each number.
// (Hint: Before you push a number into your new array,
// check if the new array already has it using.includes()).

function removeDuplicates(numbers) {
    let newArr=[];
    for(let i=0;i<numbers.length;i++){
        if(!newArr.includes(numbers[i])){
            newArr.push(numbers[i]);
        }
    }
    return newArr;
}

console.log(removeDuplicates([1, 1, 2, 3, 3, 3])); // Should print: [1, 2, 3]
console.log(removeDuplicates([5, 5, 5, 5]));       // Should print: [5]


