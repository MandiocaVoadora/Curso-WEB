// CONSTEÚDO DA AULA
function Pessoa() {
    this.idade = 0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa

/* TESTE MALUCO

function testeFor() {
    this.idade = 0
    self = this
    for (let i = 0; i < 5; i++){
        self.idade++
    }
}

new testeFor
console.log(self.idade)

*/