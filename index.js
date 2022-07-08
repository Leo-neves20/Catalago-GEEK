
let listFigure = []
let listPainting = []
const ulBonecos = document.querySelector(".sec-bonecos__bonecos-secao")
const ulPinturas = document.querySelector(".sec-pinturas__pinturas-secao")


 function produtoBonecos(foto, nome, valor){

    let infoBonecos = {

        imagem: foto,
        name:   nome,
        preco:  valor

    }

         listFigure.push(infoBonecos)

}

produtoBonecos("./assets/img/actions/animewoman.jpg", "NOME", "VALOR")
produtoBonecos("assets/img/actions/dragonballpersonagem.jpg", "NOME", "VALOR")
produtoBonecos("assets/img/actions/starwarspersonagem.jpg","NOME", "VALOR")
produtoBonecos("assets/img/actions/starwarspersonagem.jpg","NOME", "VALOR")
produtoBonecos("assets/img/actions/starwarspersonagem.jpg","NOME", "VALOR")
produtoBonecos("assets/img/actions/starwarspersonagem.jpg","NOME", "VALOR")
produtoBonecos("assets/img/actions/starwarspersonagem.jpg","NOME", "VALOR")
produtoBonecos("assets/img/actions/starwarspersonagem.jpg","NOME", "VALOR")


function produtoPinturas(foto, nome, valor){

    let infoPinturas = {

        imagem: foto,
        name:   nome,
        preco:  valor
    }

    listPainting.push(infoPinturas)

    return listPainting

}

produtoPinturas("assets/img/painting/clock.jpg", "NOME", "VALOR")
produtoPinturas("assets/img/painting/gamepad.jpg", "NOME", "VALOR")
produtoPinturas("assets/img/painting/personagem.jpg", "NOME", "VALOR")
produtoPinturas("assets/img/painting/personagem.jpg", "NOME", "VALOR")
produtoPinturas("assets/img/painting/personagem.jpg", "NOME", "VALOR")
produtoPinturas("assets/img/painting/personagem.jpg", "NOME", "VALOR")
produtoPinturas("assets/img/painting/personagem.jpg", "NOME", "VALOR")
produtoPinturas("assets/img/painting/personagem.jpg", "NOME", "VALOR")
produtoPinturas("assets/img/painting/personagem.jpg", "NOME", "VALOR")
produtoPinturas("assets/img/painting/personagem.jpg", "NOME", "VALOR")
produtoPinturas("assets/img/painting/personagem.jpg", "NOME", "VALOR")

function contProdutos(lista, secao){

    for(let i = 0; i < lista.length; i++){

        let produto = lista[i]

        let card = criandoCard(produto)

        secao.appendChild(card)        

    }

}

contProdutos(listFigure, ulBonecos)
contProdutos(listPainting, ulPinturas)

function criandoCard(produto){

    let img  = produto.imagem
    let nome    = produto.name
    let valor   = produto.preco

    let li    = document.createElement("li")
    let h3    = document.createElement("h3")
    let span  = document.createElement("span")
    let imagem = document.createElement("img")

    span.innerText = valor
    h3.innerText = nome
    imagem.src = img
    
    li.appendChild(imagem)
    li.appendChild(h3)
    li.appendChild(span)

    return li 

}







