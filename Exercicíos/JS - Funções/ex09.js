function arredondaNota(nota) {
    var resto = nota % 5
    if (nota > 37) {
        if (resto == 0) {
            return `Nota não precisa ser arredondada. Nota: ${nota}`
        }
        else if (resto => 3 && resto <= 5) {
            nota = nota + Math.abs(5 - resto)
            return `Nota arredondada: ${nota}`
        } else if (resto < 3 && resto > 0) {
            nota = nota - resto
            return `Nota arredondada: ${nota}`
        }
    } else if (nota <38){
        return `Não é possivel arredondar. Reprovado. Nota: ${nota}`
    } else {
        return `valor inserido inválido`
    }
}

console.log(arredondaNota(38))
console.log(arredondaNota(76))
console.log(arredondaNota(80))
console.log(arredondaNota(27))