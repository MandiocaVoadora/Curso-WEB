function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        return console.log(`Bem-vindo, ${this.nome}!`)
    }
}

const person = new Pessoa('Vitor')
person.falar()

console.log(person)

/*
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
*/