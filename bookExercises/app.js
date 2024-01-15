// el tipo de dato mas importante en js son los objetos
var book = { //los objetos estan encerrados en llaves
    topic: "javascript", //la propiedad "topic" tiene el valor de "javascript"
    fat: true // la propiedad fat es verdadera
};
console.log(book.fat); //print a property fat on book object


// javascript tambien maneja arrays
var primes = [2, 3, 5, 14]; // declaramos un arreglo de 4 elementos
console.log(primes[0]); //aca mandamos a traer al elemento 0 del array  
console.log(primes.length); // imprime la longitud del array

primes[3] = 14; // podemos modificar o crear datos de un array
console.log(primes[3]); // --> 14


// una funcion es un bloque de codigo nombrado y parametrizado
function plus(x) { // declaramos la funcion plus
    return x + 1; // nos retorna el valor de x (que es el parametro) + 1
}
console.log(plus(2)); // --> 3


// cuando combinas funciones con objetos, se obtienen metodos
function Point(x, y) { //metodo contructor
    this.x = x;
    this.y = y;
}
var p = new Point(2, 4);
console.log(p);

