//  Check palindrome for a Number;


function CheckPlaindrome(num){

    let temp = num;
    let sum = 0;
    let rem;

    while(num > 0){
        rem = num % 10;
        sum = sum * 10 + rem;
        num = Math.floor(num / 10);

    }
   
    if(sum == temp){
        return true;
    }else{
        return false;
    }     
}   

let res = CheckPlaindrome(131)
console.log(res)
