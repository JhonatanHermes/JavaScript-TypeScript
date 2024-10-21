const express = require('express')
const route = express.Router()
const homecontroller = require('./src/controllers/homecontroller')
const contatocontroller = require('./src/controllers/contatocontroller')

route.get('/', homecontroller.paginaInicial)
route.post('/', homecontroller.trataPost)

route.get('/contato', contatocontroller.paginaInicial)

module.exports = route