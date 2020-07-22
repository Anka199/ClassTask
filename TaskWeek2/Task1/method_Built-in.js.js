// toFixed(), menentukan jumlah angka di belakang koma
let x = 9.656;
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toFixed(6));

//tostring(), mengubah objek menjadi string
let a = 300
let b = 400
console.log(a.toString() + b)

//sort()mengurutkan objek
let arr = ["orange", "mango", "banana", "sugar"]
let sorted = arr.sort()
console.log(sorted)

//filter()menyaring objek
let ages = [32, 33, 16, 40]

function checkAdult(age) {
    return age >= 18
}
console.log(ages.filter(checkAdult))

//join() Mereturn sebuah string setelah menggabungkan semua elemen array
let fruit1 = ["Banana", "Orange", "Apple", "Mango"]
let print = fruit1.join()
console.log(print)

//slice() memilih elemen dalam array
namaArray = ["Banana", "Orange", "Apple", "Mango"]
console.log(namaArray.slice(1, 3))

//reverse() Membalik urutan elemen dalam array
let array = [0, 1, 2, 3].reverse()
console.log(array)


//push() Menambahkan item baru ke array
let fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.push("Kiwi")
console.log(fruits)

//length()menhitung panjang tipe data
let str = "This is string"
console.log("str.length is:" + str.length)

//toUpperCase() mengubah huruf menjadi kapital
let string = "Apples are round, and Apples are Juicy.";
console.log(string.toUpperCase());