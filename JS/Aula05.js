/*Arquivos JS aula 05 Objetos */

// CRIAR OBJETO
let pessoa = {
    nome : `Edsom`,
    idade : 40,
    peso : 83.5,
    altura: 1.75,
    doador : false,
}

let produtos = {
    descricao : [],
    preco : []
}

const carros = {
    marca : [`Ford`, `Fiat`, `GM`],
    modelo : [`Ka`, `Uno`, `Corsa`],
    ano : [1999, 2005, 2010]
}

// como acessar uma propriedade usando . 
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura

// ACESSAR PROPRIEDADE usando ['']
pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']

//OPERAÇÃO IMC = peso / (altura * altura)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

// .toFixed(x)
// limita o numero de casas dicimais
console.log(`IMC ${imc.toFixed(2)}`)

// ALTERAR/ATUALIZAR VALOR de propriedade
pessoa.nome = "Edison Maia"
produtos.descricao = [`Arroz`]
produtos.preco = [`4.99`]

// usando spreed operator
produtos.descricao = [...produtos.descricao, 'feijão', 'trigo']
produtos.preco = [...produtos.preco, 9.99, 4.99]

// Usando spreed operator em objetos const
carros.marca = [...carros.marca, 'WV']
carros.modelo = [...carros.modelo, 'Fusca']
carros.ano = [...carros.ano, '1979']



