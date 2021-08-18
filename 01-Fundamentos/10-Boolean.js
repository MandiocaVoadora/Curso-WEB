let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // ! significa não, !! significa não não, logo verdadeiro

console.log('Casos verdadeiros... ')
console.log(!!1)
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!'texto qualquer')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = "alguma coisa")) // nao valida a operação, porem valida o valor

console.log('Casos falsos... ')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

/*
é possivel fazer comparações utilizando o ||, de forma que o que sera impresso é 
o primeiro valor verdadeiro
*/
console.log('Pra finalizar... ')
console.log(('' || 0 || "outra coisa" || "alguma coisa"))
