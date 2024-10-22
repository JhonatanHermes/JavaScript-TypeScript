exports.paginaInicial = (req, res, /*next*/) => {
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