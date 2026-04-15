// 2. Query String Key Counter
// You are given an array of query strings like "user=alex&age=25".Count how many times each key appears across all queries.

// Task:
// Loop through each query ,stringSplit into key - value pairs. Extract only keys ,Count frequency of each key
// Split twice: first by &, then by =.

function countQueryKeys(queries) {
    let obj={};
    for(let i=0;i<queries.length;i++){
        let firstSplit=queries[i].split("&");

        for(let j=0;j<firstSplit.length;j++){
            let secondSplit = firstSplit[j].split("=");
            let key = secondSplit[0];
            
            if (!obj[key]) {
                obj[key] = 1;
            } else {
                obj[key] = obj[key] + 1;
            }
        }
    }
    return obj;
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