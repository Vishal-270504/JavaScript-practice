//prime number

function primeNumber(num){
    if(num<2){
        return false;
    }
    for (let i=2;i<=Math.sqrt(num);i++){
        if(num % i === 0){
            return false;
        }
    }
            return true;
}
console.log(primeNumber(8))






//odd or even code
// function oddEven(num){
//     if(num % 2===0){
//         return true
//     }
//     return false;
// }
// console.log(oddEven(8));