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