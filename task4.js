let data = {
    id: 1,
    name: "Anka Abdullah",
    username: "BossDarling",
    email: "ankabdullah.bogor@gmail.com",
    addres: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenbourgh",
        zipcode: "92998-3874",
    },
    hobby: "Winninng the Batle",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

const { street, city } = data.addres
console.log(street)
console.log(city)