//Array
const lista = [
    1,
    'hola',
    true
];

//console.log(lista);

//Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: 'xiamomi',
    tiposContacto: ['USB C', 'Micro USB']
}
movil.year = 2023; // agregar nuevo atributo a un objeto
movil.marca = "samsung"; //modificar los valores de un atributo dentro de un objeto 
 

console.log(movil.marca);

//Fechas
//Libreria de apoyo moment.js
const ahora = new Date();
console.log(ahora)