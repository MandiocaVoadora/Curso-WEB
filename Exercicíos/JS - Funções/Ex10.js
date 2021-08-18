function divisivel(num) {
    num = parseInt(num)
    if (num % 3 == 0) {
        return true
    } else if (num % 3 != 0){
        return false
    } else {
        return `Valor inserido inválido.`
    }
}

console.log(divisivel(3))
console.log(divisivel(27))
console.log(divisivel(32))
console.log(divisivel('vitor'))
console.log(divisivel('3'))