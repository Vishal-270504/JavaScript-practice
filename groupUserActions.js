// 1. User Activity Log Aggregator
// You are given an array of user activity logs.Each log contains a userId and an action.You need to group all actions performed by each user into a single object.

// Task:
// Loop through the logs array , Group actions by userId, Store actions in an array for each user, Return the final grouped object

function groupUserActions(logs) {
    let obj={};
    for(let i=0;i<logs.length;i++){
        
    }
}

console.log(groupUserActions([
    { userId: "u1", action: "login" },
    { userId: "u2", action: "view" },
    { userId: "u1", action: "logout" }
]));
// Expected:
// {
//   u1: ["login", "logout"],
//   u2: ["view"]
// }

console.log(groupUserActions([
    { userId: "u3", action: "click" }
]));
// Expected:
// {
//   u3: ["click"]
// }