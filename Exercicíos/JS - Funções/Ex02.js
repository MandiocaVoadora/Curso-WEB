function validaTriangulo(A, B, C) {
    if (A < B + C && B < A + C && C < A + B){
        if(A == B && C == B){
            return console.log('Triângulo Equilátero.')
        }
        else if (A == B || B == C || C == A) {
            return console.log('Triângulo Isósceles.')
        }
        else{
            return console.log('Triângulo Escaleno.')
        }
    } else{
        return console.log('Os valores inseridos não são capazes de formar um triângulo.')
    }
}

validaTriangulo(6, 6, 6)
validaTriangulo(6, 6, 7)
validaTriangulo(5, 6, 7)
validaTriangulo(2, 4, 10)