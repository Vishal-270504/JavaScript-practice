// Title: The Duplicate Request Cleaner
// Your backend receives an array of request IDs, but some IDs are duplicated due to retry logic.You need to clean this data before processing to avoid duplicate operations.

// The Task:
// Loop through the array of IDs.Only add IDs to a new array if they are not already present.Return the array with unique IDs.
//     Hint: Use a second array and check with .includes() before pushing.

function removeDuplicates(ids) {
    let newArray = [];
    for (let i = 0; i < ids.length; i++) {
       if(!newArray.includes(ids[i])){
        newArray.push(ids[i]);
       }
    }
    return newArray;
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
// Expected Output: [1, 2, 3, 4]

console.log(removeDuplicates([5, 5, 5, 6]));
// Expected Output: [5, 6]