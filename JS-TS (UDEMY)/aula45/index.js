/*
try {
    console.log(a)
    console.log('Abri um arquivo')  
    console.log('Manipulei O arquivo e gerou erro')
    console.log('Fechei o arquivo')    // quando não há erros
} catch (e) {
    console.log('Tratando o erro')    // quando há erros
} finally {
    console.log('Eu sempre sou executado')    // sempre
}
*/

function retornaHora(data) {
    if (!(data instanceof Date)) {
        console.log('Não é')
        throw new TypeError('esperando instância de Date')
    }

    if (!data) {
        data = new Date
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

try {
    const data = new Date('01-01 1970 12:58:12')
    const hora = retornaHora(11)
    console.log(hora)
} catch (e) {
    //tratar erro
} finally {
    console.log('Tenha um bom dia')
}
