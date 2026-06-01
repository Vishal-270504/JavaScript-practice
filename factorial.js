//Factorial number - multiplication of all the numbers behind the number for example - num =3  then 3 x 2 x 1

function factorial(num){
    let res=1;
    for(let i=1;i<=num;i++){
        res= res*i;
    }
    return res;
}
console.log(factorial(3))