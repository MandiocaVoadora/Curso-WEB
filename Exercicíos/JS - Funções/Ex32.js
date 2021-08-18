function mediaVetor(vetor) {
    let media = 0
    let quantidade = 0
    for (var i in vetor) {
        media += vetor[i]
        quantidade += 1
    }
    return (media/quantidade)
}
const vetorTeste = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
const vetorTeste2 = [7, 8, 9, 4, 10, 6, 7, 5, 4, 7, 2, 9, 8]

console.log(mediaVetor(vetorTeste))
console.log(mediaVetor(vetorTeste2))
