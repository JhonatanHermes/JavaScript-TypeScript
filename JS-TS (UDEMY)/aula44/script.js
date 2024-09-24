/*
try {
    console.log(naoexisto)
} catch (err) {
    console.log('isso não existe mesmo')
}
*/

function soma(x, y) {
    if (typeof x !== 'number' ||typeof y !== 'number') {
        throw new Error ('x e y precisam ser números')
    }
    return x + y
}

try {
    console.log(soma(1, 2))
    console.log(soma('1', 2))
} catch (error) {
   // console.log(error)
   console.log('Algo deu errado')
}