function comprarAuto(opcao) {
    switch(opcao){
        case 'hatch':
            return 'Compra efetuada com sucesso.'
            break;
        case 'sedan':
            return 'Tem certeza que prefere esse modelo?'
            break;
        case 'motocicleta':
            return 'Tem certeza que prefere esse modelo?'
            break;
        case 'caminhonete':
            return 'Tem certeza que prefere esse modelo?'
            break;
        default:
            return 'Não vendemos esse modelo aqui.'
    }
}

console.log(comprarAuto('hatch'))
console.log(comprarAuto('sedan'))
console.log(comprarAuto('motocicleta'))
console.log(comprarAuto('caminhonete'))
console.log(comprarAuto('jetski'))