const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./router')
const cors = require('cors');

app.use(cors({ origin: '*', credentials :  true }));
app.use(bodyParser.json())
app.use(routes)

const http = require('http').createServer(app);

const socket = require("./utils/socket");
socket(http)

module.exports = http
