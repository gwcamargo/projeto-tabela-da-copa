let grupos = []
let selecoes = []

let letra_do_grupo = document.querySelector('.letra_do_grupo').value
let titulo_grupo = document.querySelector('.titulo_grupo')
let lista_grupo = document.querySelector('.lista_grupo')

const verGrupos = (letra_do_grupo) => { 
    fetch('./grupos.json')
    .then(response => response.json())
    .then(dados => {
        console.log(dados)
        titulo_grupo.innerHTML = `Grupo ${dados[letra_do_grupo].grupo}`
        lista_grupo.innerHTML = `
            <li>${dados[letra_do_grupo].selecao1}</li>
            <li>${dados[letra_do_grupo].selecao2}</li>
            <li>${dados[letra_do_grupo].selecao3}</li>
            <li>${dados[letra_do_grupo].selecao4}</li>
        `
    })
}

verGrupos(letra_do_grupo)