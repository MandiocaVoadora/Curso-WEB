const consultarMedia = function (nota) {
    if (nota >= 7){
        console.log('Aprovado!!!')
    }else{
        console.log('Reprovado!!!')
    }
}

consultarMedia(10)
consultarMedia(6)
consultarMedia(7)
consultarMedia('ola') // cuidado
