function pagarConvenio(idade) {
    if (idade < 10){
        return (100 + 80)
    } else if (idade >= 10 && idade <= 30){
        return (100 + 50)
    } else if (idade > 30 && idade <=60) {
        return (100 + 95)
    } else {
        return (100 +130)
    }
}

console.log(`R$ ${pagarConvenio(9)}`)
console.log(`R$ ${pagarConvenio(12)}`)
console.log(`R$ ${pagarConvenio(27)}`)
console.log(`R$ ${pagarConvenio(39)}`)
console.log(`R$ ${pagarConvenio(99)}`)