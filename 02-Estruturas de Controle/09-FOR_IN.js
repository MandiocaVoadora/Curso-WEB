const vetor = [32, 45, 67, 100, 89, 123]
for (let i in vetor) {
    console.log(i, vetor[i])
    console.log(`${i} -> ${vetor[i]}`)
}

const obj = {
    nome: 'Vitor',
    sobrenome: 'Silvestre',
    idade: 22,
    altura: 1.84
}
for (let atributo in obj) {
    console.log(atributo, obj[atributo])
    console.log(`${atributo}: ${obj[atributo]}`)
}
