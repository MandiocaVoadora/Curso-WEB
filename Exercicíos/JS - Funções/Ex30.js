function maiorMenor(vetor) {
    let maior = vetor[0]
    let menor = vetor[0]
    for (let i in vetor) {
        if (vetor[i] > maior) {
            maior = vetor[i]
        }
        if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }
    return {maior, menor}
}

const vetorTeste = [1, 13, 45, 22, 17, 16, 11, 10, 20, 3, 45, 99, 89, 100]
console.log(maiorMenor(vetorTeste))