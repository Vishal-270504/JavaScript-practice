// Problem 2: URL Query Parser(Node.js Prep)
// In Node.js, you often read URLs like / search ? category = shoes & sort=price.You need to extract the value after the = sign.

// Write a function named getQueryValue that takes a query string(e.g., "sort=price") and returns just the value("price").
// (Hint: Use.split("=") which turns "A=B" into an array["A", "B"].Grab the second part).

function getQueryValue(queryString) {
    let parser= queryString.split("=")
    let secondPart=parser[1];
    return secondPart;
}

// --- Test Cases ---
console.log(getQueryValue("category=shoes")); // Should print: "shoes"
console.log(getQueryValue("limit=10"));       // Should print: "10"