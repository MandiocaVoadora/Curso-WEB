function teste1 (num){
    if (num > 7) 
        console.log(num)
        console.log('fim') // não esta dentro da estrutura
}

teste1(6)
teste1(10)

function teste2 (num){
    if (num > 7) ;
    console.log(num)
}

teste2(5)
teste2(3)
teste2(10)