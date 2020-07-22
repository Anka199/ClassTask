let matematika = 80
let bahasaIndo = null
let bahasaInggris = 89
let ipa = 69
let average = (matematika + bahasaIndo + bahasaInggris + ipa) / 4

if (matematika, bahasaIndo, bahasaInggris, ipa == 'number') {
    if (average >= 90) {
        console.log("Rata-rata :" + average + ". Grade : A");
    } else if (average >= 80) {
        console.log("Rata-rata :" + average + ". Grade : B");
    } else if (average >= 70) {
        console.log("Rata-rata :" + average + ". Grade : C");
    } else if (average >= 60) {
        console.log("Rata-rata :" + average + ". Grade : D");
    } else {
        console.log("Rata-rata :" + average + ". Grade : E");
    }
} else {
    console.log("Data Tidak Valid")
}