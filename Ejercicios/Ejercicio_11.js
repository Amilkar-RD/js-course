//Ejercicio 11: Promocionar de valores a tipo cadena de carateres (String) 

console.log(String('JavaScript'))
console.log(String(5))
console.log(typeof String(5))
console.log(String(false))
console.log(String(true))

let objeto = {nombre: 'amilkar', id: 123456}
console.log(String(objeto))

let numeros = [2,3,4,5];
console.log(String (numeros))

let sumar = (a,b) => {return a +b}
console.log(String (sumar))

objeto ={toString: function() { return '¡Hola!'}}
console.log(String(objeto))