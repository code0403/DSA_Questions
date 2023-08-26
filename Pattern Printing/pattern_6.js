// Pattern Printing VI 
// f— |
// Given an integer u , and a pattem. Print the pattern as given in the sample 0. |
// Note : Please check for spaces. |
// [0
// The first and the only ine of the input contains the value of . |

// |

// Constraints |
// 1<zn<=25 |
// Output |
// Print the patter as given in the sample est case. |

// * * * * *
// * * * *  
// * * *
// * *
// *

function patternprinting6(N){
    for(let i=N-1; i>=0; i--){
     let row = "";
     for(let j=0; j<=N-1; j++){
         if(j<i){
           row += "*" + " ";   
         } else if(i==j){
              row += "*";
         } else {
              row += " " + " ";
         }
        
     }
     console.log(row);
   }
}

patternprinting6(5)