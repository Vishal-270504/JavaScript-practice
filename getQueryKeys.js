// Title: The Query Key Extractor
// A frontend router receives query strings, but sometimes it only needs the parameter names(keys) for validation logic.

// The Task:
// Split the query string into key - value pairs.Extract only the keys(before "=").Return an array of keys.
//     Hint: Use.split("&") and.split("=").

function getQueryKeys(query) {
    let newArr=[];
    
    let splitone=[]
    splitone=query.split("&");

    for (let i = 0; i < splitone.length; i++) {
        let two = splitone[i].split("=");
        newArr.push(two[0]);
    }
    return newArr;
}


console.log(getQueryKeys("name=John&age=25&city=NY"));
// Expected Output: ["name", "age", "city"]

console.log(getQueryKeys("role=admin&active=true"));
// Expected Output: ["role", "active"]