
let nome = window.prompt('Name: ')

let mensagem =' ,  por favor verifique seu pedido:'

let  bemVindo = nome + mensagem;

//Pegando o elemento id na div='saudacoes', para substituir com a varieavel abaixo

let elSaudacao = window.document.getElementById('saudacoes')
// trocando o conteudo do texto da div usando o 'textContent'
elSaudacao.textContent += bemVindo

let sinal = window.prompt('Insira o sinal: ')//'Desenvolvedor Web Pro Max'
let elSinalUsuario = document.getElementById('sinalUsuario')
elSinalUsuario.textContent = sinal;

let telhasTotal = sinal.length
let elTelhas = document.getElementById('telhas')
elTelhas.innerHTML = telhasTotal

let subTotal = 5 * telhasTotal
let elSubTotal = document.getElementById('subTotal')
elSubTotal.innerHTML = subTotal

let envio = 7
let elEnvio = document.getElementById('envio')
elEnvio.innerHTML = envio

let totalGeral = 7 + subTotal
let elTotalGeral = document.getElementById('totalGeral')
elTotalGeral.textContent = totalGeral



















/* uma STRING => Objecto => Propriedades (.length) e Metodos  */
