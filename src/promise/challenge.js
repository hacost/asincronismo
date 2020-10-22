// importar mi función
const fetchData = require('../utils/fetchData')

const API = 'https://rickandmortyapi.com/api/character/'

// primer llamado de la API
fetchData(API)
    .then( data => {
        // muestro la info que retorno el llamado
        console.log(data.info.count)
        // retorno un nuevo llamado a la API
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        // muestro la info que retorno el llamado
        console.log(data.name)
        // retorno un nuevo llamado a la API
        return fetchData(data.origin.url)
    })
    .then(data => {
        // muestro la info que retorno el llamado
        console.log(data.dimension)
    })
    .catch(err => console.error(err))