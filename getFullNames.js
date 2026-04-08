// The Problem: The Full Name Combiner
// You are given an array of "user" objects. Each object has a firstName and a lastName.

// Your Task:
// Write a function named getFullNames that loops through the array, combines the first and last name with a space in between,
//  pushes them into a new array, and returns that new array.

function getFullNames(users) {
    let emptyArray=[];
    for(let i=0;i<users.length;i++){
        let fullName= users[i].firstName +" "+ users[i].lastName;
              emptyArray.push(fullName);
    }
         return emptyArray;
}

// Should print: ["John Doe", "Jane Smith"]
console.log(getFullNames([
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" }
])); 

// Should print: ["Alex Johnson"]
console.log(getFullNames([
    { firstName: "Alex", lastName: "Johnson" }
]));