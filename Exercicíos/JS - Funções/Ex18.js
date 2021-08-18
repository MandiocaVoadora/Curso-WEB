function numeroExtenso (num) {
    switch (num) {
        case 0:
            return `Zero`
            break;
        case 1:
            return `Um`
            break;
        case 2:
            return `Dois`
            break;
        case 3:
            return `Três`
            break;
        case 4:
            return `Quatro`
            break;
        case 5:
            return `Cinco`
            break;
        case 6:
            return `Seis`
            break;
        case 7:
            return `Sete`
            break;
        case 8:
            return `Oito`
            break;
        case 9:
            return `Nove`
            break;
        case 10:
            return `Dez`
            break;
        default:
            return `Número inserido fora do intervalo.`
    }
}

console.log(numeroExtenso(1))
console.log(numeroExtenso(2))
console.log(numeroExtenso(5))
console.log(numeroExtenso(6))
console.log(numeroExtenso(8))
console.log(numeroExtenso(13))
console.log(numeroExtenso(10))
console.log(numeroExtenso(11))
