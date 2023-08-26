// Pattern Printing V
// Description
// Given an integer u , and a pattem. Print the pattern as given in the sample VO.
// Note : Please check or spaces
// Input
// ‘The first and the only line of the input contains the value of N
// Constraints
// 1emne=2s
// Output
// Print the pattern as given in the sample test case.

// * * * * * 
// *       *
// *       *
// *       *
// *       *

function patterPrinting5(N){
    
    let row = "";
    
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            
            if(i==0  || j==0 || j==N-1){
                row += "*" + " "
            } else {
                row += " " + " "
            }
        }
        row += "\n"
    }
    
    console.log(row)
}

patterPrinting5(5)