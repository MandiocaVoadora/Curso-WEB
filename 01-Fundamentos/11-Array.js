const valores = [7.8, 9.9, 4.7, 3.2] // criei um array
console.log(valores[0], valores[3]) // chamei o valores nos respectivos indices
console.log(valores[2]) // idem

valores[4] = 10 // adicionei um valor na posição 4, que era apos a ultima
console.log(valores)
console.log(valores.length) // imprimi o tamanho do array, que aqui é 5

valores.push({id: 3}, "meu nome", 45, false, nuil) // adicionei valores no array
console.log(valores) // imprimi o array com os novos valores

console.log(valores.pop()) // retirei o ultimo valor do vetor
console.log(valores)

delete valores[0] // outra forma de retirar algum valor do vetor
console.log(valores)

console.log(typeof valores) // array sao do tipo object
