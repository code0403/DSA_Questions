// Pattern Printing III

// Description
// + You are given an integer stored in a variable with the name
// + You have to print the folowing patter according to the value stored in
// + For example, consider the value stored in 1 = 5, then the required output will be

// Note : Please check for spaces

// Input
// + The first and the only ine of the input contains the value stored in

// Output
// + Print the patter as shown n the problem statement

// *       * 
// *       *
// *       *
// *       *
// * * * * *


function patternPrintingIII(N) {
    // Write code here
    
    let row = ""
    
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            
            if(j==0 || j == N-1|| i==N-1){
                row += "*" + " "
            } else {
                row += " " + " "
            }
        }
        
        row += "\n"
    }
    
    console.log(row)
}

patternPrintingIII(5)
