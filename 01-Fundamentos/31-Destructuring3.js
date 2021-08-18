function teste ({min = 1, max = 1000}){
    const valor = Math.random() * (max - min + 1) + min
    return Math.floor(valor)
}
console.log(teste(14,25))
console.log(teste({}))
// console.log(teste()) // vai dar erro sem as chaves ou algum valor

obj = {min: 14 , max: 25}
console.log(teste(obj))

console.log(teste({min:14,max:25}))