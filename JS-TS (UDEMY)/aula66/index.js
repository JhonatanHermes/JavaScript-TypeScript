/*
const num = [1, 22, 3, 44, 5, 66, 77,8, 99]
const numDobro = num.map(valor => valor * 2)

console.log(numDobro)
*/


const pessoas = [
    { nome: 'Amanda', idade: 32},
    { nome: 'Jhonatan', idade: 31 },
    { nome: 'Levi', idade: 2 },
    { nome: 'Izobell', idade: 3},
    { nome: 'Aki', idade:  7}
]

const nomes = pessoas.map(obj => obj.nome)

const idades = pessoas.map(obj => ({ idade: obj.idade}))

const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj }
    newObj.id = indice
    return newObj
})

console.log(nomes, idades, comIds)
