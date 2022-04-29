//Ejercicio 10: Consultar  las representaciones válidas de valores lógicos.

if(0){
    console.log('el valor de `0` es true')
}else{
    console.log('el valor de `0` es false')
}

if(-0){
    console.log('el valor de `-0` es true')
}else{
    console.log('el valor de `-0` es false')
}

if(null){
    console.log('el valor de `null` es true')
}else{
    console.log('el valor de `null` es false')
}

if(undefined){
    console.log('el valor de `undefined` es true')
}else{
    console.log('el valor de `undefined` es false')
}

if(NaN){
    console.log('el valor de `NaN` es true')
}else{
    console.log('el valor de `NaN` es false')
}

if(""){
    console.log('el valor de `""` es true')
}else{
    console.log('el valor de `""` es false')
}

if(1){
    console.log('el valor de `1` es true')
}else{
    console.log('el valor de `1` es false')
}

let objeto = {}
if(objeto){
    console.log('el valor de `objeto` es true')
}else{
    console.log('el valor de `objeto` es false')
}

let sumar = (a , b) => {return a +b;}
if(sumar){
    console.log('el valor de `sumar` es true')
}else{
    console.log('el valor de `sumar` es false')
}sumar