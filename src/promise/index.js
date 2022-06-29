/**
 * Estructura básica de las promesas
 * 
 * estados [pendiente, cumplido, rechazado]
 * 
 */

const promise = new Promise((resolve, reject) => {
    resolve('Todo correcto 👌');
});

const cows = 11;

const countCows = new Promise((resolve, reject) => {
    cows > 10 
    ? resolve(`We have ${cows} cows on the farm`) 
    : reject('There is no enought cows in the farm');
});

countCows
.then((result) => console.log(result))
.catch((err) => console.error(err))
.finally(() => console.log('Execution end'));