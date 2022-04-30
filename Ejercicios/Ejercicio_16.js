//Ejercicio 16: Crear una fecha por medio del objeto Date.


let hoy = new Date();

console.log(hoy)

let fecha = new Date('April 06, 1990 05:15')
console.log(fecha)

fecha = new Date(2013,3,13); //trae como fecha el mes de abril por que empieza a contar desde cero
console.log(fecha)



console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getDate());
console.log(fecha.getMilliseconds());


