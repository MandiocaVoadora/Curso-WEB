// Parâmetros e Retornos são opcionais
function calcArea (altura, largura){
    const area = altura * largura
    if (area > 20) {
        console.log(`Area acimsa do permitido: ${area}m²`)
    } else {
        return area
    }
}

console.log(calcArea(2, 3))
console.log(calcArea(2))
console.log(calcArea())
console.log(calcArea(2, 3, 45, 65, 100))
console.log(calcArea(5, 5))
