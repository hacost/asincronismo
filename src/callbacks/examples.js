//declaramos una función
function sum(valor1, valor2){
    return valor1 + valor2
}

//indicamos que vamos a usar un callback, podemos ponerle otro nombre
function calculator(valor1, valor2, callback){
    return callback(valor1, valor2)
}

// ejecutamos el callback, solo se pone sum, sin parentesis 
// por que solo indicamos el nombre de la función y no la ejecutamos como tal
console.log(calculator(2,2,sum))

// otro ejemplo para invocar una función callback
function date(callback){
    console.log(new Date)
    setTimeout(() => {
        let date = new Date
        callback(date)
    }, 3000);
}

// implementar la función callback
function printDate(dateNow){
    console.log(dateNow)
}

//llamar a date pasandole nuestro callback
date(printDate)