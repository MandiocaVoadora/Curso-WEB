// funcão sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(5, 2)
imprimirSoma('vitor')
imprimirSoma(5)
imprimirSoma(5, 2, 4, 67)
imprimirSoma()

// função com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(7, 6))
console.log(soma(7))
console.log(soma())