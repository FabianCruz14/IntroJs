// escribe una funcion que tomara un numero como argumento y devuelva una promesa
// la cual deberá realizar un calculo de manera asincrona como el resultado de elevar
// un numero al cuadrado despues de un retraso de 5 segundos y devolver el resultado
// o un mensaje de error si el numero es negativo


// adding a new function calNum and will add a parameters (num)
const calNum = (num) => {
    // return fuction wuth a promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 0) {
                const result = (num * num)
                resolve(result)
            } else {
                reject(new Error("Your number is under to 0"))
            }
        }, 5000);
    })
}

// now, we show a result with a .then option
calNum(9)
    .then(result => {
        console.log("Result: ", result)
    })
    .catch(error => {
        console.log("Error!", error)
    }) 