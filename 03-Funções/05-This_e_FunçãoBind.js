// cointeúdo do video
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falando = pessoa.falar
falando() // undefined

const falando2 = pessoa.falar.bind(pessoa)
falando2()

// TESTE FUNCTION ARROW
const pessoa2 = {
    comprimento: 'Boa tarde!',
    falarTeste : () => {
        console.log(this.comprimento)
    }
}

const comprimentoTeste = pessoa2.falarTeste
comprimentoTeste() // undefined

// TESTE EXEMPLO CADERNO
const objTeste = {
    nome: 'Vitor',
    saudacaoF() {
        console.log('ola', this.nome)
    }
}
objTeste.saudacaoF()

const testeFalho = objTeste.saudacaoF
testeFalho()

const testeValido = objTeste.saudacaoF.bind(objTeste)
testeValido()