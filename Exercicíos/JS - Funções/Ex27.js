function crescimento(alt1, taxa1, alt2, taxa2) {
    if (alt1 > alt2){
        if (taxa1 >= taxa2) {
            return `A altura da criança 1 é maior que a altura da criança 2, e sua taxa de crescimento é ${taxa1 == taxa2 ? 'igual a ' : 'maior que a '}criança 2.`
        } else {
            let contador = 0
            while (alt2 < alt1) {
                alt1 += taxa1
                alt2 += taxa2
                contador++
            }
            return `A criança 1 é maior que a criança 2, porem irá demorar ${contador} ano(s) para que a criança 2 passe a criança 1 em tamanho`
        }
    }else if (alt2 > alt1) {
        if (taxa2 >= taxa1) {
            return`A altura da criança 2 é maior que a altura da criança 1 e sua taxa de crescimento é ${taxa1 == taxa2 ? 'igual a ' : 'maior que a '}criança 1.`
        } else {
            let contador = 0
            while (alt1 < alt2) {
                alt1 += taxa1
                alt2 += taxa2
                contador++
            }
            return `a criança 2 é maior que a criança 1, porem irá demorar ${contador} ano(s) para que a criança 1 passe a criança 2 em tamanho`
        }
    } else {
        return `As alturas são iguais!!`
    }
}

console.log(crescimento(1.5, 0.5, 1.5, 0.4))
console.log(crescimento(1.5, 0.5, 1.2, 0.7))
console.log(crescimento(1.2, 0.7, 1.5, 0.5))
