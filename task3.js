function segitiga(num) {
    if (typeof num === 'number') {
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