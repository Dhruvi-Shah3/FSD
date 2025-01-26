let cname = "India";
for (let i = 0; i < cname.length; i++) {
    if ((i+1) % 2 == 0) {
        continue;
    } else {
        console.log(cname.charAt(i));
    }
}