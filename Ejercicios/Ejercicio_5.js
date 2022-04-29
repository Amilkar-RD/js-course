//Ejercicio5: Validar si una variable es undefined o null

let numero = undefined;

if(numero === undefined){
    console.log('1. la variable `numero` es undefined')
}

if (numero === null){
    console.log('2. la variable `numero` es null')
}

numero = null
if (numero === null){
    console.log('3. la variable `numero` es null')
}