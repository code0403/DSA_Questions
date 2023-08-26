// Pattern Printing IV
// Description
// + You are given a number stored in a variable ith the name
// + You have to print the patter as shown below according to the value stored in
// + For example, consider the value stored in 1 = 5, then the required patter vil be
// Note : Please check for spaces
// Input
// « The first and the only ine of the input contains the value stored in the variable i
// Output

// + Printthe pattern as shown in the problem statement, according to the value stored in

// * * * * * 
//         *
//         *
//         *
// * * * * *

function patternPrinting4(N){
    //write code here
    let row = ""
    
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            
            if(i==0|| i==N-1||j == N-1){
                row += "*" + " "
            } else {
                row += " " + " "
            }
        }
        row += "\n"
    }
    console.log(row)
}

patternPrinting4(5)