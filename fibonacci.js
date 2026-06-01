//fibonacci number -every number is the sum of the two numbers before it. - example - 0,1,1,2,3,5....

function fibonacci(num){
    let a =0;
    let b=1;
    for (let i=0;i<num;i++){
        console.log(a);
        let temp=a+b;
        a=b;
        b=temp;
    }
}
console.log(fibonacci(5)); 