const getmonth = (callback) => {
    setTimeout(() => {
        let error = true
        let month = ['January', 'February', 'March', 'April', 'Mei', 'July', 'Agustus', 'September', 'October', 'November', 'Desember']
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry, Data not found', []))
        }
    }, 1000)
}
const funCallback = (er, data) => {
    if (er == null) {
        const result = data;
        result.map((item) => {
            console.log(item)
        })
    } else {
        console.log(er.message)
    }
}
getmonth(funCallback)