// ARROW FUNCTIONS 
// ep 127, file 21.js

// add this array who will help us understand the arrow functions

// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// // forEach
// // this function will help us to extract properties of a arrays
// meses.forEach( mes => {
//     if(mes == 'Marzo') {
//         console.log('Marzo si existe');
//     }
// });

for (let i = 0; i< carrito.length; i+=1){
    console.log(i + 1);
}