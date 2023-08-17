// En JavaScript, el método .then() se utiliza en objetos Promise para 
// encadenar acciones que deben realizarse después de que la promesa se 
// resuelva (estado "fulfilled") con un valor o se rechace (estado "rejected")
// con un motivo. Este método toma una o dos funciones de devolución de 
// llamada como argumentos.
const promesa = new Promise((resolve, reject) => {
    // we are created an asincrone task
    setTimeout(() => {
        const done = true

        if (done) {
            resolve("Operation has been a succes")
        } else {
            reject("error 404 :/ not found")
        }
    }, 2000)

})

// Usar el método .then() para encadenar acciones después de la resolución de la promesa
promesa.then(
    (resultado) => {
        console.log("Done!", resultado)
    },
    (error) => {
        console.error("Error", error)
    }
)