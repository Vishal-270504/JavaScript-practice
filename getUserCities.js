// Title: The Nested User City Extractor
// Your backend stores user data with nested address objects.The frontend needs a list of cities for analytics, but the data is buried inside each user object.

// The Task:Loop through the array of users.Access the nested address.city property.Return a new array containing only the cities.
//     Hint: Access nested properties using object.property.property.

function getUserCities(users) {
    let newArray=[];
    for(let i=0;i<users.length;i++){
        let cities = users[i].address.city;
         newArray.push(cities)
    }
    return newArray;
}

console.log(getUserCities([
    { name: "John", address: { city: "Chennai" } },
    { name: "Jane", address: { city: "Mumbai" } }
]));
// Expected Output: ["Chennai", "Mumbai"]

console.log(getUserCities([
    { name: "A", address: { city: "Delhi" } },
    { name: "B", address: { city: "Pune" } }
]));
// Expected Output: ["Delhi", "Pune"]