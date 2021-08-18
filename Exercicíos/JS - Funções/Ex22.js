function PagarMensalidade(mes, valorAnuidade) {
    if (mes > 1 && mes < 13) {
        atraso  = mes - 1
        return `R$ ${(valorAnuidade * ((1 + 0.05)**atraso)).toFixed(2)}`
    } else {
        return `Mês inválido.`
    }
}

console.log(PagarMensalidade(4, 100))
console.log(PagarMensalidade(7, 250))
console.log(PagarMensalidade(6, 50))
console.log(PagarMensalidade(2, 100))
console.log(PagarMensalidade(4, 400))
