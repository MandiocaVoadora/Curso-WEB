function factorial (numero) {
    let fatorial = numero
    for (let i = 1; i < numero; i++) {
        fatorial *= i 
    }
    return fatorial
}
console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(6))
console.log(factorial(7))
console.log(factorial(8))
console.log(factorial(9))