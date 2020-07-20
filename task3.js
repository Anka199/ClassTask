function segitiga(num) {
    if (typeof num === 'number') {
        for (let i = 0; i <= num; i++) {
            let str = ""
            for (let j = i + 1; j <= num; j++) {
                str += j - i
            }
            console.log(str)
        }

    } else {
        console.log("Masukan Angka")
    }
}
segitiga(5)
