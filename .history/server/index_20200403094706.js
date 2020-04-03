const express = require('express')
const controller = require('./controller')
const app = express()
const port = SERVER_PORT
app.use(express.json())
const massive = require('massive')
require('dotenv').config()
const {SERVER_PORT, CONNECTION_STRING} = process.env


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})


app.listen(SERVER_PORT, () => {
    console.log(`server listening on ${SERVER_PORT}`)
})