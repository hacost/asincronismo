/** first install xmlhttprequest
 * npm install xmlhttprequest --save
 * 
 */

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
// con ES 6 y promesas
const fetchData = (url_api) =>{
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        //ponemos true para activar el asincronismo, por default es true
        xhttp.open('GET', url_api, true)
        xhttp.onreadystatechange = ( ()  => {
              if (xhttp.readyState === 4) {
                // usar un if ternario
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error(`ERROR ${url_api}`))
            }   
        })
        xhttp.send()
    }) 
}

// exportar mi función con node y poderla usar en otros archivos
module.exports = fetchData

//Forma antes de ES 6
// function fetchData(url_api, callback){
//    let xhttp = new XMLHttpRequest()
//    //ponemos true para activar el asincronismo, por default es true
//    xhttp.open('GET', url_api, true)
//    xhttp.onreadystatechange = function (event){
//        if (xhttp.readyState === 4) {
//            if (xhttp.status === 200) {
//                callback(null, JSON.parse(xhttp.responseText))
//            } else {
//                const error = new Error(`ERROR ${url_api}`)
//                return callback(error, null)
//            }
//        }
//    }
//    xhttp.send()
// }