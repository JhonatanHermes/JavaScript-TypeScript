// IIFE

(function(idade) {

    const sobrenome = 'Moreira'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Amanda'))
    }

    falaNome()
    console.log(idade)
})(22)