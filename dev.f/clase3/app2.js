const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10)

    setTimeout(
        // operador condicional o tambien conocido como operador ternario;
        // es aque que es una construcción en JavaScript (y en muchos otros 
        // lenguajes de programación) que te permite escribir expresiones 
        // condicionales de una manera concisa. Tiene la siguiente sintaxis:

        // condición ? valorSiVerdadero : valorSiFalso;

        // Aquí, condición es una expresión que se evalúa como verdadera o falsa.
        // Si la condición es verdadera, se devuelve valorSiVerdadero, y si es falsa, 
        // se devuelve valorSiFalso.

        () => number > 5 ? resolve(number) : reject(new Error("menor a 5")), 2000
    )
})

promise
    .then(number => console.log(number))
    .catch(error => console.error(error))
    .finally(() => { console.log("Done!") })