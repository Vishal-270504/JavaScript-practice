// The Problem: The Secret Message Decoder
// You are given a sentence where all the vowels (a, e, i, o, u) have been replaced by the number 1.

// Your Task:
// Write a function named decodeMessage that replaces every "1" with the letter "e", and returns the decoded string.

function decodeMessage(secretText) {
    for (let i = 0; i < secretText.length; i++) {
        secretText = secretText.replace("1", "e");
    }
    return secretText;
}
    
// Should print: "hello world"
console.log(decodeMessage("h1llo world")); 

// Should print: "everyone is here"
console.log(decodeMessage("1v1ry1n1 is h1r1")); 