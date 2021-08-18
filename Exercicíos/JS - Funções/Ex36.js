const vetorTeste = [1, 2, 3, 4, 5]

console.log(vetorMultiplicado(vetorTeste, 2))
console.log(vetorMultiplicadoSe(vetorTeste, 2))

function vetorMultiplicado(vetor, num) {
    for (let i in vetor) {
        vetor[i] = vetor[i] * num
    }
    return vetor
}

function vetorMultiplicadoSe(vetor, num) {
    for (let i in vetor) {
        if (vetor[i] > 5) {
            vetor[i] = vetor[i] * num
        }
    }
    return vetor
}
