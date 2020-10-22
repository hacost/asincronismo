// import my function
const fetchData = require('../utils/fetchData')

const API = 'https://rickandmortyapi.com/api/character/'

// with a regular function 
// async function anotherFunction(url_api) {
//     try {
//         const data = await fetchData(url_api)
//         const character = await fetchData(`${API}${data.results[0].id}`)
//         const origin = await fetchData(character.origin.url)

//         console.log(data.info.count)
//         console.log(character.name)
//         console.log(origin.dimension)

//     } catch (error) {
//         console.error(error)
//     }
// }

// with arrow function
const anotherFunction = async (url_api) =>  {
    try {
        const data = await fetchData(url_api)
        const character = await fetchData(`${API}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url)

        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)

    } catch (error) {
        console.error(error)
    }
}

console.log('Before call')
anotherFunction(API)
console.log('After call')