console.log(soma(3,4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function(x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function multi(x,y) {
    return x * y
}
console.log(mult(2, 3))
//console.log(multi(3, 4)) // não funcionaria
