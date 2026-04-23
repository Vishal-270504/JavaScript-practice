// 3. Comments + Users → Enriched Tree(Merge + Tree)
// You are given comments and users separately.Attach user name to each comment and build the comment tree.

//     Task:
// Build user lookup map(id → name)
// Add name into each comment
// Build parent - child tree
// Return root comments

function buildEnrichedTree(comments, users) {

}

console.log(buildEnrichedTree(
    [
        { id: 1, parentId: null, userId: 1 },
        { id: 2, parentId: 1, userId: 2 }
    ],
    [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ]
));

// Expected:
// [
//   {
//     id: 1,
//     parentId: null,
//     userId: 1,
//     name: "Alice",
//     children: [
//       {
//         id: 2,
//         parentId: 1,
//         userId: 2,
//         name: "Bob",
//         children: []
//       }
//     ]
//   }
// ]