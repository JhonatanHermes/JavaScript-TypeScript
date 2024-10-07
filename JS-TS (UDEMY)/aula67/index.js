/*
const num = [1, 22, 3, 44, 5, 66, 77,8, 99]
const total = num.reduce(function(acumulador, valor) {
    acumulador += valor
    return acumulador
}, 0)
console.log(total)
*/


const pessoas = [
    { nome: 'Amanda', idade: 32},
    { nome: 'Jhonatan', idade: 31 },
    { nome: 'Levi', idade: 2 },
    { nome: 'Izobell', idade: 3},
    { nome: 'Aki', idade:  7}
]

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})

console.log(maisVelha)