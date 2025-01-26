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
