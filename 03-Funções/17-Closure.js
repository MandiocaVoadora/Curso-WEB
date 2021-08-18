// Closure é o escopo criado quando a função é declarada
// Esse escopo permite a função acessar e manipular atributos externos á função 

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro()
}

console.log(fora())

/* const minhaFuncao = fora()
console.log(minhaFuncao()) */ // exemplo da aula, da erro