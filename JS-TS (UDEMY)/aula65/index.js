/*
const num = [1, 22, 3, 44, 5, 66, 77,8, 99]
const numFiltrados = num.filter(valor => valor > 10)
console.log(numFiltrados)
*/


const pessoas = [
    { nome: 'Amanda', idade: 32},
    { nome: 'Jhonatan', idade: 31 },
    { nome: 'Levi', idade: 2 },
    { nome: 'Izobell', idade: 3},
    { nome: 'Aki', idade:  7}
]

const pessoasNomeG = pessoas.filter(obj => obj.nome.length >= 5)

const pessoasNovas = pessoas.filter(obj => obj.idade < 15)

const TerminaA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))

console.log(pessoasNomeG, pessoasNovas, TerminaA)