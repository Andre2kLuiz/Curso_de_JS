/* Arquivo JS aula Array */

let produtos = [`Arroz`, `Feijão`, `Leite`]
var códigos = Array(10, 20, 30)
var test = Array(10)

test[0] = "oi"
test[9] = "Tudo bem?"
test[10] = "Opa!"

let meses = [`Jan`, `Fev`, `Mar`, `Abr`]

//Adicionar no final push = empurre
produtos.push(`Açucar`)
códigos.push(40, 50, 60, 70)
meses.push(`Mai`, `Jun`, `Ago`, `07`)

//REMOVER  do final pop = estourar
produtos.pop()
códigos.pop()
meses.pop()

//ADICIONAR no inicio unshift
produtos.unshift(`Uva`, `Maçã`)

//REMOVER do inicio
produtos.shift()

//REMOVER de uma posição especifica splice
//splice = emendar
//posição inicial, quantos remover
códigos.splice(1, 3)

//COPIAR array slice = fatiar porção
//posição inicial, quantos remover
let meses1 = meses.slice()
let meses2 = meses.slice(0, 3)

//VER TAMANHO DO ARRAY length comprimento
meses.length
meses1.length
meses2.length

//spreed operator ... copiar
let teste = [...produtos, `Ovo`, `Pera`]
