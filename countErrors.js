// Title: The Error Log Counter
// Your Node.js server logs errors as strings in an array.You need to count how many times each error appears so the frontend dashboard can display error statistics.

// The Task:Loop through the array of error messages.Count how many times each message appears.Return an object where keys are error messages and values are counts.
//     Hint: Check if a key already exists in the object before updating.

function countErrors(errors) {

}

console.log(countErrors(["404", "500", "404", "403", "500", "500"]));
// Expected Output: { "404": 2, "500": 3, "403": 1 }

console.log(countErrors(["401", "401", "401"]));
// Expected Output: { "401": 3 }