// Global

/*
function retornaFuncao() {
    const nome = 'Jhonatan'
    return function() {
        return nome
    }
}

const funcao  = retornaFuncao()
console.log(funcao)
*/

function retornaFuncao(nome) {
    return function() {
        return nome
    }
}

const funcao  = retornaFuncao('Amanda')
const funcao2 = retornaFuncao('Jhonatan')
console.log(funcao)
console.log(funcao2)