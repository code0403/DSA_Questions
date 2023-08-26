// Product of array except self

// Sample Input
// 2
// 4
// 1 2 3 4
// 5
// -1 1 0 3 -3

// Sample Ouput
// 24 12 8 6
// 0 0 9 0 0

function runProgram(input){
    // Write Code Here
    input = input.trim().split("\n")
    let t = +input[0];
    
    let n;
    let arr;
    for(let i=1; i<input.length; i=i+2){
        n = +input[i];
        arr = input[i+1].trim().split(" ").map(Number);
       // console.log(n, arr);
        
        ProductofArray(n,arr);
    }
 }
     function ProductofArray(n,arr){
         
         let Lprod = 1;
         let Rprod = 1;
         let output = new Array(n);
         
         for(let i=0; i<n; i++){
             output[i] = Lprod;
             Lprod *= arr[i];
         }
         
         for(let i=n-1; i>=0; i--){
             output[i] *= Rprod;
             Rprod *= arr[i];
         }
        // console.log(output)
         console.log(output.join(" "));
     }
     
     
 if (process.env.USERNAME === "") {
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


// Description

// Given an integer array nums, return an array answer such that answer{l] is equal to the product of all 
// the elements of nums except nums{i.
// ‘You must write an algorithm that runs in O(n) time and without using the division operation.
// (Can you solve the problem in O(1) extra space complexity? 
// (The output array does not count as extra space for space complexity analysis.)


// Input
// Input Format

// The fst ne of input contains an integer t the number of testcases.
// The following 2*t lines contain the description of the t testcases.
// LS ET TT ——— ep ————
// The second ine of each testcase contains space-separated integers nas{1], nums(11, msl]. russ]


// Constraints
// Clete
// + 2c mms tengtn <= 0
// * -30 <= nums[i] <= 3


// Output
// Output Format
// For each testcase output the n integers, where n is the size of the array of that testcase, where the ith (1<=i<=n) 
// integer is the product of the array except for the ith element