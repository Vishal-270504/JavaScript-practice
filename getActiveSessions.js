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
        let userId = logs[i].userId;
        let action = logs[i].action;
        
        if (userMap[userId] === undefined) {
            userMap[userId] = { login: 0, logout: 0 };
        }

        if (action === "login") {
            userMap[userId].login = userMap[userId].login + 1;
        } else if (action === "logout") {
            userMap[userId].logout = userMap[userId].logout + 1;
        }
    }

    for (let userId in userMap) {
        let loginCount = userMap[userId].login;
        let logoutCount = userMap[userId].logout;

        if (loginCount > logoutCount) {
            result.push({
                userId: Number(userId),
                activeSessions: loginCount - logoutCount
            });
        }
    }

    return result;
}

console.log(getActiveSessions([
    { userId: 1, action: "login" },
    { userId: 2, action: "logout" },
    { userId: 1, action: "login" },
    { userId: 2, action: "login" },
    { userId: 1, action: "logout" },
]));

// Expected:
// [
//   { userId: 2, activeSessions: 2 }
// ]