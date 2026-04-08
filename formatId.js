// The Problem: The ID Formatter
// You are given an array of user IDs.They are a mix of uppercase and lowercase letters.Your task is to clean them up:

// Make every ID completely uppercase.
//     Add "_USER" to the end of every ID.
// The Catch: If the original ID was exactly "ADMIN"(all caps already), skip it.Do not add it to the final array.

function formatIds(ids) {
    let newArray=[];
    for(let i=0;i<ids.length;i++){
        if(ids[i]==="ADMIN"){
            continue;
        }else{
            let convertion =  ids[i].toUpperCase() + "_USER";
            newArray.push(convertion);
        }
    }
    return newArray;
}

// Should print: ["JOHN_USER", "JANE_USER"] ("ADMIN" is skipped)
console.log(formatIds(["john", "ADMIN", "jane"]));

// Should print: ["ALEX_USER"]
console.log(formatIds(["ADMIN", "alex"])); 