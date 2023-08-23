//consumir la APO¡I de Rick & Morty y nos va a mostrar los caracteres
const axios = require('axios')

// constante con la url de la API
const urlAPI = "https://superheroapi.com/api/3161326367507697/70"

// funcion para obtener y mostrar los datos
async function getCharacteres() {
    try {
        //codigo principal
        const response = await axios.get(urlAPI)
        const characters = response.data.results

        console.log("SuperHeroes List")






    } catch (error) {
        // muestra un error
    }
}
