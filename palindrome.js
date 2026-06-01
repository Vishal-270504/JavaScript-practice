//Palindrome Number

function palindrome(num){
    let original =num.toString();
    let reverse =original.split('').reverse().join('');
    if(original===reverse){
        return true;
    }else{
        return false;
    }
}
console.log(palindrome((121)))