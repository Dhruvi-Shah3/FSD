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