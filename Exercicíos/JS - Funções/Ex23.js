function aprovacao(cod, n1, n2, n3) {
    notas = ordenarmaior(n1, n2, n3)
    media = ((notas[0] * 4) + (notas[1] * 3) + (notas[2] * 3))/10
    if (media >= 5) {
        return `CÓDIGO: ${cod}. N1: ${n1} N2: ${n2} N3: ${n3} MÉDIA: ${media}. APROVADO!`
    } else {
        return `CÓDIGO: ${cod}. N1: ${n1} N2: ${n2} N3: ${n3} MÉDIA: ${media}. REPROVADO.`
    }
}

function ordenarmaior(n1, n2, n3) {
    let numerosOrdenados = [n1, n2, n3]
    let aux = 0
    for (let i = 0; i < numerosOrdenados.length; i++){
        for (let j = 0; j < (numerosOrdenados.length - i - 1); j++){
            if (numerosOrdenados[j] < numerosOrdenados[j+1]) {
                aux = numerosOrdenados[j]
                numerosOrdenados[j] = numerosOrdenados[j+1]
                numerosOrdenados[j+1] = aux 
            }
        }
    }
    return numerosOrdenados
}

console.log(aprovacao(001, 4, 5, 7))
console.log(aprovacao(002, 3, 5, 4))
