// 16 - Write a conditional that assigns the value of the `pets` variable
// to a new variable called `mostPets` IF `pets` is greater than `friendsPets`.
// If `friendsPets` is greater than `pets`, assign the value of the `friendsPets`
// variable to `mostPets`. Console log the value of `mostPets`.

const pets = 4;
const friendsPets = 0;

let mostPets = friendsPets;
console.log('this is mostPets:', mostPets);

if (pets > friendsPets) {
  let mostPets = pets;
}

let otherMostPets = Math.max(pets, friendsPets);
console.log('otherMostPets is', otherMostPets);
console.log('this is a ' + 'string' + otherMostPets + ' which is neat');
console.log(`look how cool this is ${pets}`);


// } else if (friendsPets > pets) {
//   mostPets = friendsPets;
// } else {
//   mostPets = friendsPets;
// }

// '3' !== 3 //true
// '3' === 3 // false

if ('Pets' == 'pets') { // not equal ==
  console.log('it is true');
}
