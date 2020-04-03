const express = require('express')
const app = express()
app.use(express.json())
const controller = require('./controller')
const port = 4488

app.listen(port, () => {
    console.log(`server listening on ${port}`)
})