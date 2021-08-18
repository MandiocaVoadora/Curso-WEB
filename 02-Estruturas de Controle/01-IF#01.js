function averiguarNotaAprovado(nota){
    if (nota >= 7){
        console.log('Aprovado!!! Nota:',nota)
    }
}

averiguarNotaAprovado(7.8)
averiguarNotaAprovado(7)
averiguarNotaAprovado(6.9)

function eVerdadeiro (valor) {
    if (valor) {
        console.log('É verdadeiro...',valor)
    }
}

eVerdadeiro()
eVerdadeiro(null)
eVerdadeiro(undefined)
eVerdadeiro(9)
eVerdadeiro([])
eVerdadeiro({})
eVerdadeiro(-1)
