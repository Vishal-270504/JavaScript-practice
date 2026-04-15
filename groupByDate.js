// 2. Group Transactions by Date
// You are given transactions with date and amount.Group them into an object where each date has an array of amounts.

//     Task:
// Loop through transactions
// Extract date
// Group amounts under each date
// Return object

// Hint: Same grouping pattern, but different key.

function groupByDate(transactions) {
    // create empty object result

    // loop through transactions
    // get current transaction
    // extract date and amount

    // check if date exists in result
    // if not, create empty array

    // push amount into result[date]

    // return result
}

console.log(groupByDate([
    { date: "2024-01-01", amount: 100 },
    { date: "2024-01-01", amount: 50 },
    { date: "2024-01-02", amount: 200 }
]));
// Expected:
// {
//   "2024-01-01": [100, 50],
//   "2024-01-02": [200]
// }