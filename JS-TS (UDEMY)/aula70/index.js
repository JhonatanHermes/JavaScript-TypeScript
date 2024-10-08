function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Jhonatan', 'Lucco')
console.log(p1.nomeCompleto())

const p2 = criaPessoa('Amanda', 'Moreira')
console.log(p2.nomeCompleto())


/*
const pessoa1 = new Object()
pessoa1.nome = 'Jhonatan'
pessoa1.sobrenome = 'Moreira'
pessoa1.idade = 21
pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando`)
}
pessoa1.getDataNas = function() {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

//console.log(pessoa1.getDataNas())

for (let chave in pessoa1) {
    //console.log(chave)
    console.log(pessoa1[chave])
}
*/