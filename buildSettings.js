// Build Nested Settings Object from Key Paths
// You are given an array of settings where keys are in dot format like "user.name", "user.age".Convert this into a nested object.

//     Task:
// Loop through settings
// Split key by "."
// Create nested structure step by step
// Assign value at correct level

// Hint: Use a temporary pointer to move inside object.

function buildSettings(settings) {
    let result = {};

    for (let i = 0; i < settings.length; i++) {
        let parts = settings[i].key.split(".");
        let value = settings[i].value;

        let pointer = result;
        let lastIndex = parts.length - 1;

        for (let j = 0; j < lastIndex; j++) {
            let part = parts[j];

            if (!pointer[part]) {
                pointer[part] = {};
            }

            pointer = pointer[part];
        }

        pointer[parts[lastIndex]] = value;
    }

    return result;
}

console.log(buildSettings([
    { key: "user.name", value: "Alex" },
    { key: "user.age", value: 25 }
]));
// Expected:
// {
//   user: { name: "Alex", age: 25 }
// }