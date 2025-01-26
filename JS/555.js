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