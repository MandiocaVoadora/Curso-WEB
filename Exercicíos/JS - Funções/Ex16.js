function calculadora(num1, op, num2) {
    switch(op){
        case '+':
            return `soma: ${num1 + num2}`
            break;
        case '-':
            return `Subtração: ${num1 - num2}`
            break;
        case '*':
            return `Multiplicação: ${num1 * num2}`
            break;
        case '/':
            return `Divisão: ${num1 / num2}`
            break;
        default:
            return `Erro. Operação inválida.`
    }
}

console.log(calculadora(1, '+', 2))
console.log(calculadora(51, '-', 4))
console.log(calculadora(27, '*', 2))
console.log(calculadora(30, '/', 3))
console.log(calculadora(41, 'oi', 5))
console.log(calculadora(32, '**', 4))