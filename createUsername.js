// The Problem: The Username Formatter
// When users sign up for an app, they often type their email address with weird capitalization, or accidentally include spaces at the end.

// Your Task:
// Write a function named createUsername that takes one argument (an email string). It needs to do three things in order, and return the final cleaned-up string:

// Convert the whole email to lowercase.
// Remove the @domain.com part at the end (assume all emails end with exactly @domain.com).
// Add the number 99 to the end of the result.

function createUsername(email) {
   return email.toLowerCase().split("@")[0] ;
}
// Should print: "john.doe99"
console.log(createUsername("John.Doe@domain.com")); 

// Should print: "sarah_smith99"
console.log(createUsername("Sarah_Smith@domain.com")); 

// Should print: "coolguy999"  
console.log(createUsername("COOLGUY999@domain.com"));