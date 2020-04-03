const express = require('express')
const controller = require('./controller')
const app = express()
const port = 4488
app.use(express.json())
const massive = require('massive')




app.listen(port, () => {
    console.log(`server listening on ${port}`)
})