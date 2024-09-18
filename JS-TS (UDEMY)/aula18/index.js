const pessoa1 = {
    nome: 'Jhonatan',
    sobrenome: 'Lucco',
    idade: 21, 

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


//--------------------------

/*function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    }
}

const pessoa1 = criaPessoa('Jhonatan', 'Lucco', '21')
const pessoa2 = criaPessoa('Amanda', 'Moreira', '22')
const pessoa3 = criaPessoa('Levi', 'Lucco', '3')*/

//--------------------------

/*const pessoa1 = {
    nome: 'Jhonatan',
    sobrenome: 'Lucco',
    idade: 21
}

const pessoa2 = {
    nome: 'Amanda',
    sobrenome: 'Moreira',
    idade: 22
}

console.log(pessoa1.nome)
console.log(pessoa2.nome)*/

//----------------------

/*const nome01 = 'Jhonatan'
const sobrenome1 = 'Lucco'
const idade01 = 21

const nome02 = 'Amanda'
const sobrenome2 = 'Moreira'
const idade02 = 22*/


//-------------------------

/*
const array = [1,2,3]
array.push(4)
array[0] = 'Jhonatan'
array = 'Amanda'
console.log(array)
*/