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