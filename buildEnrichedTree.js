// 3. Comments + Users → Enriched Tree(Merge + Tree)
// You are given comments and users separately.Attach user name to each comment and build the comment tree.

//     Task:
// Build user lookup map(id → name)
// Add name into each comment
// Build parent - child tree
// Return root comments

function buildEnrichedTree(comments, users) {

    let userMap = {}

    for (let i = 0; i < users.length; i++) {
        let user = users[i]
        let userId = user.id
        let userName = user.name

        userMap[userId] = userName
    }

    let commentMap = {}

    for (let i = 0; i < comments.length; i++) {
        let comment = comments[i]

        let userId = comment.userId
        let name = userMap[userId]

        comment.name = name
        comment.children = []

        let commentId = comment.id
        commentMap[commentId] = comment
    }

    let result = []

    for (let i = 0; i < comments.length; i++) {
        let comment = comments[i]

        let parentId = comment.parentId

        if (parentId === null) {
            result.push(comment)
        } else {
            let parent = commentMap[parentId]
            parent.children.push(comment)
        }
    }

    return result
}

let comments = [
    { id: 1, parentId: null, userId: 1 },
    { id: 2, parentId: 1, userId: 2 }
]

let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
]

console.log(JSON.stringify(buildEnrichedTree(comments, users), null, 2));

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