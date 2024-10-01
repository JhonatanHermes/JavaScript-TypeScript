function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))

/*
function duplica(n) {
    return n * 2
}

function triplica(n) {
    return n * 3
}

function quadriplica(n) {
    return n * 4
}

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))
*/

//----------------------------------

/*
function soma(a, b) {
    return a + b
}
*/

/*
function soma2(a ,b) {
    console.log(a + b)
}

soma(5, 2)
*/ 

/*
document.addEventListener('click', function() {
    document.body.style.background = 'red'
})
*/

/*
function pessoa1(nome , sobrenome){
    return ( nome, sobrenome)
}

const p1 = pessoa1('Amanda' , 'Moreira')
const p2 = {
    nome: 'Jhonatan',
    sobrenome: 'Lucco'
}

console.log(typeof p1)
console.log(typeof p2)
*/

/*
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + '' + resto
    }
    return falaResto
}

const olamundo = falaFrase('olá')
console.log(olamundo('mundo'))
*/