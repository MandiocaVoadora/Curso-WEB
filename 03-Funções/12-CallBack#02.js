// sem callback
const notas = [7.8, 5.6, 8, 9.7, 10, 5.4, 6.8, 7.9, 4.5]

const notasBaixas= []
for (let i in notas ) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log('notasBaixas ', notasBaixas)

// com callback
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})
console.log('notasBaixas2', notasBaixas2)

// com callback 2
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log('notasBaixas3', notasBaixas3)

// com callback 3
const funcaoNota = nota => nota < 7
const notasBaixas4 = notas.filter(funcaoNota)
console.log('notasBaixas4', notasBaixas4)