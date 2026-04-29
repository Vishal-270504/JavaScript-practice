// API Logs → Error Summary Per Endpoint (Group + Track Max)
// You are given API logs where each entry contains an endpoint and a status. You need to build a summary of only failed requests (status = "error"), and also identify which endpoint has the highest number of errors.

// Task:
// Loop through logs
// Count errors per endpoint
// Track which endpoint has maximum errors
// Return:
// errorSummary → { endpoint: count }
// topEndpoint → endpoint with highest errors

function getErrorSummary(logs) {
    let errorMap={};
    for(let i=0;i<logs.length;i++){
        let getEndpoint=logs[i].endpoint;
        let getStatus=logs[i].status;
        if (getStatus === "error") {
          if (errorMap[getEndpoint] === undefined) {
            errorMap[getEndpoint] = 1;
          } else {
            errorMap[getEndpoint] = errorMap[getEndpoint] + 1;
          }
        }
    }
    let topEndpoint=null;
    let maxCount=0;

    for(let endPoint in errorMap ){
        if(errorMap[endPoint]>maxCount){
            maxCount = errorMap[endPoint];
            topEndpoint = endPoint;
        }
    }
    return { errorSummary: errorMap,
        topEndpoint: topEndpoint
    }
}

console.log(getErrorSummary([
  { endpoint: "/login", status: "error" },
  { endpoint: "/login", status: "success" },
  { endpoint: "/cart", status: "error" },
  { endpoint: "/login", status: "error" },
  { endpoint: "/cart", status: "error" }
]));

// Expected:
// {
//   errorSummary: {
//     "/login": 2,
//     "/cart": 2
//   },
//   topEndpoint: "/login" // or "/cart" (tie allowed)
// }