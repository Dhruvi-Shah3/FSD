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
    if ((i+1) % 2 == 0) {
        continue;
    } else {
        console.log(cname.charAt(i));
    }
}

//556

let a = [15, 25, 54, 36, 48, 14, 23]

for (let i = 0; i < a.length; i++){
    for (let j = 0; j < a.length; j++){
        if (a[i] > a[j]) {
            temp = a[i]
            a[i] = a[j]
            a[j]=temp
        }
    }
}
console.log(a)

//557

let no = prompt("Number : ")

for (let i = 1; i <= no; i += 2){
    if (i % 7 == 0) {
        console.log(i)
    }
}

//560

let a = "MOM"

let b = a.split("").reverse().join("")

if (a == b) {
    console.log("Palindromic")
} else {
    console.log("Not")
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

