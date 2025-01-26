const number = parseInt(prompt('Enter a positive integer: '));
let fact = 1;
 for (i = 1; i <= number; i++) {
 fact *= i;
 }
 console.log(`The factorial of ${number} is ${fact}.`);
