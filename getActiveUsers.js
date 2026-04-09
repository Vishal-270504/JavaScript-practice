// Title: The Active User Filter
// Your API returns a list of users with an isActive flag.The frontend only wants to display active users.You need to filter this data manually.

// The Task:
// Loop through the array of user objects.Check if isActive is true.Return a new array containing only the active user objects.
//     Hint: Use an if condition inside your loop.

function getActiveUsers(users) {
    let newArray=[];
    for(let i=0;i<users.length;i++){
        if(users[i].isActive===true){
            newArray.push(users[i])
        }
    }
    return newArray;
}

console.log(getActiveUsers([
    { name: "John", isActive: true },
    { name: "Jane", isActive: false },
    { name: "Mike", isActive: true }
]));
// Expected Output: [
/* { name: "John", isActive: true },
   { name: "Mike", isActive: true } */

console.log(getActiveUsers([
    { name: "A", isActive: false },
    { name: "B", isActive: true }
]));
// Expected Output: [{ name: "B", isActive: true }]