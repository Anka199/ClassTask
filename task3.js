function segitiga(num) {
    if (num = "number") {
        for (let i = 1; i <= num; i++) {
            let str = ""
            for (let j = i; j <= num; j++) {
                str += j
            }
            console.log(str)
        }

    } else {
        console.log("Masukan Angka")
    }
}
segitiga(5)




for (let i = 1; i <= 5; i++) {
    let str = ""
    for (let j = i; j <= 5; j++) {
        str += j
    }
    console.log(str)
}