let contador = 0
while (contador <= 10) {
    console.log(`Contador WHILE = ${contador}`)
    contador++
}

for (let i = 0; i <= 10; i++) {
    console.log('Contador FOR = ', i)
}

const vetor = [32, 1, 45, 7, 567, 123, 98, 12]
for (let i = 0; i < vetor.length; i++) {
    console.log(`Percorrendo vetor, posição ${i}: ${vetor[i]}`)
} 