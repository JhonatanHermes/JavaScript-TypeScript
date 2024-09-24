function mostrahora() {
    let data = new Date
    return data.toLocaleDateString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(function () {
    console.log(mostrahora())
}, 1000)

setTimeout(function() {
    clearInterval(timer)
}, 3000)

setTimeout(function() {
    console.log('olá')
}, 5000)