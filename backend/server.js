const express = require('express')
const dotenv = require('dotenv').config()
const colots = require('colors')
const { customError } = require('./middleware/errorMiddleware')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req, res) => {
    res.status(200).send('Welcome to homepage')
})


app.use('/api/user', require('./routes/userRoutes'))

//Custom Error Handler
app.use(customError)


app.listen(process.env.PORT, process.env.HOST,() => {
    console.log(`Server running on port ${process.env.PORT}`.blue.underline)
})