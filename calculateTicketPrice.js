//The Problem: The Movie Ticket Calculator
// A movie theater charges different ticket prices based on age:

// Children (12 and under): $5
// Seniors (65 and older): $7
// Everyone else (Adults): $12
// Write a JavaScript function named calculateTicketPrice that takes one argument (the person's age) and returns the correct ticket price

function calculateTicketPrice(age) {
   if(age <=12){
   return 5;
   }
   else if (age>=65){
    return 7;
   }else{
     return 12;
   }
   
}
console.log(calculateTicketPrice(1));  // Should print: 5
console.log(calculateTicketPrice(25));  // Should print: 12
console.log(calculateTicketPrice(70));  // Should print: 7