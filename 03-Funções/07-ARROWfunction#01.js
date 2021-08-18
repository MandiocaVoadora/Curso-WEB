// CONTEUDO DA AULA
let dobro = function (a) {
    return a * 2    
}

dobro = (a) => {
    return a * 2
}

dobro = a => a * 2 // retorno implicito
console.log(dobro(7))

let ola = function () { // metodo literal
    return console.log('ola')
}

ola = () => { return console.log('ola') } // arrow function

ola = _ => console.log('ola') // underline como parametro

ola()