function bissexto(ano) {
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
        return true
    } else {
        return false
    }
}

console.log(bissexto(2014))
console.log(bissexto(4))
console.log(bissexto(2000))
console.log(bissexto(1600))