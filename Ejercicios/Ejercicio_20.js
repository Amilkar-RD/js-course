// Crear y asignar propiedades a un objeto

//Primera forma:
let computador = {};
computador.precesador = 'Intel core i3';
computador.ram = 32;
computador.marca ='MSi';
computador.board = 'ASUS';

console.log(computador)
//reasignar el valor de una propiedad
computador.procesador = 'Intel core i5/ Novena generación';
console.log(computador)

//Segunda forma:
computador = {
    procesador : 'Intel core i7/ Novena generación',
    ram: 64,
    marca: 'Dell',
    board: 'ASUS'
};
console.log(computador)