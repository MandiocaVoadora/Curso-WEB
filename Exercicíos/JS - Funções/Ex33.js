function concatVetor(vetor1, vetor2, vetor3) {
    return vetor1.concat(vetor2, vetor3)
}

const vetorInt = [1, 2, 3, 4]
const vetorString = ['Vitor', 'Diego', 'Mariana', 'Dino']
const vetorDecimal = [0.1, 1.5, 3.4, 5.6]

const vetorResultado = concatVetor(vetorInt, vetorString, vetorDecimal)
console.log(vetorResultado)