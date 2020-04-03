const express = require('express')
const massive = require('massive')
require('dotenv').config()

const app = express()
app.use(express.json())


const {SERVER_PORT, CONNECTION_STRING} = process.env
const controller = require('./controller')


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})


app.listen(SERVER_PORT, () => {
    console.log(`server listening on ${SERVER_PORT}`)
})