// 3. Extract Unique Words from Sentences
// You are given an array of sentences.Extract all unique words across all sentences.

//     Task:
// Loop through sentences
// Split each sentence into words
// Track unique words
// Return array of unique words

// Hint: Reuse seen - object pattern.

function uniqueWords(sentences) {
    let obj={};
    let result=[];

    for(let i=0;i<sentences.length;i++){
        let cut=sentences[i].split(" ");

        for(let j=0;j<cut.length;j++){
            let word=cut[j];
            if (!obj[word]){
                obj[word] = true;
                result.push(word)
            }
        }
    }
    return result;
}

console.log(uniqueWords([
    "hello world",
    "hello js"
]));
// Expected:
// ["hello", "world", "js"]