// API Endpoint → User Purchase Summary (Validate + Group + Respond)
// You are building a backend API endpoint that receives a list of purchase logs (req.body). Each log contains userId and amount. 
// Some entries may be invalid (missing fields or negative amounts). You must validate input, aggregate total spend per user, and return a structured API response.

// Task:
// Read data from req.body
// Ignore invalid entries:
// missing userId
// missing amount
// amount <= 0
// Group valid entries by userId
// Sum total amount per user
// Return response:
// success: true
// data: [{ userId, totalAmount }]

function getUserPurchaseSummary(req, res) {
  let logs = req.body;

  let userMap = {};

  // Step 1: loop logs

  // Step 2: validate entry

  // Step 3: group + sum

  let result = [];

  // Step 4: convert map → array

  // Step 5: send response
  res.json({
    success: true,
    data: result,
  });
}

let req = {
  body: [
    { userId: 1, amount: 100 },
    { userId: 2, amount: 50 },
    { userId: 1, amount: 200 },
    { userId: 3, amount: -10 },
    { userId: null, amount: 40 },
  ],
};

let res = {
  json: function (data) {
    console.log(data);
  },
};

getUserPurchaseSummary(req, res);