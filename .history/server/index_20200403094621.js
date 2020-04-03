const express = require('express')
const controller = require('./controller')
const app = express()
const port = SERVER_PORT
app.use(express.json())
const massive = require('massive')
require('dotenv').config()
const {CONNECTION_STRING, SERVER_PORT} = process.env


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})


app.listen(SERVER_PORT, () => {
    console.log(`server listening on ${SERVER_PORT}`)
})