//Ejercicio 18: Crear objetos decha apartid de cadenas de caractreres

let cadenaFecha = 'Nov 11, 1955 13:17:19';

let fecha = new Date(cadenaFecha);

console.log(fecha)

//Cambiar el mes
fecha.setMonth(0)//Enero
console.log(fecha)