//Determinar el tipo de un objeto a través de la propiedad constructor

let fecha = new Date();
let cadena = new String();

//La propiedad constructor nos devuelve el nombre de el constructor
console.log(fecha.constructor)
console.log(cadena.constructor)

//Lo podemos comparar con el nombre de la clase constructora 
console.log(fecha.constructor === Date)
console.log(cadena.constructor === String)
