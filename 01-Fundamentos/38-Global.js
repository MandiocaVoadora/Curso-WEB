let a = 123
globalThis.a = 123

this.c = 456
this.b = false
this.e = "teste"

console.log(a)
console.log(globalThis.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criação de variavel maluca sem var e let!!!
abc = 123
console.log(global.abc)

// module.exports = {e: 456 , f: false , g: 'teste'}