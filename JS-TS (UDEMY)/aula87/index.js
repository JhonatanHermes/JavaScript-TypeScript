function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(false)
            return
        }

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

/*
const promises = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
//    esperaAi(1000, 1000), // esse é o erro
]
*/

function baixaPagina() {
    const emCache = false // true

    if(emCache) {
        return Promise.resolve('Página em cahce') // reject
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('ERRO:', e))

//-----------------------------------
/*
Promise.race(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(erro) {
        console.log(erro)
    })
*/

//-----------------------------------
/*
Promise.all(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(erro) {
        console.log(erro)
    })
*/