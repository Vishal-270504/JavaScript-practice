// 3. Generate User Session Durations
// You are given logs with userId, login, and logout.Calculate session duration for each entry and return structured data.

//     Task:
// Loop through logs
// Calculate duration = logout - login
// Build new object with userId and duration
// Return array

function sessionDurations(logs) {
    let result=[];
    for(let i=0;i<logs.length;i++){
        let getLogin=logs[i].login;
        let getLogout=logs[i].logout;
        let getUserId=logs[i].userId;
        let duration=getLogout-getLogin;
        let newObj={
            userId: getUserId,
            duration : duration,
        }
        result.push(newObj);
    }
    return result;
}

console.log(sessionDurations([
    { userId: "u1", login: 10, logout: 20 },
    { userId: "u2", login: 5, logout: 15 }
]));
// Expected:
// [
//   { userId: "u1", duration: 10 },
//   { userId: "u2", duration: 10 }
// ]