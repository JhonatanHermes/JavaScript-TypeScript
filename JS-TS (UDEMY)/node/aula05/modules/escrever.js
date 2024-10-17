const fs = require('fs').promises
//const path = require('path')

/*
const caminhoArquivo = path.resolve(__dirname,  '..' , 'teste.json')

const pessoas = [
    { nome: 'Izobell'},
    { nome: 'Levi'},
    { nome: 'Jhonatan'},
    { nome: 'Amanda'}
]
const json = JSON.stringify(pessoas, '', 2)
*/

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w'})
}



//fs.writeFile(caminhoArquivo, json, { flag: 'w'})

//fs.writeFile(caminhoArquivo, 'Frase 1\n', { flag: 'a'})