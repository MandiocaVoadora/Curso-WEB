Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const consultarNota = function(nota){
    if (nota.entre(9, 10)){
        console.log('Quadro de honra.')
    }
    else if (nota.entre(7, 8.99)){
        console.log('Aprovado.')
    }
    else if (nota.entre(4, 6.99)){
        console.log('Recuperação.')
    }
    else if (nota.entre(0, 3.99)){
        console.log('Reprovado.')
    }
    else{
        console.log('Nota inválida.')
    }
}

consultarNota(8)
consultarNota(9.5)
consultarNota(7)
consultarNota('ola')
consultarNota(5.5)
consultarNota(3)
consultarNota(-1)
consultarNota(11)
