const express = require('express')
const massive = require('massive')
require('dotenv').config()

const app = express()
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env
const controller = require('./controller')
const {addProduct, getInventory, deleteProduct} = require('./controller')

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db=> {
    app.set('db', db)
}).catch(err => console.log(err))


app.listen(SERVER_PORT, () => {
    console.log(`server listening on ${SERVER_PORT}`)
})

app.get('/api/inventory', getInventory)
app.post('/api/product', addProduct)
app.delete('/api/delete/:id', deleteProduct)