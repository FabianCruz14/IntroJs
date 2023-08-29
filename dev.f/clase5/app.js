const axios = require('axios');

const urlAPI = "https://superheroapi.com/api/3161326367507697/70";

async function getHeroes() {
    try {
        const response = await axios.get(urlAPI);
        const heroes = response.data.results;

        console.log("SuperHeroes List");

        heroes.forEach(superhero => {
            const name = superhero.name;
            console.log(`** Name: ${name}`);
        });

    } catch (error) {
        console.log("Error al obtener la información", error);
    }
}

getHeroes();
