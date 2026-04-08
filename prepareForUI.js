// Problem 1: The Data Transformer(React Prep)
// In React, you rarely modify original data.You take an array of one shape and "map" it into an array of a different shape to display.

// Write a function named prepareForUI that takes an array of user objects.Return a new array containing only strings formatted like: "Name (Email)".
// (Hint: This is a loop + array.push, but you only grab the name and email properties).

function prepareForUI(users) {
    let newArray=[];
    for(let i=0;i<users.length;i++){
        newArray.push(users[i].name+ "( "+ users[i].email+" )")
    }
    return newArray;
}

// Should print: ["John (john@test.com)", "Jane (jane@test.com)"]
console.log(prepareForUI([
    { id: 1, name: "John", email: "john@test.com", role: "admin" },
    { id: 2, name: "Jane", email: "jane@test.com", role: "user" },
    { id: 3, name: "Janeee", email: "jjjjjjane@test.com", role: "user" }
])); 

