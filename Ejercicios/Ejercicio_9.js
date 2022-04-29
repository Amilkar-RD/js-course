//Ejercicio 9: Determinar si una variable booleana ha sido inicializada.

let a = Boolean(true);
let b = false;
let c= '';
let d = new Number(5);

console.log(typeof a);
console.log(typeof a === 'boolean');
console.log(typeof b === 'boolean');
console.log(typeof c);
console.log(typeof c === 'boolean');
console.log(typeof d); //Retorna object. cuando se declara la variable se le asigna una instancia de una clase
console.log(typeof d === 'boolean');


