const valor = 'Global'

function imprimirValor() {
    return console.log(valor)
}

function exec() {
    const valor = 'local'
    imprimirValor()
    return imprimirValor()
}

exec()