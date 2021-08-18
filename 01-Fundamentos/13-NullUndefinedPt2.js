let valor // não inicializado
console.log(valor) // UNDEFINED

valor = null
console.log(valor) // NULL
// console.log(valor.toString()) isso irá dar erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 5.67
console.log(produto)

produto.preco = undefined // evite de fazer isso
console.log(produto)
console.log(!!produto.preco)
delete produto.preco // deleta o valor ou o que quer que tenha na variavel
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)
