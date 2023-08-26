
// You are given a number stored in a variable with the name num .

function identifyPrime(num) {
    // Write code here
    
    let count = 0;
    
    for(let i=1; i<num; i++){
        if(num % i == 0){
            count++
        }
    }
    // console.log(count)
    
    count > 1 ? console.log("No") : console.log("Yes")
}



// Description 
// You are given a number stored in 2 variable with the name num 

//  If the value stored in nua, is a prime number print ves , else print No

// Note : A prine number is a nusber, that is divisible by only 1 and the number itself 

// Input 
// The first and the only line of the input contains the value stored in pus 

// Output
//  Ifthe value stored in nus ,s a prime number print ves , else print io 


