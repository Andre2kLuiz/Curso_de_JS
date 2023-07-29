/* Aula 10 funçoes ou metodos no JS*/ 

let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelector('box')

/* Funcoes sem parametros e sem retorno (procedure) */
function olaMundo() {
    document.write('Olá Mundo sem retorno<br>')
}

/* Funcoes sem parametros com retorno (function) */
function olaMundo2() {
    return 'Olá Mundo com retorno<br>'
}

//CHAMAR A FUNÇAO = executar ela
olaMundo()
document.write(olaMundo2())

let x = 2
let y = 1
let mensagem = 'jesus Cristo é o Salvador.'

/* Funcoes com parametreo e sem retorno (procedure) */

function somar (a, b) {
    document.write(a + b + "<br>")
}

/* Funcoes com parametreo e com retorno (procedure) */

function somar2(c, d) {
    return c + d
}

//CHAMAR A FUNÇÃO = executar ela
somar(x, y)
somar(10, 5)

document.write(`<p>${somar2(x, y)}</p>`)
document.write(`<p>${somar2(5, 2)}</p>`)

/* função anonima = não tem nome
pode ou não ter parametros
pode ou não ter retorno */
titulo.addEventListener('click', function() {
    window.alert('Clicou no título')
})

// Arrow function ES6 2015 em diante

const olaMundoArow = () => document.write("Olá Mundo!!!!!!!!!")

//nao precisa usar a palavra return
//nao precisa usar a palavra function
//nao precisa colaocar { } se for so upma intrução
//na se usa nome na funçao

const olaMundo2Arrow = () => '<p>Olá Mundo com arrow function</p>'


olaMundo()
document.write(olaMundo2Arrow())







