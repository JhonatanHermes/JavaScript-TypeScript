class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    aumentarVloume() {
        this.volume += 2
    }
    diminuirvolume() {
        this.volume -= 2
    }

    static trocaPilha() {

    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVloume()
console.log(controle1)