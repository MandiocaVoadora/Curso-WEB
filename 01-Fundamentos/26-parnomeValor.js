const saudacao = "eae" // contexto léxico 1 

function comprimentar (){ // contexto léxico 2
    const saudacao = "oi"
    return saudacao
}

// objetos sãp grupos deaninhados de pares Nome/Valor
const pessoa = {
    nome: 'Edivaldo',
    altura: 1.76,
    idade: 76,
    peso: 67.8,
    endereco: {
        rua: 'Rua das Glórias',
        numero: 1567,
        cep:1467098
    },
    tipoSangue: 'A+'
}

console.log(saudacao)
console.log(comprimentar())
console.log(pessoa)
