function soma(){
    let soma = 0
    for (let i in arguments) {
        soma += arguments[i]        
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1,2,3,4,5,6))
console.log(soma(1.2, 3.5, 'teste'))
console.log(soma('a', 'b', 'c'))
console.log('exemplo array ' + soma(1, 2, 3, [1, 2, 3]))
