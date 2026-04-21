// 2. Find First Non - Repeating Character
// Given a string, return the first character that appears only once.

//     Task:
// Count frequency of each character
// Loop again to find first with count = 1
// Return that character

function firstUniqueChar(str) {
    let countMap={};
    for(let i=0;i<str.length;i++){
        let char =str[i];
        if(!countMap[char]){
            countMap[char]=1;
        }else{
            countMap[char] = countMap[char]+1;
        }
    }
    for(let i=0;i<str.length;i++){
        let char = str[i];
        if (countMap[char]===1){
            return char;
        }
    }
    return null;
}

console.log(firstUniqueChar("aabbcde"));
// Expected: "c"