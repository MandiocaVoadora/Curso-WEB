function gerarAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let opcao = -1

do {
    opcao = gerarAleatorio(-1, 10)
    console.log(`Sorteado: ${opcao}`)
} while (opcao != -1)

console.log('FIM')
