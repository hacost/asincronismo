const { error } = require("console")

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey....')
        } else {
            reject('Wooooops...')
        }
    })
}

// Ejecutar nuestra promesa
somethingWillHappen()
.then(response => console.log(response))
.catch(error => console.error(error))

// otro ejejmplo de promesa
const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True')
            }, 2000)
        } else {
            // buena practica para ver la trasa de donde proviene el error
            const error = new Error('Mmmm, algo salio mal ...')
            reject(error)
        }
    })
}

// ejecutar nuestra segunda promesa
somethingWillHappen2()
// podemos desencadenar los then que queramos
.then(response => console.log(response))
.catch(err => console.error(err))


// ejecutar varias promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(err => {
        console.error(err)
    })