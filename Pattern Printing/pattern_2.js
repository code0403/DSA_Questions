// Patter Printing |

// Description
// + You are given an integer stored in a variable vith the name
// + You have to print the following pattern according to the value stored in
// + For example, consider the value stored in = 5, then the required output will be

// ote + Please check for spaces

// Input
// + The first and the onl line ofthe input contains the value stored in

// Output
// + Pint the pattern as shown in the problem statement

// * * * * 
// *
// *
// * * * *

function patternPrintingI(N) {
    let row = ""
    
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            
            if(i==0 || i==N-1 || j==0){
                row += "* "
            } 
        }
        
        row += "\n"
    }
    
    console.log(row)
}
patternPrintingI(4);