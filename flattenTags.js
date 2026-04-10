// Title: The UI Tag Flattener
// A frontend component receives nested arrays of tags from different modules.You need to flatten them into a single array so the UI can render all tags in one list.

// The TaskLoop through the outer array.For each inner array, loop through its items.Add all values into one final array and return it.
//     Hint: You will need a nested for loop.

function flattenTags(tags) {
    let newArr = [];
    for (let i = 0; i < tags.length; i++) {
        for (let j = 0; j < tags[i].length; j++) {
            let inner=tags[i][j];
            newArr.push(inner);
        }
    }
    return newArr;
}


console.log(flattenTags([["js", "react"], ["node"], ["api", "db"]]));
// Expected Output: ["js", "react", "node", "api", "db"]

console.log(flattenTags([["a"], ["b", "c"]]));
// Expected Output: ["a", "b", "c"]