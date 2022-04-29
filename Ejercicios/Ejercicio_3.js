//Ejercicio3: Validar si una variable tiene un valor asignado

let a;
let b = 11;

if(a === undefined){
    console.log('La variable `a` aún no tiene un valor asignado.')

}

//Le asignamos un valor y agregamos un else
a = 'javaScript'

if(a === undefined){
    console.log('La variable `a` aún no tiene un valor asignado.')

}else{
    console.log('la variable `a` tiene un valor asignado')
}