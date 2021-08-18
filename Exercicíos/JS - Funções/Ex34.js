function comparaString(str1, str2) {
    let aux = ''
    let returno = 0
    for (let i in str1) {
        aux = str1.charAt(i).toLowerCase()
        for (let j in str2) {
            if (aux == str2.charAt(j).toLowerCase()){
                retorno = true
                break
            } else {
                retorno = false
            }
        } if (!retorno) {
            return retorno
        }
    }
    return retorno
}

console.log(comparaString('abc', 'cbaa'))
console.log(comparaString('abc', 'def'))