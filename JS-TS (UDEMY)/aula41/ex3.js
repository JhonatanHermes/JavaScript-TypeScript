function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
    if (typeof numero !== 'number') return NaN
    if (typeof numero !== 'number') return NaN
    if (numero % 3 === 0) return 'Fizz'
    if (numero % 5 === 0) return 'Buzz'
    return numero 
}

console.log('a', fizzBuzz('a'))
for (let i =o; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}