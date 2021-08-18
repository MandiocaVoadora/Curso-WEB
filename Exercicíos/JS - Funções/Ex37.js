function progressaoAritmetica(numTermos, numInic, razao) {
    let resultado = [numInic]
    for (let i = 1; i < numTermos; i++) {       
        resultado[i] = resultado[i - 1] + razao
    }
    return resultado
}

console.log(progressaoAritmetica(10, 0, 2))

function progressaoGeometrica(numTermos, numInic, razao) {
    let resultado = [numInic]
    for (let i = 1; i < numTermos; i++) {
        resultado[i] = resultado[i - 1] * razao
    }
    return resultado
}

console.log(progressaoGeometrica(10, 4, 2))
