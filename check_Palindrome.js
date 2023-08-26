// Check Palindrome 

function checkPalindrome(N, str) {
    //write code here
    
    str = str.join("")
    
    let rev = "";
    
    for(let i=str.length-1; i>=0; i--){
        rev += str[i]
    }
    // console.log(rev)
    // console.log(str.join(""))
    str === rev ? console.log("Yes") : console.log("No")
  
}



// Description |
// + You are given a string, whose size is stored in a variable wih the name

// + The sting is stored in a variable withthe name str-

// + Print ves. if the sting is a palindrome, else print vo |

// « For example, consider the value stored in str ~ “nanan” if we reverse the siring, the reversed string will be the same as the original string, hence the string is considered as
// palindrome, therefore, the output s Yes. |

// Note : A palindrome is 3 string which is the sane read forwards or backwards

// |

// Input |
// + The first line of the input contains the value stored in

// «+ The next line of the input contains the value stored in str |
// Output |
// « Print ves. if the sting stored in str is a palindrome, else print 1 |