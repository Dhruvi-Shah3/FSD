// To reverse Digits of numbers 
function reverseDigits(num) {
    let rev = 0;
    while (num > 0) {
        rev = rev * 10 + num % 10;
        num = parseInt(num / 10, 10);
    }
    return rev;
}

// To square number 
function square(num) {
    return (num * num);
}

// To check Adam Number 
function checkAdamNumber(num) {
    // Square first number and square reverse digits of second number 
    let a = square(num);
    let b = square(reverseDigits(num));

    // If reverse of b equals a then given number is Adam number 
    if (a == reverseDigits(b)) {
        document.write(num + " is Adam Number <br>");
    }
}

for (i = 0; i < 100; i++) {
    checkAdamNumber(i)
}