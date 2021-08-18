function intervaloVetor(vetor) {
    let dentroIntervalo = 0
    let foraIntervalo = 0
    for (let i in vetor) {
        if (vetor[i] >= 10 && vetor[i] <= 20){
            dentroIntervalo += 1
        } else {
            foraIntervalo += 1
        }
    } 
    return {dentroIntervalo, foraIntervalo}
}
const vetorTeste = [1, 13, 45, 22, 17, 16, 11, 10, 20, 3, 45, 99, 89, 100]
console.log(intervaloVetor(vetorTeste))