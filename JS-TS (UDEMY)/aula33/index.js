const pessoa = {
    nome: 'Jhonatan',
    sobrenome: 'Lucco',
    idade: 21,
    endereco: {
        rua: 'Av Brasil', 
        numero: '320'
    }
}

const { nome, ...resto } = pessoa
console.log(nome, resto)