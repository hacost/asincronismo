const doSomethingAsync = () =>{
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do something Async'), 3000)
            : reject(new Error('Test Error'))
    })
}

const doSomething = async () =>{
    const something = await doSomethingAsync()
    console.log(something)
}

console.log('Before doSomething')
doSomething()
console.log('After doSomething')

// manejar error
const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync()
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}

console.log('Before anotherFunction')
anotherFunction()
console.log('After anotherFunction')