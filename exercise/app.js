// console.log("hello world");

// let num1 = 13;
// let num2 = 3312;
// console.log(num1, num2);

// // solicitamos los numeros al usuario
// let num1 = prompt("ingresa el primer numero: ");
// let num2 = prompt("ingresa el segundo numero; ");

// // los convertimos a numeros
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);

// console.log(num1, num2);

let num1 = 14;
let num2 = 3;
console.log(suma(num1, num2));
console.log(resta(num1, num2));
console.log(multiplicacion(num1, num2));
console.log(division(num1, num2));

function suma(n1, n2) {
    suma = n1 + n2;
    return suma;
}

function resta(n1, n2) {
    resta = n1 - n2;
    return resta;
}

function multiplicacion(n1, n2) {
    multiplicacion = n1 * n2;
    return multiplicacion;
}

function division(n1, n2) {
    division = n1 / n2;
    return division;
}