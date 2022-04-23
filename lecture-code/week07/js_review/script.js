console.log('It works!');

// . dot, period
// () parenthesis, parens
// [] brackets, square brackets, square braces
// {} curly braces, curlies, curly brackets
// < less than, bird, angle brackets
// > greater than, gator, angle brackets
// / forward slash, slash, whack
// \ back slash
console.log('There\'s a thing!');
// ! exclamation, bang, not
// # pound, hash, number, octothorpe
// * star, asterisk, splat, times (multiplication)
// $ bling, dollar sign, cash
// || pipes, or
// && double ampersand, and
// NaN - not a number, bread
// = assignment operator
// === equivalence (strict)
// !== not equal

// number
// 18

// string
// 'taco'
// '18'

// boolean
// true
// false

// undefined
// declared a variable, but never given it a value

// null
// empty on purpose

// array
// made with square brackets
// contain any data type

// object
// made with curly braces
// contains key/value pairs

// NaN 
// 10 + 'ten'


// let x = 1;
let x; // expression
console.log('x is', x);
x = ['an', 'array', 'of', 'strings'];
console.log('array?', x[1]);
console.log('now x is', x);
const isAwesome = true;
// SCREAMING_SNAKE_CASE
// kebab-case

// variables named using nouns
// functions named using verbs

let y = 3; // expression
y = y + 1; // expression
// expression === anything that evaluates to a single value

// + converts a number to a string to concatenate
// '1' + 2 === '12';

// other operators convert string to number, if possible
// '10' - 5 === 5
// '36' / 6 === 6
// 'ten' * 3 === NaN


// if (/* expression is truth */) {
//   // perform some logic
  
// } else {
//   // perform some other logic
// }

// == opposite is !=
// === opposite is !==
if (3 !== 5) {
  console.log('Duh, no');
}

// <= less than or equal
// >= greater than or equal

// run while a condition is true
// while (/* expression is truthy */) {
//   // perform some logic
// }

// run a set number of times
for (let i = 0; i < 3; i++) {
  // perform some logic
  // i can be used in here if we want - it's a number
}

const hats = ['stocking cap', 'baseball cap', 'fedora', 'top hat'];
console.log('I am wearing a', hats[3]);
for (let hat of hats) {
  // each hat is item in hats array
  // console.log('I\'m wearing a ${hat}!');
  console.log(`I'm wearing a ${hat}!`);
}

// function declaration
// can appear anywhere
function doubleIt(x) {
  // x is an argument/parameter
  return x * 2;
  // return exists function with a value
}

let secret = doubleIt(123);
let superSecret = doubleIt(secret);

// function expression
// must be defined before used
// value is anonymous function
// let doubleIt = function(x) {
//   return x * 2;
// }

// Number()
// parseFloat()
// parseInt() 
// String() 

// object methods
// .toString()

// string methods
// .charAt(3)
// .substring()

// array methods
// .push(), .pop(), .shift(), .unshift()

// convert string to array:
let str = 'a, b, c, d, e';
let arr = str.split(',');
console.log('str is', str);
console.log('arr is', arr);

let myScrabbleTiles = [
  { tile: 'N', score: 1 },
  { tile: 'K', score: 5 },
  { tile: 'Z', score: 10 },
  { tile: 'X', score: 8 },
  { tile: 'D', score: 2 },
  { tile: 'A', score: 1 }
];

function sumScores(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += (arr[i]).score;
  }
  return sum;
}

console.log('sumScores returns', sumScores(myScrabbleTiles));