//  Check palindrome for a Number;


function CheckPlaindrome(num){

    if (num < 0) {
        return false; // Negative numbers cannot be palindromes
    }

    let temp = num;
    let sum = 0;
    let rem;

    while(num > 0){
        rem = num % 10;
        sum = sum * 10 + rem;
        num = Math.floor(num / 10);

    }
   
    if(sum === temp){
        return true;
    }else{
        return false;
    }     
}   

let result = CheckPlaindrome(131)
console.log(result)


// 2nd Method

// In this method:

// We convert the number to a string using toString().
// We iterate through the digits from both ends of the string towards the center, comparing them.
// If at any point the digits don't match, we return false because it's not a palindrome.
// If we successfully iterate through the loop without finding any mismatched digits, 
// we return true because it's a palindrome.
// This method is simpler in terms of logic and doesn't require arithmetic operations to reverse the number. 
// It directly compares the individual digits from both ends of the number.

function isPalindrome(num) {
    if (num < 0) {
        return false; // Negative numbers cannot be palindromes
    }

    const numStr = num.toString();
    const length = numStr.length;

    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (numStr[i] !== numStr[length - 1 - i]) {
            return false; // If digits don't match, it's not a palindrome
        }
    }

    return true; // All digits match, it's a palindrome
}

let res = isPalindrome(1331);
console.log(res);

