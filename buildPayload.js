// 1. Build API Payload from Form Data
// You receive form input as an array of { field, value }. Convert it into a single object payload for API submission.

//     Task:
// Loop through form array
// Extract field and value
// Assign into object
// Return final payload

// Hint: Dynamic key assignment.

function buildPayload(formData) {
    // create empty object result

    // loop through formData
    // get current item
    // extract field and value

    // assign result[field] = value

    // return result
}

console.log(buildPayload([
    { field: "name", value: "Alex" },
    { field: "age", value: "25" }
]));
// Expected:
// { name: "Alex", age: "25" }