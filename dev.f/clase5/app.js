//consumir la API de Superheroes y nos va a mostrar los caracteres
const axios = require('axios')

// constante con la url de la API
const urlAPI = "https://superheroapi.com/api/3161326367507697/70";

// async function inspectResponse() {
//     try {
//         const response = await axios.get(urlAPI);
//         console.log(response.data); // Imprime la respuesta completa en la consola
//     } catch (error) {
//         console.log("Error al obtener la información", error);
//     }
// }
// inspectResponse();

// funcion para obtener y mostrar los datos
async function getHeroes() {
    try {
        //codigo principal
        const response = await axios.get(urlAPI)
        const heroes = response.data

        console.log("SuperHeroes List")
        const name = superhero.name;


    } catch (error) {
        // muestra un error
        console.log("Error al obtener la informacion", error)
    }
}
getHeroes();


