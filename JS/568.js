const userInput = prompt("Enter a string:");
const charToCheck = prompt("Enter the character to check:");

if (userInput && charToCheck && charToCheck.length === 1) {
    const occurrences = userInput.split(charToCheck).length - 1;
    console.log(`The character '${charToCheck}' occurs ${occurrences} time(s) in the
    string.`);
} else {
    console.log("Please enter a valid string and a single character to check.");
}
