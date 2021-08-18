function trocaValores(vetorA, vetorB) {
    if (vetorA.lenght == vetorB.lenght) {
        for (let i in vetorA) {
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
        return console.log(`vetor A: ${vetorA} // vetor B: ${vetorB}`)
    } else {
        return console.log('Vetore de tamanhos diferentes.')
    }
}

const vetorA = [1, 2, 3]
const vetorB = [4, 5, 6]

trocaValores(vetorA, vetorB)
