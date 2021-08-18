const marcas = ['Mercedes', 'Audi', 'BMW']

const imprimirMarcas = (nome, indice) => {
    return console.log(`${indice + 1}- ${nome}`)
}

marcas.forEach(imprimirMarcas)
marcas.forEach(function (nome, index, x){
    return console.log(`${index}. ${nome} (${x})`)
})