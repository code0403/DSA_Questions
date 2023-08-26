// Pasha and Shasha and valid anagram

// Sample Input 
// 2
// abcd
// dcab
// aa
// aaa

// Sample Output
// True
// False

function validAnagram(str1, str2) {
    
    if (str1.length !== str2.length) {
      console.log("False");
      return
    }

    let obj1 = {};
    let obj2 = {};
  
    for (let char of str1) {
      obj1[char] = (obj1[char] || 0) + 1;
    }
  
    for (let char of str2) {
      obj2[char] = (obj2[char] || 0) + 1;
    }
    
    let flag = "True";
    for (let char in obj1) {
      if (obj1[char] !== obj2[char]) {
        flag = "False"
        break;
      }
    }
    console.log(flag)
}
  

// Description

// Pasha and Shasha are fighting over two strings, whether they are anagrams or nat, help them
// Input

// 1esTe=t0

// next 2T lines consists of strings $1 and s2 fo each test case

// 1 <= S1 <= 100000
// 1 <= S2 <= 100000

// Output

// output True if they are anagrams eise False;