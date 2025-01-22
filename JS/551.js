let number = prompt("Enter The 2 digit No : ");

if (number > 9) {
    let lastdigit = number % 10;
    let firstdigit = parseInt(number / 10);
    let sum = firstdigit * lastdigit
    document.write(sum)
} else {
    document.write("Number not 2 digit")
}