function compras (trabalho1, trabalho2){
    const sorvete = trabalho1 || trabalho2
    const tv50 = trabalho1 && trabalho2
    // const tv32 = !!(trabalho ^ trabalho2) // bitwise xor
    const tv32 = trabalho1 != trabalho2
    const mantersaudavel = !sorvete

    return { sorvete, tv50, tv32, mantersaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
