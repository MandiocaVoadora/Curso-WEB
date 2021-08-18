// Função em JS é First-Class object (Citizens)
// High-order function

// criar de forma literal
function nomeFuncao(parametro){
    // bloco de codigo
    console.log(parametro)
}

// armazenar dentro de uma variavel
const funcaoDuplicar = function(parametro){
    console.log(parametro * 2)
}

// armazenar uma função dentro de um array
const vetor = [function (parametro, parametro2) {return parametro + parametro2 }, nomeFuncao, funcaoDuplicar]
vetor[1]('Oi, eu sou Goku!') // assim que se chama um função de dentro do array
console.log(vetor[0](1, 45)) // exemplo2

// função como parametro
function nomeGenerico(fun) {
    fun()
}
nomeGenerico(function() { console.log('Executando...') })

// uma função pode retornar/conter uma função
function soma (a, b){
    return function (c) {
        console.log(a + b + c)
    }
}
soma(7, 2)(4)

const teste = soma(3, 4) // outra forma de chama-la
teste(5)