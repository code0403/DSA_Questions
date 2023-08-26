// Selection Sort Problem

function solve(N,arr){
    //write code here
    
  
    for (let i = 0; i < N - 1; i++) {
       let minIndex = i;

        for (let j = i + 1; j < N; j++) {
            if (arr[j] < arr[minIndex]) {
              minIndex = j;
            }
        }
        
        
        if (minIndex !== i) {
          let temp = arr[i];
          arr[i] = arr[minIndex];
          arr[minIndex] = temp;
        }
    }
    
  console.log(arr.join(" "));
}
