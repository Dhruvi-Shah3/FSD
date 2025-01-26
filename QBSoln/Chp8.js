//525

const number = parseInt(prompt('Enter a positive integer: '));
let fact = 1;
for (i = 1; i <= number; i++) {
    fact *= i;
}
console.log(`The factorial of ${number} is ${fact}.`);

// 534

const number = prompt("Enter a positive integer");
const numberOfDigits = number.length;
let sum = 0;
let temp = number;
while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numberOfDigits;
    temp = parseInt(temp / 10); // convert float into integer
}
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}

// 550
let number = prompt("Enter the No : ");

if (number > 100) {
    document.write("Number Greater than 100")
} else {
    document.write("Number Less than 100")

}

//551

let number = prompt("Enter The 2 digit No : ");

if (number > 9) {
    let lastdigit = number % 10;
    let firstdigit = parseInt(number / 10);
    let sum = firstdigit * lastdigit
    document.write(sum)
} else {
    document.write("Number not 2 digit")
}

// 553

let cname = "India";
for (let i = 0; i < cname.length; i++) {
    if ((i + 1) % 2 == 0) {
        continue;
    } else {
        console.log(cname.charAt(i));
    }
}

//554

var count = 10;
for (let i = 0; i < 50; i++) {
    if (count > 0) {
        const number = i;
        let isPrime = true;
        if (number === 1) {
            console.log("1 is neither prime nor composite number.");
        }
        else if (number > 1) {

            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                document.write(number + "<br>");
                count = count - 1;
            }
        }
        else {
            console.log("The number is not a prime number.");
        }
    }
}
//555

let month = prompt("Enter Month")
let date = prompt("Enter The Date")

var d1 = new Date();
var d2 = new Date();

d1.setDate(date);
d1.setMonth(month);

one_day = 24 * 60 * 60 * 1000;

d1_time = d1.getTime();
d2_time = d2.getTime();

difference = Math.abs(d1_time - d2_time);

console.log("Days Left Are :  ", (Math.round(difference / one_day)));

//556

let a = [15, 25, 54, 36, 48, 14, 23]

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
        if (a[i] > a[j]) {
            temp = a[i]
            a[i] = a[j]
            a[j] = temp
        }
    }
}
console.log(a)

//557

let no = prompt("Number : ")

for (let i = 1; i <= no; i += 2) {
    if (i % 7 == 0) {
        console.log(i)
    }
}
//558

let price = 1000;
let taxRate = 50;
let balance = 5000;
const totalCost = price + (price * taxRate);
if (balance >= totalCost) {
    alert("Yes");
}
else {
    alert("No");
}

//560

let a = "MOM"

let b = a.split("").reverse().join("")

if (a == b) {
    console.log("Palindromic")
} else {
    console.log("Not")
}

//561

let rows = 5
for (let i = 0; i < rows; i++) {
    let rowPattern = "";
    for (let j = 0; j <= i; j++) {
        if ((i + j) % 2 === 0) {
            rowPattern += "1 ";
        } else {
            rowPattern += "0 ";
        }
    }
    console.log(rowPattern);
}

//562

let no1 = prompt("Enter The No ")
let no2 = prompt("Enter The No ")
let no3 = prompt("Enter The No ")

if (no1 > no2) {
    if (no1 > no3) {
        comsole.log("no1 is greatest")
    } else {
        console.log("no3 is greatest")
    }
} else {
    if (no2 > no3) {
        console.log("no2 is greatest")
    } else {
        console.log("no3 is greatest")
    }
}
//564

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

//565

let no = 7777;

function sum(no) {
    while (no > 0) {
        i = no % 10;
        sum += i
        n = n / 10

    }
    return sum;
}

//566

function is_perfect(number) {
    // Initialize a variable temp to store the sum of factors
    var temp = 0;
    // Iterate through numbers from 1 to half of the input number to find factors
    for (var i = 1; i <= number / 2; i++) {
        // Check if i is a factor of the input number
        if (number % i === 0) {
            // If i is a factor, add it to the sum
            temp += i;
        }
    }
    // Check if the sum of factors is equal to the original number and not zero
    if (temp === number && temp !== 0) {
        // If true, log that it is a perfect number
        console.log("It is a perfect number.");
    } else {
        // If false, log that it is not a perfect number
        console.log("It is not a perfect number.");
    }
}
// Call the is_perfect function with the input number 28
is_perfect(28);

//567

let userInput = "ajanata"
let char = "a"
let first = 0
let last = 0

console.log(userInput.indexOf('a'));
console.log(userInput.lastIndexOf('a'));

//568

const userInput = prompt("Enter a string:");
const charToCheck = prompt("Enter the character to check:");

if (userInput && charToCheck && charToCheck.length === 1) {
    const occurrences = userInput.split(charToCheck).length - 1;
    console.log(`The character '${charToCheck}' occurs ${occurrences} time(s) in the
    string.`);
} else {
    console.log("Please enter a valid string and a single character to check.");
}
