const HomeModel = require('../models/homemodel')

HomeModel.create({
    titulo: 'Um título de testes',
    descricao: 'Uma descrição de testes.'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e))

exports.paginaInicial = (req, res, /*next*/) => {
    //req.flash('info', 'Olá mundo')
    //req.session.usuario = { nome: 'Jhonatan', logado:true }
    //console.log('Respondendo ao cliente')
    res.render('index')
    //console.log(`'paginaInicial'Olha o que tem na ${req.session.nome}`)
   // next()
   return
}

exports.trataPost = (req, res, /*next*/) => {
    res.send(req.body)
    return
}