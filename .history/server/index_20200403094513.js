const express = require('express')
const controller = require('./controller')
const app = express()
const port = 4488
app.use(express.json())
const massive = require('massive')

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})


app.listen(port, () => {
    console.log(`server listening on ${port}`)
})