// 3. Find Most Frequent Tag Across Posts
// You are given an array of posts, each containing a tags array.Find the tag that appears the most across all posts.

//     Task:
// Traverse all posts
// Traverse each post’s tags array
// Count frequency of each tag
// Return the tag with the highest count

function mostFrequentTag(posts) {
    // your code
}

console.log(mostFrequentTag([
    { tags: ["js", "node"] },
    { tags: ["js", "react"] },
    { tags: ["node", "js"] }
]));
// Expected:
// "js"

console.log(mostFrequentTag([
    { tags: ["a"] },
    { tags: ["b"] }
]));
// Expected:
// "a" OR "b"