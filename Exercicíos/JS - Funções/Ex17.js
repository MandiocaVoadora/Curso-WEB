const aumento = (valor, plano) => {
    switch(plano){
        case 'A':
            return valor = valor * 1.1
            break;
        case 'B':
            return valor = valor * 1.15
            break;
        case 'C':
            return valor = valor * 1.2
            break;
        default:
            return `Plano inserido inválido.`
    }
}

console.log(aumento(1000, 'A'))
console.log(aumento(1000, 'B'))
console.log(aumento(1000, 'C'))
console.log(aumento(1000, 'a'))
