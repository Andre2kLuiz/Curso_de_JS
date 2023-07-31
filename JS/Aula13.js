/* Aula 13 de JS Estruturas de Repetição */

let carros = ['Fusca', 'Brasilia', 'Ferrary']

// FOR = para, faça
// i = interador, interação ou index
for(let i = 0; i < 5; i++) {
    document.write(i + " ")
}

for (let i = 0; i < carros.length; i++){
    document.write(`<li>${carros[i]}</li>`)
}

// FOREACH  forEach = para cada

let frutas = ['pera', 'uva', 'maçã', 'banana', 'melancia']

frutas.forEach(function(frutas, index) {
    document.write(`${index} ${frutas} <br>` )
})

carros.forEach(function(carro) {
    document.write(`${carro} <br>`)
})

//WHILE enquanto

//criar variavel de contaador fora do laço
let contador = 0

while(contador < frutas.length) {
    console.log(frutas[contador])
    contador++ // contador + 1
}

console.log(contador)

//DO WHILE faça enquanto

//criar variavel de contador fora do laço

let interador = 0

do {
    console.log(carros[interador])
    interador++ // contador +1
} while(interador < carros.length)

// aqui o interador esta com valor 3
console.log(interador)

