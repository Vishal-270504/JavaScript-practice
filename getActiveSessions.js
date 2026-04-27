// 1. API Log → Active User Sessions(Group + Filter)
// You are given login / logout logs.Some users may have multiple sessions.Build active sessions only(users who logged in but did not log out).

//     Task:
// Group logs by userId
// Track login vs logout count
// Keep only users where login > logout
// Return array of { userId, activeSessions }

function getActiveSessions(logs) {
    let userMap = {};
    let result = [];

    for (let i = 0; i < logs.length; i++) {
        let getUserId = logs[i].userId;
        let getAction = logs[i].action;

        if (getAction === "login") {
            if (userMap[getUserId] === undefined) {
                userMap[getUserId] = 1;
            } else {
                userMap[getUserId] = userMap[getUserId] + 1;
            }
        }
        if (getAction === "logout") {
            if (userMap[getUserId] !== undefined) {
                userMap[getUserId] = userMap[getUserId] - 1;
            }
        }
    }
    for (let getUserId in userMap) {
        if (userMap[getUserId] > 0) {
            result.push({
                userId: Number(getUserId),
                ActiveSessions: userMap[getUserId]
            })
        }
    }
    return result;
}

console.log(getActiveSessions([
    { userId: 1, action: "login" },
    { userId: 2, action: "login" },
    { userId: 1, action: "logout" },
    { userId: 2, action: "login" }
]));

// Expected:
// [
//   { userId: 2, activeSessions: 2 }
// ]