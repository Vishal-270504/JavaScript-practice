// Title: The Username Cleaner
// You are processing user signup data on a backend system.Usernames often come with extra spaces and inconsistent casing, which causes issues in the database.
// You need to normalize them before saving.

// The Task:
// Loop through the array of usernames.Remove all spaces from each username.Convert each username to lowercase and return a new cleaned array.
// Hint: Use.replace() and.toLowerCase().

function cleanUsernames(usernames) {
    let newArray=[];
    for (let i=0;i<usernames.length;i++){
        let convert=usernames[i].replace(/\s/g, "").toLowerCase();
        newArray.push(convert);
    }
    return newArray
}

console.log(cleanUsernames(["  JohnDoe ", " Alice123", "BOB "]));
// Expected Output: ["johndoe", "alice123", "bob"]

console.log(cleanUsernames(["  DEV_user ", " TestUser "]));
// Expected Output: ["dev_user", "testuser"]