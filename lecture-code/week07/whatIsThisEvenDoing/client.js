// // what_01.js
// // let thisVal = 'four' / 2;
// // console.log(thisVal);
// // Step 1
// let firstNumber = 4;
// let secondNumber = '2';
// let thirdNumber = theDivider(firstNumber, secondNumber);
// console.log('thirdNumber after step 1:', thirdNumber);

// // // Step 2
// let fourthNumber = '1';
// fourthNumber = Number(fourthNumber);
// if (thirdNumber) {
//    fourthNumber += thirdNumber;
// }
// console.log('fourthNumber after step 2:', fourthNumber);

// // // Step 3
// let fifthNumber = theAddinator(firstNumber, fourthNumber, secondNumber);

// console.log('fifthNumber after step 3:', fifthNumber);

// // // Step 4
// let sixthNumber = theAddinator(fifthNumber, fourthNumber, thirdNumber);

// console.log('sixthNumber after step 4:', sixthNumber);

// function theDivider(numberOne, numberTwo) {
//    return numberOne / numberTwo;
// }

// function theAddinator(numberOne, numberTwo) {
//    return numberOne + numberTwo;
// }

// // what_02.js

// // Step 1
// let firstNumber = 4;
// let secondNumber = '2';

// let thirdNumber = theDivider(firstNumber, secondNumber);
// // let thirdNumber = theDivider(secondNumber, firstNumber);
// console.log('thirdNumber after step 1:', thirdNumber);

// // // Step 2
// let fourthNumber = '1';

// if (thirdNumber) {
//    fourthNumber += thirdNumber;
// }

// console.log('fourthNumber after step 2:', fourthNumber);

// // // Step 3
// let fifthNumber = theAddinator(firstNumber, fourthNumber, secondNumber);

// console.log('fifthNumber after step 3:', fifthNumber);

// // Step 4
// let sixthNumber = theAddinator(fifthNumber, fourthNumber, thirdNumber);

// console.log('sixthNumber after step 4:', sixthNumber);

// function theDivider(numberOne, numberTwo) {
//    numberOne / numberTwo;
// }

// function theAddinator(numberOne, numberTwo) {
//    return numberOne + numberTwo;
// }
// // what_03.js

// // Step 1
// let firstNumber = 4;
// let secondNumber = '2';

// let thirdNumber = theDivider(firstNumber, secondNumber);

// console.log('thirdNumber after step 1:', thirdNumber);

// // // Step 2
// let fourthNumber = 1;

// if (thirdNumber) {
//    fourthNumber += thirdNumber;
// }

// console.log('fourthNumber after step 2:', fourthNumber);

// // // Step 3
// let fifthNumber = theAddinator(firstNumber, fourthNumber, secondNumber);

// console.log('fifthNumber after step 3:', fifthNumber);

// // // Step 4
// let sixthNumber = theAddinator(fifthNumber, fourthNumber, thirdNumber);

// console.log('sixthNumber after step 4:', sixthNumber);

// function theDivider(numberOne, numberTwo) {
//    return numberOne / numberTwo;
// }

// function theAddinator(numberOne, numberTwo) {
//    return numberOne + numberTwo;
// }
// // what_04.js

// // Step 1
// let firstNumber = 4;
// let secondNumber = '2';

// let thirdNumber = theDivider(firstNumber, secondNumber);

// console.log('thirdNumber after step 1:', thirdNumber);

// // // Step 2
// let fourthNumber = 1;

// if (thirdNumber) {
//    fourthNumber += thirdNumber;
// }

// if (0) {
//   console.log('TRUE!!');
// }

// console.log('fourthNumber after step 2:', fourthNumber);

// // // Step 3
// let fifthNumber = theAddinator(firstNumber, fourthNumber, secondNumber);

// console.log('fifthNumber after step 3:', fifthNumber);

// // // Step 4
// let sixthNumber = theAddinator(fifthNumber, fourthNumber, thirdNumber);

// console.log('sixthNumber after step 4:', sixthNumber);

// function theDivider(numberOne, numberTwo) {
//    numberOne / numberTwo;
// }

// function theAddinator(numberOne, numberTwo) {
//    return numberOne + numberTwo;
// }
// // what_05.js

// // Step 1
let firstNumber = 2;
let secondNumber = '8';

let thirdNumber = theDivider(firstNumber, secondNumber);

console.log('thirdNumber after step 1:', thirdNumber);

// // Step 2
let fourthNumber = 1;

if (thirdNumber) {
  //  fourthNumber += thirdNumber;
  thirdNumber += fourthNumber;
  // fourthNumber = thirdNumber + fourthNumber;

}

console.log('fourthNumber after step 2:', fourthNumber);
console.log('thirdNUMBER after step 2:', thirdNumber);
// // Step 3
let fifthNumber = theAddinator(fourthNumber, firstNumber, secondNumber);

console.log('fifthNumber after step 3:', fifthNumber);

// // Step 4
let sixthNumber = theAddinator(fourthNumber, fifthNumber, thirdNumber);

console.log('sixthNumber after step 4:', sixthNumber);

function theAddinator(numberOne, numberTwo) {
   return numberOne / numberTwo;
}

function theDivider(numberOne, numberTwo) {
   return numberOne + numberTwo;
}
