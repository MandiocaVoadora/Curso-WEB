function bhaskara(a, b, c) {
    const delta = Math.pow(b, 2) - 4 * a * c
    if (delta < 0) {
        return `Delta é negativo.`
    } else {
        const x = [(-(b) + Math.sqrt(delta))/(2 * a), (-(b) - Math.sqrt(delta))/(2 * a)]
        return `x¹ = ${x[0]} x² = ${x[1]}`
    }
}
console.log(bhaskara(4, 2,-6))
