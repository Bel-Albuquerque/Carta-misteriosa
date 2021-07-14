
let input =document.querySelector('input')
let button = document.querySelector("#criar-carta")


function spanPalavra() {
  let input =document.querySelector('input')
  let valorInput = input.value
  let inputArray = valorInput.split(" ")
  let paragrafo = document.querySelector("#carta-gerada")
  paragrafo.innerHTML =''

  for (index of inputArray) {
    let span = document.createElement('span')
    span.innerHTML = index
    paragrafo.appendChild(span)
    
  }
}

button.addEventListener('click', spanPalavra)

function mensagemErro() {
  let paragrafo = document.querySelector("#carta-gerada")
  let valorInput = input.value
  if (valorInput == '' || valorInput.trim() == '') {
    paragrafo.innerText = "Por favor, digite o conteúdo da carta."
  }
}

button.addEventListener('click', mensagemErro)

let estilo = ['newspaper', 'magazine1', 'magazine2']
let tamanho = [`medium`, `big`, `reallybig`]
let rotacao = [`rotateleft`, `rotateright`]
let inclinacao = [`skewleft`, `skewright`]

function classEstilo () {
  let span = document.querySelectorAll('span')
  for (index of span) {
    index.classList.add(estilo[Math.floor(Math.random() * 3)])
  }
}
button.addEventListener('click', classEstilo)

function classTamanho() {
  let span = document.querySelectorAll('span')
  for (index of span) {
    index.classList.add(tamanho[Math.floor(Math.random() *3)])
  }
}
button.addEventListener('click', classTamanho)

function classRotacao() {
  let span = document.querySelectorAll('span')
  for (index of span) {
    index.classList.add(rotacao[Math.floor(Math.random() * 2)])
  }
}
button.addEventListener('click', classRotacao)

function classInclinacao() {
  let span = document.querySelectorAll('span')
  for (index of span) {
    index.classList.add(inclinacao[Math.floor(Math.random() * 2)])
  }
}
button.addEventListener('click', classInclinacao)

function contadorPalavras () {
  let contador = document.querySelector('#carta-contador')
  let span = document.querySelectorAll('span')
  return contador.innerHTML = span.length

}
button.addEventListener('click',contadorPalavras)

