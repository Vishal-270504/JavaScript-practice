// 1. Build API Error Summary Report
// You receive API error logs with endpoint and status.Build a report that counts how many errors(status ≥ 400) occurred per endpoint.

//     Task:
// Loop through logs
// Check if status ≥ 400
// Group counts by endpoint
// Return object

function errorReport(logs) {
    let result={};
    for(let i=0;i<logs.length;i++){
        let getEndpoints=logs[i].endpoint;
        let getStatus=logs[i].status;
        if(getStatus>=400){
            if (!result[getEndpoints]){
                result[getEndpoints]=1;
            }else{
                result[getEndpoints] = result[getEndpoints]+1;
            }
        }
    }
    return result;
}

console.log(errorReport([
    { endpoint: "/user", status: 500 },
    { endpoint: "/user", status: 200 },
    { endpoint: "/order", status: 404 },
    { endpoint: "/user", status: 500 }
]));
// Expected:
// {
//   "/user": 2,
//   "/order": 1
// }