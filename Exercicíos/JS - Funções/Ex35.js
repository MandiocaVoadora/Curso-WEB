function inserePilha(vetor1, vetor2) {
    for (let i in vetor2){
        vetor1.push(vetor2[i])
    }
    return vetor1
}

let vetorPilha = [1, 2, 3, 4, 5]
const vetorInserir = [6, 7, 8, 9, 10]

vetorPilha = inserePilha(vetorPilha, vetorInserir)
console.log(vetorPilha)
