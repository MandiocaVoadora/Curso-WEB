function conceitoNota(vetor) {
    const conceitos = []
    for (let i in vetor) {
        if (vetor[i] >= 0 && vetor[i] < 5) {
            conceitos.push('D')
        } else if (vetor[i] >= 5 && vetor[i] < 7) {
            conceitos.push('C')
        } else if (vetor[i] >= 7 && vetor[i] < 9) {
            conceitos.push('B')
        } else if (vetor[i] >= 9 && vetor[i] <= 10) {
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida')
        }
    }
    return conceitos
}

const notasTeste = [5, 14, 3, 7, 9, 8, 42]
console.log(conceitoNota(notasTeste))
 