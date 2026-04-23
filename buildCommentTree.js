// 3. Build Comment Tree(Parent → Children)
// You are given flat comments with id and parentId.Build a structure where each parent contains its child comments.

//     Task:
// Create a map of all comments by id
// Loop again to assign children
// Root comments have parentId = null
// Return array of root comments

function buildCommentTree(comments) {

}

console.log(buildCommentTree([
    { id: 1, parentId: null },
    { id: 2, parentId: 1 },
    { id: 3, parentId: 1 }
]));
// Expected:
// [
//   {
//     id: 1,
//     parentId: null,
//     children: [
//       { id: 2, parentId: 1, children: [] },
//       { id: 3, parentId: 1, children: [] }
//     ]
//   }
// ]