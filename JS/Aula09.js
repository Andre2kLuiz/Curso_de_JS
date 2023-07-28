/* Arquivo JS aula 09 DOM + alterar CSS*/ 

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'
//titulo.innerHTML = 'Aula Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'imagens/ufrn-logo.png')
imagem.setAttribute('width', '250')

/* MANIPULAR CSS */ 
//document.querySelector('h1').style.color = "red";
//document.querySelector('h1').style.color = "blue";
titulo.style.color = "blue";
document.querySelector('h1').style.backgroundColor = "#000";
titulo.style.textAlign = "center";
titulo.style.borderBottom = "2px solid red";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "5px";
titulo.style.margin = "3px";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'dark')
box[0].removeAttribute('class')

// MODOS DE COR 

let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnlight = document.querySelector('#btlight')

btnDark.addEventListener('click', modoDark)

btnlight.addEventListener('click', modoLight)

function modoDark() {
    //event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light")
}

function modoLight() {
    //event.preventDefault();
    console.log('modo light')
    tela.classList.add("light");
    tela.classList.remove("dark")
}







