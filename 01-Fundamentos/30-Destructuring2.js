const [a] = [10]
console.log(a)

const [n1, , n3, n4, n5, n6 =0 ] = [10, 6, 7, 29]
console.log(n1, n3, n5, n6)

const [ , [ , nota]] = [[9, 6, 7], [ 7, 900 , 6]]
console.log(nota)

//exemplo mais prático:
const valores = [54, 76, 92, 100, 2020]
const [nu1, nu2, nu3 ,nu4, nu5] = valores
console.log(nu1, nu2, nu3)
