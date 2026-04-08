// The Problem: The Password Strength Checker
// Write a function named checkStrength that takes a password string. It should check two things:

// Is the password 8 characters or longer?
// Does the password contain the word "pass" (case-insensitive, so "pass", "PASS", or "Pass" all count)?
// If it meets both conditions, return true. Otherwise, return false.

function checkStrength(password) {
    if(password.length>=8){
        if(password.toLowerCase().includes("pass")){
            return true;
        }
    }
    return false;
}

// Should print: true (Length is 9, contains "pass")
console.log(checkStrength("myPass123")); 

// Should print: false (Contains "pass", but length is only 6)
console.log(checkStrength("pass12")); 

// Should print: true (Length is 10, but doesn't contain "pass")
console.log(checkStrength("mypassword")); 