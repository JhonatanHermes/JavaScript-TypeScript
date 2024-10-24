const express = require('express')
const route = express.Router()
const homecontroller = require('./src/controllers/homecontroller')
const contatocontroller = require('./src/controllers/contatocontroller')

/*function meuMiddleware(req, res, next) {
    req.session = { nome: 'Jhonatan', sobrenome:'Moreira' }
    console.log('Passei no middleware.')
    next()
}*/

route.get('/', /*meuMiddleware,*/ homecontroller.paginaInicial, function(req, res, next) {
    //console;log('Ainda estou aqui.')
    //console.log(`'ultimo middleware' Olha o que tem na ${req.session.nome}`)
})
route.post('/', homecontroller.trataPost)

route.get('/contato', contatocontroller.paginaInicial)

module.exports = route