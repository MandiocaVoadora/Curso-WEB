function pedido(cod, quant) {
    let preco = 0
    switch(cod){
        case 100:
            preco = quant * 3
            return `${quant} cachorro(s) quente(s): R$ ${preco.toFixed(2)}`
            break;
        case 200:
            preco = quant * 4
            return `${quant} hamburguer(es) simples: R$ ${preco.toFixed(2)}`
            break;
        case 300:
            preco = quant * 5.5
            return `${quant} cheeseburguer(es): R$ ${preco.toFixed(2)}`
            break;
        case 400:
            preco = quant * 7.5
            return `${quant} bauru(s): R$ ${preco.toFixed(2)}`
            break;
        case 500:
            preco = quant * 3.5
            return `${quant} refrigerante(s): R$ ${preco.toFixed(2)}`
            break;
        case 600:
            preco = quant * 2.8
            return `${quant} suce(s): R$ ${preco.toFixed(2)}`
            break;
        default:
            return `Código inserido inválido.`
    }
}

console.log(pedido(100, 5))
console.log(pedido(200, 2))
console.log(pedido(300, 1))
console.log(pedido(400, 6))
console.log(pedido(500, 1))
console.log(pedido(600, 1))
console.log(pedido(100, 15))