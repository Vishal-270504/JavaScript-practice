//Sum of Array Elements

function sumArray(arr){
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(sumArray([1,2,3,6,5,4]))