// Build Nested Settings Object from Key Paths
// You are given an array of settings where keys are in dot format like "user.name", "user.age".Convert this into a nested object.

//     Task:
// Loop through settings
// Split key by "."
// Create nested structure step by step
// Assign value at correct level

// Hint: Use a temporary pointer to move inside object.

function buildSettings(settings) {
    let result={};
    for(let i=0;i<settings.length;i++){
        let getKey=settings[i].key;
        let getValue=settings[i].value;
        for(let j=0;j<getKey.length;j++){
            let keySplit = getKey.split(".");
            
            
        }
    }
    return 

    // loop through settings
    // get key and value

    // split key by "."

    // start from result object

    // loop through parts of key
    // if last part
    // assign value
    // else
    // if key does not exist, create empty object
    // move deeper into object

    // return result
}

console.log(buildSettings([
    { key: "user.name", value: "Alex" },
    { key: "user.age", value: 25 }
]));
// Expected:
// {
//   user: { name: "Alex", age: 25 }
// }