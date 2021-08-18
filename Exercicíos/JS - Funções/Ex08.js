function comparaPlacar(n) {
    n = n.split(" ")
    for (let i in n){
        n[i] = parseInt(n[i]) 
    }
    let retorno = [0, 0]
    let maior = 0
    let menor = 0
    for (let i in n) {
        if (i == 0) {
            maior = n[i]
            menor = n[i]
        } else {
            if (n[i] > maior){
                maior = n[i]
                retorno[0] += 1
            }
            if (n[i] < menor) {
                menor = n[i]
                retorno[1] = parseInt(i) + 1
            }
        }
    }
    return retorno
}

console.log(comparaPlacar('10 20 20 8 25 3 0 30 1'))