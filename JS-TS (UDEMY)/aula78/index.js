function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente:${this.saldo}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this,verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta}` | + `Saldo: R$${this.saldo.toFixed(2)}`)
}

function contaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
contaCorrente = Object.create(Conta.prototype)
contaCorrente.prototype.constructor = contaCorrente

contaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente:${this.saldo}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

function contaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}
contaPoupanca = Object.create(Conta.prototype)
contaPoupanca.prototype.constructor = contaPoupanca

const contacorrente = new contaCorrente(11, 22, 0 ,100)
contacorrente.depositar(10)
contacorrente.depositar(100)
contacorrente.sacar(1)

const contapoupanca = new contaPoupanca(12, 33, 0)
contapoupanca.depositar(10)
contapoupanca.depositar(10)
contapoupanca.sacar(1)