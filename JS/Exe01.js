document.write("<h1>Informações</h1> <br> ")

let lutador = {
    nome : "Fedor Vladimirovich Emelianenko",
    nacionalidade : "Russo",
    idade : 44,
    Peso : 106,
    Altura : 1.83
}

document.write(`<p>Lutador: ${lutador.nome} <br> Nacionalidade: ${lutador.nacionalidade} <br> Idade: ${lutador.idade} anos <br>Peso: ${lutador.Peso} Kg <br> Altura: ${lutador.Altura} m <p> <br> `)

document.write("<h1>Frase do Dia</h1> <br> ")

const dia = 10
const mes = 9
const ano = 2023
const menssagem = "Seja curioso. Leia de tudo. Tente coisas novas. Oque as pessoas chamam de inteligência se resume a curiosidade."
const autor = "Aaron Swartz"

document.write(`${dia}/${mes}/${ano} <br> ${menssagem} <br> ${autor} <br>`)

let meseDoAno = ["Janeiro", "Fevereiro", "Março", "..."]

document.write(`${meseDoAno[0]}, ${meseDoAno[1]}, ${meseDoAno[2]}, ${meseDoAno[3]} <br>`)

document.write("<h1>Objeto Jogo</h1> <br> ")

let Jogo = {
    nome : "League of Legends - LOL",
    Desenvolvedor : "Riot Games",
    Lancamento : 2009
}

document.write(`Jogo: ${Jogo.nome} <br> Desenvolvedor: ${Jogo.Desenvolvedor} <br> Ano do Lançamento: ${Jogo.Lancamento} <br>`)
