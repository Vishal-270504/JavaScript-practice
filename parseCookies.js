// Parse Cookie String into Object
// You are given a cookie string like "theme=dark; session=abc123; user=alex".Convert it into an object where each key maps to its value.

//     Task:
// Split the string into key - value pairs using "; "
// Loop through each pair
// Split each pair using "="
// Store in object and return

// Hint: Delimiter is "; " not "&".

function parseCookies(cookieStr) {
    let result={};
    let firstSplit=cookieStr.split("; ");
    for(let i=0;i<firstSplit.length;i++){
        let secondSplit=firstSplit[i].split("=");
        let key=secondSplit[0];
        let value=secondSplit[1];
        result[key]=value;
    }
    return result;
}

console.log(parseCookies("theme=dark; session=abc123"));
// Expected:
// { theme: "dark", session: "abc123" }

console.log(parseCookies("user=alex"));
// Expected:
// { user: "alex" }