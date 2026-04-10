// 2. Query String Key Counter
// You are given an array of query strings like "user=alex&age=25".Count how many times each key appears across all queries.

// Task:
// Loop through each query ,stringSplit into key - value pairs. Extract only keys ,Count frequency of each key
// Split twice: first by &, then by =.

function countQueryKeys(queries) {
    // your code
}

console.log(countQueryKeys([
    "user=alex&age=25",
    "user=bob&city=ny",
    "age=30&city=la"
]));
// Expected:
// {
//   user: 2,
//   age: 2,
//   city: 2
// }

console.log(countQueryKeys([
    "id=1"
]));
// Expected:
// {
//   id: 1
// }