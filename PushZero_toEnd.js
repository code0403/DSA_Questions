// Push Zeroes to the End

// Description
// You are given an array A of size N. Your task is to mod the array, such that all the 2eroes are pushed to the end. The relative order of al the other elements should remain the sa
// me.

// Input
// The fist line contains T, the number of test cases.
// The first ine of each test case contains N, the size of the array.
// The next line contains N space separated integers denoting the elements of the array.

// Constraints
// 1<=T<=10
// 1<=N<=100
// 1<= Ail <= 100

// Output
// For each test case, prin the modified array on a single line, on a new line.


function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let t = Number(input[0]);
  
    
    for (let i = 1; i < input.length; i=i+2) {
      let N = Number(input[i]);
      let arr = input[i+1].split(" ").map(Number);
  
        moveZeroesToEnd(arr);
    }
  }
  
  function moveZeroesToEnd(arr) {
      
    let start = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[start] = arr[i];
        start++
      }
    }
    
    //console.log(start)
  
    for (let i = start; i < arr.length; i++) {
      arr[i] = 0;
    }
  
    console.log(arr.join(" "))
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
  