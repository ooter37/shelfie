const express = require('express')
const app = express()
app.use(express.json())
const controller = require('./controller')