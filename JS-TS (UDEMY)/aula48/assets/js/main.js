const inputtarefa = document.querySelector('.input-tarefa')
const btntarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
    const li = document.createElement('li')
    return li
}

inputtarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputtarefa.value) return
    criatarefa(inputtarefa.value)
    }
})

function limpainput() {
    inputtarefa.value = ''
    inputtarefa.focus()
}

function criabotaoapagar(li) {
    li.innerHTML += ' '
    const botaoapagar = document.createElement('button')
    botaoapagar.innerText = 'apagar'
    botaoapagar.setAttribute('class', 'apagar')
    botaoapagar.setAttribute('title', 'apagar tarefa')
    li.appendChild(botaoapagar)
}

function criatarefa(textoinput) {
    const li = criaLi()
    li.innerHTML = textoinput
    tarefas.appendChild(li)
    limpainput()
    criabotaoapagar(li)
    salvartarefas()
}

btntarefa.addEventListener('click', function() {
    if (!inputtarefa.value) return
    criatarefa(inputtarefa.value)
})

document.addEventListener('click', function(e) {
    const el = e.target
    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
        salvartarefas()
    }
})

function salvartarefas() {
    const litarefas = tarefas.querySelectorAll('li')
    const listadetarefas = []
    for (let tarefa of litarefas) {
        let tarefatexto = tarefa.innerText
        tarefatexto = tarefatexto.replace('apagar', '').trim()
        listadetarefas.push(tarefatexto)
    }
    const tarefasJSON = JSON.stringify(listadetarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionatarefassalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listadetarefas = JSON.parse(tarefas)

    for(let tarefa of listadetarefas) {
        criatarefa(tarefa)
    }
}
adicionatarefassalvas()