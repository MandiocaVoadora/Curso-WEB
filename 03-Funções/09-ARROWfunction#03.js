let comparaThis= function(param) {
    console.log(this === param)
}

comparaThis(global)

const obj = {}
comparaThis = comparaThis.bind(obj)

comparaThis(global)
comparaThis(obj)

let comparaThisARROW = (param) => {
    console.log(this === param)
}

comparaThisARROW(global)
comparaThisARROW(module.exports)

comparaThisARROW = comparaThisARROW.bind(obj)
comparaThisARROW(obj)