import API from "./API";

async function getFilmsService(planetId = '') {
    return await API.get(`https://swapi.dev/api/films/${planetId && planetId+'/'}`);
}

const allFilmsServises = {
    getFilmsService,
}

export default allFilmsServises;