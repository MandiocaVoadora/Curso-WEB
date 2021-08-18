function confereDia(dia) {
    switch(dia) {
        case 1:
            return `Domingo - Fim de Semana`
            break;
        case 2:
            return `Segunda - Dia Útil`
            break;
        case 3:
            return `Terça - Dia Útil`
            break;
        case 4:
            return `Quarta - Dia Útil`
            break;
        case 5:
            return `Quinta - Dia Útil`
            break;
        case 6:
            return `Sexta - Dia Útil`
            break;
        case 7:
            return `Sábado - Fim de Semana`
            break;
        default:
            return `Número do dia inserido é inválido.`
    }
}

console.log(confereDia(1))
console.log(confereDia(3))
console.log(confereDia(4))
console.log(confereDia(5))
console.log(confereDia(7))
console.log(confereDia(43))