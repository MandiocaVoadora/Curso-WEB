// armazenando uma função dentro de uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

// armazenando um função arrow dentro de uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 5))

// retorno implicito 
const subratracao = (a, b) => a - b
console.log(subratracao(5, 2))

const imprimir = a => console.log(a)
imprimir('olá')