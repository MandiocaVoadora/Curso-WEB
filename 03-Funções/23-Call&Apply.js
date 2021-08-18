function getMoeda(imposto = 0 , moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const prod1 = {
    nome: "notebook",
    preco: 2356.78,
    desconto: 0.15,
    getMoeda
}

console.log(prod1.getMoeda(0.1))

const carro = {
    preco: 450000,
    desconto: 0.05
}

console.log(getMoeda.call(carro))
console.log(getMoeda.call(carro, 0.1, '$'))

console.log(getMoeda.apply(carro))
console.log(getMoeda.apply(carro, [0.1, '$']))