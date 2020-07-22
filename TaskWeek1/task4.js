let data = {
    id: 1,
    name: "Leanne Graham",
    username: "BossDarling",
    email: "Sincere@april.biz",
    addres: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenbourgh",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let newData = {...data, name: "Anka Abdullah", hobby: "Running", email: "ankabdullah.bogor@gmail.com" }
console.log(newData)
const { street, city } = data.addres
console.log(street)
console.log(city)