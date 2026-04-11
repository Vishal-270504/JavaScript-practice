// The Vowel Remover (String manipulation)
// Write a function named removeVowels that takes a string and removes all the vowels (a, e, i, o, u).
// It should handle both upper and lowercase vowels. Return the new string

function removeVowels(text) {
    return text.replace(/[aeiou]/gi, "");
}

// --- Test Cases ---
console.log(removeVowels("hello world")); // Should print: "hll wrld"
console.log(removeVowels("Javascript")); // Should print: "Jvscrpt"