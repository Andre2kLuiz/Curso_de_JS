/* Aula 12 de JS Estruturas
   condicionais de Escolha */

   let sit1 = document.querySelector('#site1')
   let sit2 = document.querySelector('#site2')
   let sit3 = document.querySelector('#site3')

   let notaFinal1 = 3
   let notaFinal2 = 8
   let notaFinal3 = 5

   //CONDICIONAIS


   // IF
   if (notaFinal1 >=7){
        //sit1.textContent = 'Aprovado'
   }

   if (notaFinal2 >= 7) {
        //sit2.textContent = 'Aprovado(a)'
   }else{
        //sit2.textContent = 'Reprovado(a)'
   }

   // IF TERNARIO
   notaFinal3 >= 7 ? sit1.textContent = 'Passou' : 'Ficou'

   // IF ENCADEADO OU ANINHADO
   if(notaFinal3 >= 7) {
    sit1.textContent = 'Aprovado'
   } else if (notaFinal3 <= 3) {
    sit1.textContent = 'Reprovado'
   } else {
    sit1.textContent = 'Recuperação'
   }

   //ESCOLHA CASO
   let escolha = document.querySelector('#escolha')
   //let situacao = ''
   //let situacao = 'Aprovado'
   //let situacao = 'Reprovado'
   let situacao = 'Recuperação'

   switch(situacao) {

        case 'Aprovado' :
            escolha.textContent = 'passou de ano'
            break
        
        case 'Reprovado' : 
            escolha.textContent = 'NÃO passou de ano'
            break

        case 'Recuperação' :
            escolha.textContent = 'Ainda tem uma chance'

        default :
   }







