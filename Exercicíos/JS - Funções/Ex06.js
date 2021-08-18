const jurosSimples = (capital, taxa, tempo) => {
    //juros simples em anos
    return `R$ ${(capital + (capital * taxa * tempo)).toFixed(2).toString().replace(".", ",")}`
}

const jurosCompostos = (capital, taxa, tempo) => {
    //juros compostos em meses
    for (let i = 0; i < tempo; i++){
       capital += capital * taxa
    }
    return `R$ ${capital.toFixed(2).toString().replace(".", ",")}`
}

console.log(jurosSimples(18000, 0.06, 3))
console.log(jurosCompostos(1000, 0.05, 24))