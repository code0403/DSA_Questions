// program to calculate the Least Common Multiple (LCM) and Highest Common Factor (HCF) of 
// two numbers using the Euclidean algorithm:

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function calculateLCMAndHCF(num1, num2) {
    const hcf = gcd(num1, num2);
    const lcmValue = lcm(num1, num2);

    console.log(`HCF of ${num1} and ${num2} is: ${hcf}`);
    console.log(`LCM of ${num1} and ${num2} is: ${lcmValue}`);
}

calculateLCMAndHCF(12, 18);
calculateLCMAndHCF(15, 25);


// In this program:

// The gcd function calculates the Greatest Common Divisor (GCD) of two numbers 
// using the Euclidean algorithm recursively. The base case is when the second number becomes 0, 
// and in that case, the first number is the GCD.

// The lcm function calculates the Least Common Multiple (LCM) of two numbers using the formula (a * b) / gcd(a, b).

// The calculateLCMAndHCF function takes two numbers as input, calculates their HCF using the gcd function,
//  and then calculates the LCM using the lcm function. It then prints the results for both HCF and LCM.

// You can call the calculateLCMAndHCF function with different pairs of numbers to calculate their HCF and LCM.
