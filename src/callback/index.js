/** Callback example 1*/

const sum = (num1, num2) => {
    return num1 + num2;
};


const calc = (num1, num2, callback) => {
    return callback(num1, num2);
};

console.log(calc(2,2,sum));

/** Callback example with set time out */

setTimeout(() => {
    console.log('Hola Javascript');
}, 2000);

const saludo = (saludo) => {
    console.log(`Hola ${saludo}`);
}

setTimeout(saludo, 3000, 'Marcos');