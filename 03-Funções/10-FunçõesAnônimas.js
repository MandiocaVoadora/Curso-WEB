const soma = function(x, y) {
    return x + y
}

const imprimirOperacao = function(x, y, operacao = soma) {
    return console.log(operacao(x, y))
}

imprimirOperacao(3, 4)
imprimirOperacao(3, 4, function(x, y) {
    return x - y
})
imprimirOperacao(3, 4, (x, y) => x * y)

const obj = {
    falar: function() {
        return console.log('ola')
    }
}

obj.falar()