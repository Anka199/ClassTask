require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())
    //morgan
app.use(morgan('dev'))

// app.use('/products', productRoutes)
// app.use('/history', historyRoutes)
// app.use('/category', categoryRoutes)
const routes = require('./src/routes/index')

// use cors
app.use(cors())

// const midOne = (req, res, next) => {
//     console.log('It passes the midle one')
//     next()
// }
// app.use(midOne)

// app.get('/', (req, res) => {
//     res.send('Hello WORLD..!!!')
// })
// app.post('/post', (req, res) => {
//     const firstName = req.body.firstName
//     const lastName = req.body.lastName
//     res.send(`hai, nama saya ${firstName} ${lastName}`)
// })

app.use('/api/v1/', routes)
const PORT = process.env.PORT;
app.listen(PORT, () => { console.log(`Server Running at port :  ${PORT}`) })