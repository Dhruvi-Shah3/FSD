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