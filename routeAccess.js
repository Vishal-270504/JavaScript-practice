// 2. Build Route Access Map
// You are given route access logs with route and userId.Build an object where each route contains a list of unique users who accessed it.

//     Task:
// Loop through logs
// Group by route
// Ensure userId is not duplicated
// Return object

function routeAccess(logs) {
    let result={};
    for (let i=0;i<logs.length;i++){
        let getRoute=logs[i].route;
        let getUserId=logs[i].userId;
        if(!result[getRoute]){
            result[getRoute]=[];
        }
        if (!result[getRoute].includes(getUserId)){
            result[getRoute].push(getUserId);
        }
    }
    return result;
}

console.log(routeAccess([
    { route: "/home", userId: "u1" },
    { route: "/home", userId: "u2" },
    { route: "/home", userId: "u1" }
]));
// Expected:
// {
//   "/home": ["u1", "u2"]
// }