console.log('Nodetastic! It works!');

// assign whatever is exported in the module to a variable
let arrayOfPeople = require('../people.js');
let arrayOfAnimals = require('./newDir/animals.js');

console.log(arrayOfPeople);
console.log(arrayOfAnimals);