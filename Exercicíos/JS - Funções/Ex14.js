function confereFruta(fruta) {
    switch(fruta){
        case 'maça':
            return "Não vendemos esta fruta aqui"
            break;
        case 'kiwi':
            return 'Estamos com escassez de Kiwi.'
            break;
        case 'melância':
            return 'Aqui está, são 3 reais o quilo.'
            break;
        default:
            return 'Erro'
    }
}

console.log(confereFruta('maça'))
console.log(confereFruta('kiwi'))
console.log(confereFruta('melância'))
console.log(confereFruta('Kiwi'))