// Fibonacci-Recursion

// Write a Program that calculates the n-th fibonacce Numbers when provided with n.


function runProgram(input) {
    // Write code here
    
    let N = Number(input)
    let res = NthFibonacci(N)
    console.log(res)
  }
  
  function NthFibonacci(N){
      if (N <= 0) {
      return 0;
    } else if (N === 1) {
      return 1;
    } else {
      return NthFibonacci(N - 1) + NthFibonacci(N - 2);
    }
  }
  
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  