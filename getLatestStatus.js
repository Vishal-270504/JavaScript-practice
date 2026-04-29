// 1. API Logs → Latest Status Per User
// You are given logs where each entry represents a user status update over time.Each user may appear multiple times.You need to return only the latest status for each user.

//     Task:
// Loop through logs
// Store latest status per userId(overwrite old)
// Convert result into array of { userId, status }
// Hint: overwrite value in object for same userId.

function getLatestStatus(logs) {
    let result=[];
    let userMap={};
    for (let i=0;i<logs.length;i++){
        let getUserId=logs[i].userId;
        let getStatus=logs[i].status;
        userMap[getUserId]=getStatus;
    }
    for(let getUserId in userMap){
        result.push({
          userId: getUserId,
          status: userMap[getUserId],
        });
    }
    return result;
}

console.log(getLatestStatus([
    { userId: 1, status: "offline" },
    { userId: 2, status: "online" },
    { userId: 1, status: "online" }
]));

// Expected:
// [
//   { userId: 1, status: "online" },
//   { userId: 2, status: "online" }
// ]