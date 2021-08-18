function Carro(velocidadeMaxima = 200, aceleracao = 5) {

    let velocidadeAtual = 0

    this.acelerar = function() {
        if (velocidadeAtual + aceleracao <= velocidadeMaxima) {
            velocidadeAtual += aceleracao
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.velocimetro = _ => {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.velocimetro())

const ferrari = new Carro(450, 25)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.velocimetro())

console.log(ferrari.velocidadeAtual)