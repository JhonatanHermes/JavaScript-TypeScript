const num = [1, 22, 3, 44, 5, 66, 77,8, 99]

const numPar = num
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor)

console.log(numPar)