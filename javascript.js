const body = document.querySelector('body')

const div = document.createElement('div')
div.classList.add('menu')

const inicio = document.createElement('ul')
const contato = document.createElement('ul')
const carrinho = document.createElement('ul')
const produtos = document.createElement('ul')
const sobre = document.createElement('ul')

inicio.innerHTML = "<li>Inicio</ul>"
contato.innerHTML = "<li>Contato</ul>"
carrinho.innerHTML = "<li>Carrinho</ul>"
produtos.innerHTML = "<li>Produtos</ul>"
sobre.innerHTML = "<li>Sobre</ul>"

div.insertBefore(inicio, div.childNodes[0])
div.insertBefore(contato, div.childNodes[1])
div.insertBefore(carrinho, div.childNodes[2])
div.insertBefore(produtos, div.childNodes[3])
div.insertBefore(sobre, div.childNodes[4])

const logoTipo = document.createElement('h3')
logoTipo.innerHTML = "MenuPuro"

const icone = document.createElement('span')
icone.classList.add('active')
div.insertBefore(icone, div.childNodes[0])

div.insertBefore(logoTipo, div.childNodes[0])

body.appendChild(div)