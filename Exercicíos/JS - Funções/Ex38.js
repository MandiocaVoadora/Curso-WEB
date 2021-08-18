function contagemImpar(inicio = 0, final= 100) {
    if (inicio > final) {
        inicio = final + inicio
        final = inicio - final
        inicio = inicio - final
    }
    for (let i = inicio; i < final + 1; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}

contagemImpar(100, 1)
contagemImpar(10, 1001)