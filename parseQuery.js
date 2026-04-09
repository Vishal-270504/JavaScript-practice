// Title: The API Query Parser
// On a Node.js server, you receive a query string from a URL like "name=John&age=25&city=NY".You need to convert this string into a usable object so the backend can process filters.

// The Task:
// Split the string into key - value pairs using "&".For each pair, split again using "=" to separate key and value.Build and return an object with these keys and values.
//     Hint: Use.split() twice.

function parseQuery(query) {
    let obj={};
   
    let splitOne = query.split("&"); 
    for (let i=0;i<splitOne.length;i++){
        let splitTwo = splitOne[i].split("=");
        let key=splitTwo[0];
        let value=splitTwo[1];
        obj[key]=value;
    }
    return obj;
}

console.log(parseQuery("name=John&age=25&city=NY"));
// Expected Output: { name: "John", age: "25", city: "NY" }

console.log(parseQuery("role=admin&active=true"));
// Expected Output: { role: "admin", active: "true" }