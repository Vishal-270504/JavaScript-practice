// 3. Find Most Frequent Tag Across Posts
// You are given an array of posts, each containing a tags array.Find the tag that appears the most across all posts.

//     Task:
// Traverse all posts
// Traverse each post’s tags array
// Count frequency of each tag
// Return the tag with the highest count

function mostFrequentTag(posts) {
   let countMap={};
   let maxCount=0;
   let frequentTag=""; 
   for (let i=0;i<posts.length; i++){
    let tags =posts[i].tags;
    for(let j=0;j<tags.length;j++){
        let currentTag=tags[j];
        if(!countMap[currentTag]){
            countMap[currentTag]=1;
        }else{
            countMap[currentTag]=countMap[currentTag]+1;
        }
        if(countMap[currentTag]>maxCount){
            maxCount=countMap[currentTag];
            frequentTag=currentTag;
        }
    }
   }
   return frequentTag;
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