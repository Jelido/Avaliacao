// let titulo = document.querySelector('h1')
// titulo.innerHTML = 'Jogo do número secreto'

// let paragrafo = document.querySelector('p')
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10'


let NumeroSecreto = gerarNumeroAleatorio()

function exibirTextoNaTela(tag,texto){

    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    
}

exibirTextoNaTela('h1', 'Soma')
exibirTextoNaTela('p', 'Coloque os números para a soma')



function VerificarChute(){

    alert()

}

function gerarNumeroAleatorio(){

    return Math.floor(Math.random() * (10 - 1) + 1)

}

