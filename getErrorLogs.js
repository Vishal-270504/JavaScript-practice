// API Log Error Filter
// You are given API logs.Return only logs where status code is 400 or above.

//     Task:
// Loop through logs
// Extract status code
// Check if >= 400
// Store matching logs

// Hint: Status code is the last element after split.

function getErrorLogs(logs) {
    let result=[];
    for(let i=0;i<logs.length;i++){
        let currentLog=logs[i];
        let space= currentLog.split(" ");
        let lastPart=space[2];
        if(lastPart>=400){
            result.push(currentLog);
        }
    }
    return result;
}

console.log(getErrorLogs([
    "GET /api 200",
    "POST /api 500",
    "DELETE /api 404"
]));
// Expected:
// [
//   "POST /api 500",
//   "DELETE /api 404"
// ]