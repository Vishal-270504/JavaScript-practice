//Remove Duplicates from Array

function removeDuplicate(arr){
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDuplicate([1,1,1,22,2,3,6,6,7]));