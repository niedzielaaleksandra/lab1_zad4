const _ = require('lodash');
const Calculator = require('./Calculator.js')

const item1 = new Calculator([1, 2, 3, 4, 5])
const item2 = new Calculator([1, 'text', 3, {}])

console.log('Wynik: item1');
console.log(item1.object);
console.log(item1.sum());
console.log(item1.subtract());

console.log(' ');
console.log('Wynik: item2');
console.log(item2.object);
console.log(item2.sum());
console.log(item2.subtract());
