const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 1000)
    })
}

let day = 'senin'
cekHariKerja(day)
    .then(response => console.log(response))
    .catch(response => console.log(response))

const getDay = async() => {
    try {
        let day = 'selasa'
        let result = await cekHariKerja(day)
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}
getDay()

//then adalah aksi dari promise, ketika promise terpenuhi atau resolve
//catch adalah aksi dari promise, ketika promise tidak terpenuhi atau reject

//trycatch