function valorNegativo(vetor) {
    let negativos = 0
    for (let i in vetor) {
        if (vetor[i] < 0) {
            negativos += 1
        }
    }
    return negativos
}

const vetorTeste = [-1, -2, -3, 14, 15, 1232, 14, -3]
console.log(valorNegativo(vetorTeste))