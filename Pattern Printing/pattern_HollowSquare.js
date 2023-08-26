// Pattern Hollow Square 

// * * * * * 
// *       * 
// *       *
// *       *
// * * * * *


function patternPrinting(N) {
    // Write code here
   
  for (let i = 0; i <= N-1; i++) {
    let row = "";
    for (let j = 0; j <= N-1; j++) {
      if (i === 0 || i === N-1 || j === 0 || j === N-1) {
        row += "* "; 
      } else {
        row += " " + " "; 
      }
    }
    console.log(row);
  }

}

patternPrinting(5)
