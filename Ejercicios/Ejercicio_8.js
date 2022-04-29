//Ejercicio 8 : Proporcionar valores a tio lógico(booleao).

console.log(Boolean(-0))// retorna false
console.log(Boolean(0)) // retorna false
console.log(Boolean(-1)) // retorna true
console.log(Boolean(1)) // retorna true

console.log()

console.log(Boolean(new Number(0))) // retorna true
console.log(Boolean(NaN)) // retorna false

console.log()

console.log(Boolean(true)) // retorna true
console.log(Boolean(false)) // retorna false

console.log()


console.log(Boolean(undefined)) // retorna false
console.log(Boolean(null)) // retorna false


console.log()

console.log(Boolean("")) // retorna false
console.log(Boolean(new String())) // retorna true
console.log(Boolean("true")) // retorna true
console.log(Boolean("false")) // retorna true

console.log()

console.log(Boolean({})) // retorna true
console.log(Boolean([])) // retorna true