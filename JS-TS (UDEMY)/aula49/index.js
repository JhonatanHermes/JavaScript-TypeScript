// Declaração de função
falaOi()
function falaOi() {
    console.log('oi')
}

// First-class objects
const souUmDado = function() {
    console.log('Sou um dado.')
}
souUmDado()

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow()

// Dentro de um objeto
const obj = {
    falar() {
        consolr.log('Estou falando')
    }
}
obj.falar()