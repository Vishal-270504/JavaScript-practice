// Build User Email Domain Map
// You receive a list of users with emails.Group users by their email domain(e.g., "gmail.com"), storing names under each domain.

//     Task:
// Loop through users
// Extract domain from email
// Group names under each domain
// Return final object

// Hint: Use split("@") and take index[1].

function groupByDomain(users) {
    let result={};
    for(let i=0;i<users.length;i++){
        let currentUser=users[i].name;
        let userEmail=users[i].email;
        let cut= userEmail.split("@");
        let domain=cut[1];
        if (!result[domain]) {
            result[domain]=[];
        }    
        result[domain].push(currentUser);
    }
    return result;
}

console.log(groupByDomain([
    { name: "Alex", email: "alex@gmail.com" },
    { name: "Bob", email: "bob@yahoo.com" },
    { name: "Sam", email: "sam@gmail.com" }
]));
// Expected:
// {
//   "gmail.com": ["Alex", "Sam"],
//   "yahoo.com": ["Bob"]
// }