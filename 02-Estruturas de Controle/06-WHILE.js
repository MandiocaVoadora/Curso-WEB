function gerarAleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let opcao = 0

while (opcao != -1){
    opcao = gerarAleatorio(-1, 10)
    console.log(`Sorteado: ${opcao}.`)
}

console.log('Até mais')
