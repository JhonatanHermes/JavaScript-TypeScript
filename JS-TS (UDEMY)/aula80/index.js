class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome}, está falando`)
    }

    beber() {
        console.log(`${this.nome}, está bebendo`)
    }

    comer() {
        console.log(`${this.nome}, está comendo`)
    }
}

const p1 = new Pessoa('Jhonatan', 'Lucco')
console.log(p1)