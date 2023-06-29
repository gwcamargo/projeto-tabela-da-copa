const verGrupos = () => {

    // requisição dos dados json
    fetch('./grupos.json')
    .then(response => response.json())
    
    // manipular os dados da requisição
    .then(dados => {
        console.log(dados)

        // mapear o array de dados
        dados.map((grupo, index) => {
            // criar a estrutura do HTML e usar a clonagem
            let lista_de_grupo = document.querySelector(".listaDoGrupo").cloneNode(true)

            // usar o append para colocar o conteúdo acima dentro do HTML
            document.querySelector(".listas").append(lista_de_grupo)

            // preencher os dados em cada card (section da lista de seleções)
            let tituloDoGrupo = document.querySelectorAll('.tituloDoGrupo')
            let listaDeSelecoes = document.querySelectorAll(".listaDeSelecoes")

            tituloDoGrupo[index].innerHTML = `Grupo ${grupo.grupo}`
            listaDeSelecoes[index].innerHTML = `
                <li><img class='bandeirap' src='images/bandeiras/${grupo.selecao1[0]}' alt='bandeira' />${grupo.selecao1[1]}</li>

                <li><img class='bandeirap' src='images/bandeiras/${grupo.selecao2[0]}' alt='bandeira' />${grupo.selecao2[1]}</li>

                <li><img class='bandeirap' src='images/bandeiras/${grupo.selecao3[0]}' alt='bandeira' />${grupo.selecao3[1]}</li>

                <li><img class='bandeirap' src='images/bandeiras/${grupo.selecao4[0]}' alt='bandeira' />${grupo.selecao4[1]}</li>
            `
        })
    })
    
}

verGrupos()