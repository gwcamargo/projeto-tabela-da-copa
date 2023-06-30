// botão ir ao topo
document.querySelector("#irTopo").addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth'
}))

// botão grupos mostrar / ocultar divGrupos
document.querySelector('#btnGrupos').addEventListener('click', () => {
    document.querySelector('#divGrupo').classList.toggle('ocultar')
})

const ocultar = (elemento) => {
    document.querySelector(elemento).classList.add('ocultar')
}

const mostrar = (elemento) => {
    document.querySelector(elemento).classList.add('ocultar')
}

const verGrupos = () => {

    // requisição dos dados json
    fetch('./grupos.json')
    .then(response => response.json())

    // manipular os dados da requisição
    .then(dados => {
        console.log(dados)

        // mapear o array de dados
        dados.map((grupo, index) => {
            criarCards()
            preencherDadosNosCards(grupo, index)
        }) // fim dados.map
 
    }) // fim then 
     
} // fim verGrupos 

// criar cards de grupos de seleções
const criarCards = () => {

    // criar a estrutura do HTML e usar a clonagem
    let listaDeGrupo = document.querySelector('.listaDoGrupo').cloneNode(true)

    // usar o append
    document.querySelector('.listas').append(listaDeGrupo)
}

// preencher os dados nos cards
const preencherDadosNosCards = (grupo, index) => {

    // destruturação do grupo e seleções
    let {grupo: ogrupo, selecao1, selecao2, selecao3, selecao4} = grupo
    let [bandeira1, pais1] = selecao1
    let [bandeira2, pais2] = selecao2
    let [bandeira3, pais3] = selecao3
    let [bandeira4, pais4] = selecao4

    let tituloDoGrupo = document.querySelectorAll(".tituloDoGrupo")
    let listaDeSelecoes = document.querySelectorAll(".listaDeSelecoes")

    tituloDoGrupo[index].innerHTML = `Grupo ${ogrupo}`
    listaDeSelecoes[index].innerHTML = `

        <li><img class='bandeirap' src='images/bandeiras/${bandeira1}' alt='bandeira'/>${pais1}</li> 
        
        <li><img class='bandeirap' src='images/bandeiras/${bandeira2}' alt='bandeira'/>${pais2}</li> 

        <li><img class='bandeirap' src='images/bandeiras/${bandeira3}' alt='bandeira'/>${pais3}</li> 

        <li><img class='bandeirap' src='images/bandeiras/${bandeira4}' alt='bandeira'/>${pais4}</li> 
    `
}  // fim preencher os dados nos cards

// executar verGrupos para criar os cards / section dos grupos e preencher os dados
verGrupos()
