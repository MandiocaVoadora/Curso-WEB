function rand ([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([72, 5]))
console.log(rand([990]))
console.log(rand([, 10]))
console.log(rand([]))
// console.log(rand()) // sem o colchetes vai dar erro
// console.log(rand(32, 57))