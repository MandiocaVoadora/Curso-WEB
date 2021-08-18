function contarParesImpares (vetor) {
    let pares = 0
    let impares = 0
    for (let i in vetor ){
        if (vetor[i] % 2 == 0){
            pares += 1
        } else {
            impares += 1
        }
    }
    return {pares, impares}
}
const vetorTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(contarParesImpares(vetorTeste))