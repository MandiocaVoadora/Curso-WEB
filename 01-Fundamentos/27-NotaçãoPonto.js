console.log(Math.ceil(6.7))
const obj1 = {}
obj1.nome = "Bola"
// obj1['nome'] = "Bola1"
console.log(obj1.nome)

function obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new obj("cadeira")
const obj3 = new obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
