const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./router')
const cors = require('cors');

app.use(cors({ origin: '*', credentials :  true }));
app.use(bodyParser.json())
app.use(routes)

module.exports = app
