function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros){
        console.log(numero)
        if (operador === '+')acumulador += numero
        if (operador === '-')acumulador -= numero
        if (operador === '*')acumulador *= numero
        if (operador === '/')acumulador /= numero
    }
    console.log(acumulador)
}
conta('+', 0, 20, 30, 40, 50)


/*
function conta(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros)
}
conta('+', 0, 20, 30, 40, 50)
*/

/*
function funcao() {
    let total = 0
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}
funcao(1, 2, 3, 4, 5, 6, 7,)
*/

/*
function funcao(a,b,c,d,e,f) {
    console.log(a.b.c.d.e.f)
}
funcao(1,2,3)
*/

/*
function funcao(a, b = 2, c = 4) {
    console.log(a + b)
}
funcao(2, undefined, 20)
*/

/*
function funcao({ nome, sobrenome, idade}) {
    console.log(nome, sobrenome , idade)
}
let obj = { nome: 'Jhonatan', sobrenome: 'Hermes', idade: 21}
funcao(obj)
*/

/*
function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}
funcao(['Jhonatan', 'Hermes', 21])
*/