const express = require('express')
const route = express.Router()
const homecontroller = require('./controllers/homecontroller')
const contatocontroller = require('./controllers/contatocontroller')

route.get('/', homecontroller.paginaInicial)
route.post('/', homecontroller.trataPost)

route.get('/contato', contatocontroller.paginaInicial)

module.exports = route