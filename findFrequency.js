//Find Frequency of Elements

function findFrequency(arr){
    let count={};
    for(let i=0;i<arr.length;i++){
        let num=arr[i];
        if(count[num]){
            count[num] ++;
        }else{
            count[num]=1;
        }
    }
    return count;
}
console.log(findFrequency([1,1,1,2,2,3,3,5,5,]))