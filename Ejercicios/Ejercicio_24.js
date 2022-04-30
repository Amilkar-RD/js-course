//Determinar si una variable es un objeto plano

//Estos son los objetos planos que se pueden crear en js
let objetoPlano = {};
let objetoPlano1 = new Object();


//Todo lo que se diferencia de la literal de object y
//la construccion de object no son objetos planos
let fecha = new Date();
let cadena = new String();


console.log(objetoPlano.constructor === Object);
console.log(objetoPlano1.constructor === Object);

console.log();
console.log(fecha.constructor === Object);//No retornan
console.log(cadena.constructor === Object); // true



