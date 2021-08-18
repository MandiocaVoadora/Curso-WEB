class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar(){
        console.log(`Bem-vindo, ${this.nome}!`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

 // FUNCTION FACTORY 
function criarPessoa(nome) {
    return {
        nome,
        falar: () => {console.log(`Bem-vindo, ${nome}!`)}
    }
}

const p2 = new criarPessoa('João')
p2.falar()

console.log(p1)
console.log(p2)