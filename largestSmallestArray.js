//find the largest and smallest number in an array

function largestSmallestArray(arr){
//     let smallest=arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<smallest){
//             smallest=arr[i];
//         }
//     }
//     return smallest;


        let largest=arr[0];
        for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest;
}
console.log(largestSmallestArray([1,2,3,4,5]))

