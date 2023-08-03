/* Aula 16 de Js Dado Virtual */

//SELECIONAR ELEMENTOS

let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click', function() {
    // adicionar a animação
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')

    // tocar efeito sonoro
    dadoRolando.play()

    //ocultar o botao Sortear
    btnSortear.style.display = 'none'

    // usar setTimeout para executar as ações apos 1.75 segundos
    setTimeout(function() {

        //ARMAZENAR NUMERO SORTEADO NA VARIAVEL
        numeroSorteado = getRandomInt(1, 6)

        // excrever o numero sorteado no console
        console.log(numeroSorteado)

        //definir atributo src com base no numero
        imgDado.setAttribute('src', 'imagens/dados/dado/dado/'+numeroSorteado+'.png')

        //escrever no paragrafo numeroSorteado
        sorteado.textContent = numeroSorteado

        // exibir o botão Sorteado
        btnSortear.style.display = 'inline-block'

        //retirar a animação
        imgDado.classList.remove('animar')
        sorteado.classList.remove('aparecer')
    }, 1750)
})

//FUNÇÂO que gera numero randomico inteiro
// incluido o minimo e o maximo
function getRandomInt(min, max) {
    min = Math.ceil(min) // arredonda para cima ceil = teto
    max = Math.floor(max) // arredonda para baixo flor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min
}