const numeros = [1,2,3,4,5,6,7,8,9]

let i = 0
while (i < numeros.length) {
    let numero = numeros[i]

    if (numero === 2) {
        console.log('pulei o 2')
        i++
        continue
    }

    console.log(numero)

    if (numero === 7){
        console.log('achei o 7')
        i++
        break
    }

    i++

}



/*
const numeros = [1,2,3,4,5,6,7,8,9]

for (let numero of numeros) {
    if (numero === 2) {
        console.log('pulei o 2')
        continue
    }

    console.log(numero)

    if (numero === 7) {
        console.log('Achei o 7')
        break
    }
}
*/
