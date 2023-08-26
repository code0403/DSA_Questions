function primeFactors(num) {
    const factors = {};
    let divisor = 2;

    while (num >= 2) {
        if (num % divisor === 0) {
            if (!factors[divisor]) {
                factors[divisor] = 1;
            } else {
                factors[divisor]++;
            }
            num /= divisor;
        } else {
            divisor++;
        }
    }

    return factors;
}

function calculateLCMAndHCFUsingPrimeFactors(num1, num2) {
    const primeFactors1 = primeFactors(num1);
    const primeFactors2 = primeFactors(num2);

    let lcmValue = 1;
    let hcfValue = 1;

    for (const factor in primeFactors1) {
        if (primeFactors2[factor]) {
            hcfValue *= Math.pow(parseInt(factor), Math.min(primeFactors1[factor], primeFactors2[factor]));
        }
        lcmValue *= Math.pow(parseInt(factor), Math.max(primeFactors1[factor], primeFactors2[factor]));
        delete primeFactors2[factor];
    }

    for (const factor in primeFactors2) {
        lcmValue *= Math.pow(parseInt(factor), primeFactors2[factor]);
    }

    console.log(`HCF of ${num1} and ${num2} is: ${hcfValue}`);
    console.log(`LCM of ${num1} and ${num2} is: ${lcmValue}`);
}

calculateLCMAndHCFUsingPrimeFactors(12, 18);
calculateLCMAndHCFUsingPrimeFactors(15, 25);
