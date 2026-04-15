// Problem 2: The Word Capitalizer
// Write a function named capitalizeWord that takes a single word and returns it with only the
//  first letter capitalized and the rest lowercase.
// (Hint: You can grab the first letter with .charAt(0), grab the rest with .slice(1),
// add them together, and use .toUpperCase() / .toLowerCase()).

function capitalizeWord(word) {
    let letters=word.toLowerCase();
    let firstLetter = letters.charAt(0);
    let two = firstLetter.toUpperCase();
    return two + letters.slice(1);
    

}

// --- Test Cases ---
console.log(capitalizeWord("hELLO")); // Should print: "Hello"
console.log(capitalizeWord("javaScript")); // Should print: "Javascript"