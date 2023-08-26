// Pattern Printing
// Description
// You are given a number, stored in a variable vith the name i
// Print the pattern as shown below.
// Ifthe value stored in u = 4. then the patter required vill be
// Input
// The first and the only line of each test case contains the value stored in the variable
// Output
// *
// **
// ***
// ****
// *****
// Print the patter as shown n the problem statement

function patternPrinting(N) {
    // Write code here
    let res;
    
    for(let i=0; i<N; i++){
        res = ""
       for(let j=0; j<=i; j++){
           res += "*"
       }
       console.log(res)
    }
}

patternPrinting(5)