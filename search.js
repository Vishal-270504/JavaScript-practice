//Search Element in Array

function search(arr , target){
    for (let i=0;i<arr.length;i++){
        if(arr[i]===target)
            return i;
    }
}
console.log(search([1,2,3,4,5], 4));