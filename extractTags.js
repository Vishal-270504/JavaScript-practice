// The Tag Extractor(String Manipulation)
// Blog posts often have tags hidden inside the text formatted like #javascript.Write a function named extractTags
// that takes a string and returns an array of only the words that start with #.
// (Hint: Use .split(" ") to turn the sentence into an array of words. Then loop through them and use .startsWith("#") to check them).
 
function extractTags(text) {
    let newArray = [];
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
        if(words[i].startsWith("#")){
            newArray.push(words[i])
        }
    }
    return newArray;
}

// Should print: ["#react", "#javascript"]
console.log(extractTags("Learning #react and #javascript today"));

// Should print: ["#coding"]
console.log(extractTags("I love #coding!"));

// Should print: []
console.log(extractTags("No tags here")); 