console.log(sacar(100))
console.log(sacar(1000))
console.log(sacar(675))
console.log(sacar(50))

function sacar(valor) {
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5= 0
    let nota1 = 0
    let valorSacado = valorASacar(valor)
    
    while (valor >= valorSacado){
        switch(valorSacado){
            case 100:
                nota100 += 1
                valor -= 100
                break;
            case 50:
                nota50 += 1
                valor -= 50
                break;
            case 10:
                nota10 += 1
                valor -= 10
                break;
            case 5:
                nota5 += 1
                valor -= 5
                break;
            case 1:
                nota1 += 1
                valor -= 1
                break;
        } valorSacado = valorASacar(valor)
    }
    return imprimirSaque(nota100, nota50, nota10, nota5, nota1)
}

function valorASacar(num)  {
    if (num >= 100){
        return 100
    } else if (num >=50) {
        return 50
    } else if (num >=10) {
        return 10
    } else if (num >= 5) {
        return 5
    } else if (num >= 1){
        return 1
    }
}

function imprimirSaque (n100, n50, n10, n5, n1) {
    let imprime = ''
    if ((n100 + n50 + n10 + n5 + n1) > 0) {
        if (n100 > 0) {
            imprime += `${n100} nota(s) de R$ 100. `
        } if (n50 > 0) {
            imprime += `${n50} nota(s) de R$ 50. `
        } if (n10 > 0) {
            imprime += `${n10} nota(s) de R$ 10. ` 
        } if (n5 > 0) {
            imprime += `${n5} nota(s) de R$ 5. `
        } if (n1 > 0) {
            imprime += `${n1} nota(s) de R$ 1. `
        }
    } else {
        imprime = `Nenhum valor sacado. Saldo 0.`
    }
    return imprime
}
