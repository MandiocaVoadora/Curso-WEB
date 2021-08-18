const string = "Cod3r"

console.log(string.charAt(3)) // retorna a posição 4 do conteudo da variavel
console.log(string.charAt(5)) // retorna valor vazio, ja que nao existe nada na posição
console.log(string.charCodeAt(3)) // valor na tabela unicode
console.log(string.charCodeAt(5)) // NaN

console.log(string.indexOf('3')) // retorna o endereço do valor inserido
console.log(string.indexOf('2')) // retorna -1, provavelmente deve significar false
console.log(string.indexOf('od3r'))

console.log(string.substring(1)) // lê apartir da posição
console.log(string.substring(2, 4)) // lê apartir da posiçãox, até a posição y

console.log('Escola '.concat(string).concat('!')) // método que concatena
console.log('Escola ' + string + '!') // também concatena

console.log(string.replace(3, 'e')) // troca o valor no endereço x pelo valor y

console.log('Ana,Marcelo,Mariana'.split(',')) //fatio apartir do indicativo e transformo em um array
