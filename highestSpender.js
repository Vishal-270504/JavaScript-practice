// Find User with Highest Total Spending
// You are given transactions with userId and amount.Find which user spent the most total money.

//     Task:
// Loop through transactions
// Sum amount per user
// Track highest total
// Return userId

// Hint: Combine frequency + max tracking.

function highestSpender(transactions) {
   let obj={};
   let maxUser="";
   let maxAmount=0;
   for(let i=0;i<transactions.length;i++){
    let id=transactions[i].userId;
    let money=transactions[i].amount;
    if(!obj[id]){
        obj[id]=0;
    }
    obj[id]=obj[id]+money;
    if(obj[id]>maxAmount){
        maxAmount = obj[id];
        maxUser=id;
    }
   }
   return maxUser;
}

console.log(highestSpender([
    { userId: "u1", amount: 50 },
    { userId: "u2", amount: 200 },
    { userId: "u1", amount: 100 }
]));
// Expected:
// "u1"
