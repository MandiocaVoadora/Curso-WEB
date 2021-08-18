const teste = (num) => {
    return `R$ ${num.toFixed(2).toString().replace('.', ',')}`
}

console.log(teste(0.1 + 0.2))
console.log(teste(9.99999))
