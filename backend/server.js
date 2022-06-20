const express = require('express')
const dotenv = require('dotenv').config()
const colots = require('colors')
const app = express()


app.get('/',(req, res) => {
    res.status(200).send('Welcome to homepage')
})





app.listen(process.env.PORT, process.env.HOST,() => {
    console.log(`Server running on port ${process.env.PORT}`.blue.underline)
})