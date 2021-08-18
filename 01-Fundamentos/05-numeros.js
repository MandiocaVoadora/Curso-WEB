const peso1 = 1.0
console.log(peso1)
console.log(typeof peso1)

const peso2 = Number('2.0') //Number sempre em letra maiúscula
console.log(peso2)
console.log(typeof peso2)

console.log(Number.isInteger(peso1)) //true caso o valor da variavel seja inteiro
console.log(Number.isInteger(peso2)) //true caso o valor da variavel seja inteiro

const avaliacao1 = 9.7234
const avaliacao2 = 7.9245

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2)
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // edita o numero pra ter no max. 2 valores dps da virgula
console.log(media.toString()) // converte pra valor String
console.log(media.toString(2)) // converte pra binário

console.log(typeof Number) //é uma função
