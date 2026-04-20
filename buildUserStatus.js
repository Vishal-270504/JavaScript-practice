// 1. Build API Response with Status Label
// You receive user records with name and active(true / false).Transform them into a new array where each user has a status field("Active" or "Inactive").

//     Task:
// Loop through users
// Extract name and active
// Convert active → status string
// Build new object and store in result

function buildUserStatus(users) {
    let result=[];
    for(let i=0;i<users.length;i++){
        let getUsers=users[i].name;
        let getStatus=users[i].active;
        if(getStatus===true){
           getStatus="Active";
        }else{
            getStatus="InActive";
        }
        let newObj={
            name:getUsers,
            status: getStatus,
        }
        result.push(newObj);
    }
    return result;
}

console.log(buildUserStatus([
    { name: "Alex", active: true },
    { name: "Bob", active: false }
]));
// Expected:
// [
//   { name: "Alex", status: "Active" },
//   { name: "Bob", status: "Inactive" }
// ]