const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i in vetor) {
    if (i == 5) {
        break
    }
    console.log(`${i} -> ${vetor[i]}`)
}

console.log('FIM')

for (let i in vetor) {
    if (i == 3){
        continue
    }
    console.log(`${i} -> ${vetor[i]}`)
}

console.log('FIM')

externo: for(let i in vetor){ // rótulo
    for (let y in vetor){
        if (i == 2 && y == 3) break externo
        console.log(i, y)
    }
}