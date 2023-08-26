// Three Max, Three Min Please

function threeMaxThreeMin(N,arr){
    //write code here
    
    arr.sort((a, b) =>  a-b)
    //console.log(arr)
    
    let max = [];
    let maxCount =0
    
    for(i=0; i<arr.length; i++){
        
        if(!max.includes(arr[i])){
            max.push(arr[i])
            maxCount++
        }
        
        if(maxCount >= 3){
            break
        }
    }
    
    if(max.length < 3){
        console.log("Not Possible")
    } else {
        console.log(max.join(" "))
    }
    
    
    
    
    let min = []
    let minCount = 0;
    
    for(let i=arr.length-1; i>=0; i--){
        if(!min.includes(arr[i])){
            min.push(arr[i])
            minCount++
        }
        
        if(minCount >= 3){
            break
        }
    }
    
    min.sort((a,b) => a-b)
    
    if(min.length < 3){
        console.log("Not Possible")
    } else {
        console.log(min.join(" "))
    }
    
}




// Description
// Given an array of N integers, print the 3 distinct maximum and 3 distinct minimum elements of the array.

// Input

// Input Format
// 8
// 1 2 3 4 2 1 6 5

// First line contains N
// Second line contains N space separated integers which are elements of the array.

// Output Format
// 1 2 3
// 4 5 6

// Constraints
// 0<=N<=100 (Please note that N can be 0 as well)
// The values present in the array can be negative as well

// Output
// In the first line, print the least 3 values (sorted) present in the array.
// nthe second ine, print the top 3 values (sorted) present in the array.
// In case there are not 3 min value, print “Not Possible” (without quotes)
// In case there are not 3 max value, print “Not Possible” (without quotes).
// So, according to the above statements, if both are not possible, you have to print "Not Possible” twice (once for each)
// In the array, if you found out only 2 distinct min and 2 distinct max elements then also printNot Possibletwice [ one for minimum and other for maximum]