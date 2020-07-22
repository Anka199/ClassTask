let nilaiAwal = 5
let nilaiAkhir = 8
let dataArray = [12, 25, 10, 14, 17, 30, 8]

function output(data) {
    return data < nilaiAkhir && data > nilaiAwal
}
let hasil = dataArray.filter(output).sort(function(a, b) { return a - b })

if (hasil.length > 0 && nilaiAwal < nilaiAkhir) {
    if (dataArray.length >= 5) {
        console.log(hasil)
    } else {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5")
    }
} else {
    if (nilaiAwal >= nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    } else {
        console.log("jumlah angka dalam dataArray tidak ada")
    }
}