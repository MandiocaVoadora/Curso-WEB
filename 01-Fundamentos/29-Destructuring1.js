// novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        rua: 'Rua da Monsões',
        numero: 456,
        cep: 456789000
    },
    tipoSangue: 'B-'
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: age} = pessoa
console.log(n, age)

const {estado, cor} = pessoa
console.log(estado, cor)

const {endereco: {rua, numero, cep = null} } = pessoa
console.log(rua, numero, cep)