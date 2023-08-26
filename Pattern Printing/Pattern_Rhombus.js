// Pattern Printing - Rhombus

//           0 
//         0 1 0 
//       0 1 2 1 0
//     0 1 2 3 2 1 0
//   0 1 2 3 4 3 2 1 0
// 0 1 2 3 4 5 4 3 2 1 0
//   0 1 2 3 4 3 2 1 0
//     0 1 2 3 2 1 0
//       0 1 2 1 0
//         0 1 0
//           0

function patternRohmbus(input) {
    // Write code here
    
    let N = Number(input)
  //   console.log(N)
    
    for (let i = 0; i <= N; i++) {
      let row = "";
      for (let j = 1; j <= N - i; j++) {
        row += "  "; 
      }
      for (let k = 0; k <= i; k++) {
        row += k + " ";
      }
      for (let l = i - 1; l >= 0; l--) {
        row += l + " ";
      }
      console.log(row);
    }
  
    for (let i = N - 1; i >= 0; i--) {
      let row = "";
      for (let j = 1; j <= N - i; j++) {
        row += "  "; 
      }
      for (let k = 0; k <= i; k++) {
        row += k + " ";
      }
      for (let l = i - 1; l >= 0; l--) {
        row += l + " ";
      }
      console.log(row);
    }
  
}

patternRohmbus(5)