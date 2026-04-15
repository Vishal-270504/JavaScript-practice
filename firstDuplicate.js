// 2. Find First Duplicate in Arra
// You are given an array of numbers.Return the first number that appears more than once.

//     Task:
// Loop through array
// Track seen numbers using object
// If number already exists → return it
// If none found → return null

// Hint: Return immediately when found.

function firstDuplicate(arr) {
    let seen = {};
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        if (seen[currentNum]) {
            return currentNum;
        } else {
            seen[currentNum]=true;
        }
    }
    return null;
}
console.log(firstDuplicate([1, 2, 3, 2, 4]));
// Expected:
// 2

console.log(firstDuplicate([1, 2, 3]));
// Expected:
// null