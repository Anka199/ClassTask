const studentCheck = (student) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const studentData = ['Rizky', 'Eka', 'Rudi', 'Cahyono', 'Ossas']
            let cek = studentData.find((item) => {
                return item === student
            })
            if (cek) {
                resolve(student + " is a student of Arkademy")
            } else {
                reject(new Error('Name not found'))
            }
        }, 1000)
    })
}

let student = 'Eka'
studentCheck(student)
    .then(response => console.log(response))
    .catch(response => console.log(response))

const getstudent = async(student) => {
    try {
        let result = await studentCheck(student)
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}
getstudent('Rudi')

//////////////////////////////////////////////////////////////////////////////

const professionzakat = (salary) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const percentage = 2.5 / 100
            if (salary >= 6500000) {
                resolve("Zakat in this month : Rp" + (salary * percentage))
            } else {
                reject(new Error('Not obligated to pay zakat'))
            }
        }, 1000)
    })
}
professionzakat(7000000)
    .then(response => console.log(response))
    .catch(error => console.log(error.message))

const count = async(salary) => {
    try {
        let result = await professionzakat(salary)
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}
count(5000000)