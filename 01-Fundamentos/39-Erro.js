function testeErro(erro){
    throw 'Erro 9098723'
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        testeErro(e)
    }
    finally{
        console.log('finally')
    }
}

const obj = {
    nome: 'Vitor'
}

imprimirNomeGritado(obj)